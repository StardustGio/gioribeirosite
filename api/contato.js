/* Recebe o formulário de contato do site e manda por e-mail.
   Roda na Vercel como função serverless: o arquivo estar em /api/contato.js
   já cria o endereço /api/contato, não precisa configurar nada além das
   variáveis de ambiente.

   Variáveis de ambiente (Vercel → Settings → Environment Variables):
     RESEND_API_KEY  chave da conta em resend.com
     CONTATO_PARA    e-mail que vai receber as mensagens
     CONTATO_DE      opcional. Remetente. Sem domínio verificado no Resend,
                     deixe em branco: ele usa onboarding@resend.dev, que só
                     entrega para o e-mail da sua própria conta Resend.
*/

const LIMITE = { nome: 120, email: 160, mensagem: 4000 };

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ erro: "Use POST." });
  }

  let dados = req.body;
  if (typeof dados === "string") {
    try { dados = JSON.parse(dados); } catch { dados = null; }
  }
  if (!dados || typeof dados !== "object") {
    return res.status(400).json({ erro: "Corpo inválido." });
  }

  /* campo-isca: se veio preenchido, é robô. Responde 200 para o robô achar
     que deu certo, mas não manda nada. */
  if (String(dados["bot-field"] || "").trim()) {
    return res.status(200).json({ ok: true });
  }

  const nome = String(dados.nome || "").trim().slice(0, LIMITE.nome);
  const email = String(dados.email || "").trim().slice(0, LIMITE.email);
  const mensagem = String(dados.mensagem || "").trim().slice(0, LIMITE.mensagem);

  if (!nome || !mensagem || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ erro: "Nome, e-mail e mensagem são obrigatórios." });
  }

  const chave = process.env.RESEND_API_KEY;
  const para = process.env.CONTATO_PARA;
  if (!chave || !para) {
    console.error("Faltam RESEND_API_KEY ou CONTATO_PARA nas variáveis de ambiente.");
    return res.status(500).json({ erro: "Formulário não configurado." });
  }

  const escapar = t => t.replace(/[&<>"]/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${chave}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTATO_DE || "Portfólio <onboarding@resend.dev>",
        to: [para],
        reply_to: email,
        subject: `Contato pelo site: ${nome}`,
        text: `Nome: ${nome}\nE-mail: ${email}\n\n${mensagem}\n`,
        html: `<p><strong>Nome:</strong> ${escapar(nome)}<br>`
            + `<strong>E-mail:</strong> ${escapar(email)}</p>`
            + `<p style="white-space:pre-wrap">${escapar(mensagem)}</p>`,
      }),
    });

    if (!r.ok) {
      console.error("Resend respondeu", r.status, await r.text());
      return res.status(502).json({ erro: "Não consegui enviar agora." });
    }
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(502).json({ erro: "Não consegui enviar agora." });
  }
};
