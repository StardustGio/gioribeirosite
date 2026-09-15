# Site — gio ribeiro

Site de portfólio em arquivo único. Não precisa instalar nada, não precisa
compilar nada. Abra `index.html` no navegador e ele funciona.

---

## 1. Como editar

Abra `index.html` em qualquer editor de texto (recomendo o **VS Code**, que é
gratuito — mas o Bloco de Notas também serve).

Todo o conteúdo do site está logo no começo do arquivo, entre as duas faixas:

```
██  AQUI É ONDE VOCÊ EDITA  ██
...
==========  FIM DO CONTEÚDO  ==========
```

Daí pra baixo é o funcionamento do site. Você não precisa tocar em nada.

### As regras que evitam quebrar o arquivo

1. Texto sempre entre aspas: `titulo: "Meu projeto"`
2. Cada linha termina com vírgula
3. Se o seu texto tiver aspas, use aspas simples dentro: `"o projeto 'Bloom'"`
4. Salve e recarregue a página no navegador (Ctrl+F5 se não atualizar)

Se o site aparecer em branco depois de uma edição, foi erro de digitação no
bloco. Aperte F12 no navegador, abra a aba **Console** e a mensagem vermelha
diz a linha do erro. Quase sempre é vírgula ou aspas faltando.

### Adicionar um projeto

Dentro de `projetos: [ ... ]`, copie um bloco inteiro — do `{` até o `},` —
cole logo abaixo e troque o conteúdo:

```js
{
  id: "nome-curto-sem-espaco",     // precisa ser único
  titulo: "Nome do projeto",
  eixo: "identidade",              // identidade | diagramacao | outros | uxui | social
  ano: "2026",
  cliente: "Nome do cliente",
  resumo: "Uma frase que aparece no card.",
  ferramentas: ["Illustrator", "Photoshop"],
  descricao: [
    "Primeiro parágrafo da página do projeto.",
    "Segundo parágrafo.",
  ],
  capa: "imagens/meu-projeto/capa.jpg",
  imagens: [
    "imagens/meu-projeto/01.jpg",
    "imagens/meu-projeto/02.jpg",
  ],
  destaque: false,                 // true = o card ocupa a largura inteira
},
```

### Imagens

Crie uma pasta por projeto dentro de `imagens/` e escreva o caminho exato.
Maiúsculas e minúsculas importam na hospedagem: `Capa.JPG` e `capa.jpg` são
arquivos diferentes pro servidor, mesmo que funcionem igual no seu Windows.

Recomendação de peso: capas com 1600px de largura e no máximo 400KB. Se a
imagem estiver pesada, o site demora a abrir e o recrutador desiste antes.
Use o **Squoosh** (squoosh.app) pra comprimir — é gratuito e roda no navegador.

### O PDF do portfólio

Coloque o arquivo na pasta `arquivos/` e ajuste o nome no bloco de conteúdo:

```js
arquivos: {
  portfolioPdf: "arquivos/portfolio-gio-ribeiro.pdf",
},
```

---

## 2. Os currículos

Os dois modelos saem do mesmo bloco `curriculo` — você preenche uma vez e os
dois ficam sincronizados.

Pra gerar o PDF: abra o currículo no site, clique em **Baixar em PDF**, e na
janela de impressão escolha **Salvar como PDF** no campo de destino.

Deixe a opção "Gráficos de plano de fundo" **ligada** no modelo criativo (é o
que imprime a faixa de cor) e **desligada** no ATS.

**Por que dois modelos:** portais de vaga grandes passam o currículo por um
robô de triagem antes de qualquer humano ver. Esse robô lê texto corrido e se
perde com colunas, ícones, caixas de texto e imagens. O modelo ATS é feito pra
ele: uma coluna, Arial, preto no branco. O criativo é pra quando uma pessoa vai
olhar — estúdio, indicação, proposta direta.

---

## 3. Como publicar

O site é só uma pasta de arquivos. Qualquer serviço de hospedagem estática
serve. O caminho mais curto:

### Netlify Drop (recomendado)

1. Entre em **app.netlify.com/drop**
2. Arraste a pasta `site` inteira pra dentro da janela
3. Em alguns segundos ele devolve um endereço tipo `nome-aleatorio.netlify.app`
4. Crie uma conta gratuita pra manter o site no ar e poder renomear o endereço
   em *Site settings → Change site name*

Pra atualizar depois: entre no painel, vá em **Deploys** e arraste a pasta de
novo. Substitui tudo.

### Alternativas

| Serviço | Como sobe | Quando escolher |
|---|---|---|
| Netlify | Arrastar pasta | Padrão, mais simples |
| Cloudflare Pages | Arrastar pasta | Se quiser a rede mais rápida |
| Vercel | Melhor via GitHub | Se você já usa Git |
| GitHub Pages | Repositório Git | Se já tem conta no GitHub |

Todas são gratuitas nesse tamanho de site e já incluem HTTPS.

### Domínio próprio

O endereço `.netlify.app` funciona perfeitamente e pode ficar assim pra sempre.
Se quiser algo como `gioribeiro.com.br`:

1. Compre em um registrador (Registro.br para `.com.br`, ou Namecheap /
   Cloudflare para `.com`)
2. No painel da Netlify: *Domain management → Add a domain*
3. Ele mostra dois ou quatro endereços de servidor de nome (NS). Cole esses
   valores no painel do registrador, no campo de DNS
4. Leva de alguns minutos a algumas horas pra propagar. O certificado HTTPS a
   Netlify emite sozinha depois disso

Não é preciso refazer nada do site — o domínio só aponta pro que já existe.

---

## 4. O que ainda falta

- [ ] Escrever o texto do Ghosts Squeezed e colocar as imagens dele
- [ ] Colocar uma foto sua em `imagens/` e apontar o caminho em `sobre.foto`
- [ ] Trocar as páginas de PDF pelos mockups soltos (ver a seção 5)
- [ ] Decidir sobre as fontes (ver abaixo)

### Sobre as fontes

A identidade usa **Sofia Pro Soft** e **Neulis Cursive**, que são comerciais.
Licença desktop normalmente não cobre uso em site — pra isso é preciso a
licença webfont, vendida à parte.

O logo não é afetado: está vetorizado em curvas nos SVGs, então renderiza
igual em qualquer lugar. O que usa fonte são os textos do site, que hoje estão
com **Quicksand** (títulos) e **Karla** (corpo), ambas gratuitas via Google
Fonts.

Se você tiver a licença web da Sofia Pro Soft, dá pra trocar: coloque os
arquivos `.woff2` na pasta `fontes/` e me avise que eu ajusto o CSS.


---

## 5. Trocando as imagens pelos mockups

As imagens de hoje são páginas dos seus PDFs exportadas em 1600px. Funcionam,
mas trazem o texto do PDF junto com a arte — o que duplica o que já está
escrito ao lado no site. Quando você abrir o outro computador, a troca é
simples e não mexe em nada do layout.

**Passo a passo**

1. Crie uma pasta por projeto dentro de `imagens/projetos/`, por exemplo
   `imagens/projetos/deathmare/`
2. Exporte os mockups em JPG, 1600px de largura, e comprima no squoosh.app
   até ficarem abaixo de 400KB cada
3. No bloco de conteúdo, troque os caminhos:

```js
capa: "imagens/projetos/deathmare/capa.jpg",
imagens: [
  "imagens/projetos/deathmare/01.jpg",
  "imagens/projetos/deathmare/02.jpg",
  "imagens/projetos/deathmare/03.jpg",
],
```

4. Apague os arquivos antigos (`deathmare-01.jpg` e companhia) só depois de
   confirmar que os novos aparecem

Não precisa fazer tudo de uma vez: os projetos são independentes, então dá pra
trocar um por dia sem quebrar nada. Se um caminho estiver errado, aquela imagem
simplesmente não aparece — o resto do site continua de pé.

**Proporções que o layout espera**

| Onde | Proporção | O que acontece se fugir |
|---|---|---|
| Capa de card normal | 16:11 | recorta pelo centro |
| Capa de card destaque | 21:9 | recorta pelo centro |
| Imagens da galeria | livre | entram na largura total, altura natural |

Ou seja: só a capa precisa de atenção. Escolha uma imagem onde o assunto
principal esteja no meio, ou exporte uma versão recortada só para a capa.

---

## 6. Acessibilidade

Os cinco temas de cor foram medidos contra o WCAG 2.1 e todos os pares de texto
passam no nível AA (contraste mínimo de 4.5:1). Se você trocar alguma cor no
bloco `[data-tema=...]` do CSS, vale conferir em webaim.org/resources/contrastchecker
antes de publicar — principalmente o par `--suave` sobre `--base`, que é o
texto secundário e o mais fácil de quebrar.

Outras coisas que já estão no site: link de pular para o conteúdo (aparece ao
apertar Tab), foco visível em todos os botões e links, rótulo textual no botão
de trocar cor, contagem de projetos em cada filtro, e respeito à preferência de
"reduzir movimento" do sistema operacional.


---

## 7. Ligando o formulário de contato

O site é estático — ele não consegue mandar e-mail sozinho, porque não existe
servidor rodando. O formulário precisa de um serviço que receba a mensagem e
te encaminhe. São dois caminhos, os dois gratuitos.

### Se hospedar na Netlify (mais simples)

Não precisa fazer nada. A Netlify detecta o formulário sozinha na hora de
publicar e as mensagens aparecem no painel, em **Forms**. Para receber aviso no
e-mail, vá em *Site settings → Forms → Form notifications → Add notification →
Email notification*.

O plano gratuito aceita 100 mensagens por mês, o que é bastante para um
portfólio.

### Em qualquer outra hospedagem

Use o **Formspree**:

1. Crie conta em formspree.io e adicione um novo form
2. Ele te dá uma URL no formato `https://formspree.io/f/xxxxxxxx`
3. Cole essa URL no bloco de conteúdo:

```js
formulario: { destino: "https://formspree.io/f/xxxxxxxx" },
```

Pronto. O plano gratuito aceita 50 mensagens por mês.

### Testando

Enquanto você estiver abrindo o `index.html` direto do seu computador (com
endereço começando em `file://`), o envio vai falhar — é esperado, não é bug. O
formulário mostra o aviso de erro com seu e-mail como alternativa. O teste real
só vale depois de publicar.

### Sobre privacidade

O telefone saiu do site e ficou só no currículo. O e-mail continua no botão de
contato e no currículo, porque o recrutador precisa de um caminho direto — o
que o formulário resolve é não deixar o endereço em destaque, em letra grande,
fácil de raspar por robô. Se quiser tirar o e-mail completamente do site, dá
para remover o botão de e-mail e deixar só o formulário, mas aí quem quiser te
escrever de outro jeito fica sem saída.

### Anti-spam

O formulário tem um campo escondido (chamado honeypot) que pessoas não veem e
robôs preenchem. Quando vem preenchido, o serviço descarta a mensagem. Não
mexa nele.


---

## 8. Como as imagens entram nos projetos

Cada imagem pode ser escrita de duas formas. A curta, quando tanto faz:

```js
imagens: ["imagens/projetos/deathmare/01.jpg"],
```

E a completa, quando você quer controlar como ela aparece:

```js
imagens: [
  { src: "imagens/projetos/deathmare/01.jpg",
    formato: "sangria",
    legenda: "Papelaria completa: envelope, cartão e caderno." },
],
```

As duas podem se misturar na mesma lista.

### Os cinco formatos

| formato | Como aparece | Use para |
|---|---|---|
| `cheia` | largura do texto, altura natural | o padrão; mockups em paisagem |
| `sangria` | de ponta a ponta da tela | a imagem principal do case, infográficos largos |
| `dupla` | duas por linha, cortadas em 4:3 | detalhes que se comparam |
| `tripla` | três por linha, cortadas em quadrado | variações de logo, paleta, ícones |
| `retrato` | três por linha, cortadas em 9:17 | **telas de celular**, capas de reels |
| `post` | três por linha, cortadas em 4:5 | **posts de Instagram** |

Se você não escrever `formato`, ele assume `cheia`.

No celular, `dupla` e `tripla` viram largura cheia automaticamente. O `retrato`
continua com duas por linha, porque tela de celular lado a lado funciona bem em
qualquer largura.

### Legendas

A `legenda` aparece abaixo da imagem em corpo menor. Ela não é obrigatória, mas
vale a pena: é onde você explica o que a peça resolve, sem precisar de um
parágrafo no texto principal. Quando existe legenda, ela também vira o texto
alternativo da imagem — o que leitores de tela leem.

### Zoom

Toda imagem de galeria abre ampliada ao clique. Dentro da ampliação dá para
navegar pelas outras imagens da mesma galeria com as setas do teclado, e fechar
com Esc. Isso importa principalmente nos infográficos do CETAM, que são densos
demais para ler no tamanho da página.

### Corte da capa

A capa do card é cortada em 16:11 (ou 21:9 nos destaques), sempre pelo centro.
Se o assunto principal da sua imagem não estiver no meio, ajuste o foco:

```js
capa: "imagens/projetos/deathmare/capa.jpg",
capaFoco: "top",        // ou "bottom", "left", "right", "50% 20%"
```


---

## 9. Nome diferente no currículo

O bloco `curriculo` começa com duas linhas que valem só para os dois modelos
de currículo:

```js
curriculo: {
  nome: "Giovanna Pinheiro Ribeiro",
  cargo: "Visual Designer",
```

O site continua usando o que está em `marca` — "gio ribeiro" e "visual
designer" — no hero, no cabeçalho e no rodapé. Se você apagar essas duas
linhas, o currículo volta a usar o nome da marca.

O PDF salvo também sai com nome decente: `Curriculo - Giovanna Pinheiro
Ribeiro - ATS.pdf`, em vez do título do site.

---

## 10. Metodologias e fluxos editáveis

As metodologias e os fluxos de tela **não são imagens**. São HTML montado a
partir do bloco de conteúdo, então reflui em qualquer tela e você edita o texto
direto no arquivo.

### Etapas (Metodologia E, Design Thinking)

```js
{
  titulo: "O caminho",
  texto: ["Uma frase de introdução."],
  etapas: [
    { nome: "Estratégia", cor: "#3b3bd6", texto: "O que acontece nesta etapa." },
    { nome: "Escopo",     cor: "#1a1a9e", texto: "..." },
  ],
},
```

Os discos coloridos se reorganizam sozinhos conforme a largura da tela: seis em
linha no monitor, dois ou um no celular. A numeração é automática. A cor do
texto dentro do disco também — o código calcula a luminância da cor que você
escolheu e usa claro ou escuro, o que garante contraste mesmo se você trocar
para um tom inesperado.

### Fluxo de telas

```js
{
  titulo: "O mapa de telas",
  fluxo: [
    { grupo: "Entrada", passos: ["Tela de início", "Login", "Criar conta"] },
    { grupo: "Home",    passos: ["Projetos em andamento", "Criar novo projeto"] },
  ],
},
```

Cada grupo vira um cartão, e os passos aparecem com seta. Em vez de um
fluxograma que vira ilegível no celular, o leitor recebe a arquitetura em
blocos que empilham.

Os fluxogramas originais continuam nas galerias, em `sangria`, para quem quiser
ver o desenho completo com os caminhos de erro — é só clicar para ampliar.

---

## 11. O que ainda falta

- [ ] Responder os **ESCREVA AQUI** dos cases de UX. São os achados de
      pesquisa, os resultados de teste e os aprendizados — a parte que só você
      sabe, e a que mais pesa numa entrevista
- [ ] Escrever o contexto do Ghosts Squeezed (quando, com quem, estado do jogo)
- [ ] Mandar as imagens da sua identidade nova, para fechar o case do rebrand
      (hoje ele usa as páginas do PDF)
- [ ] Colocar uma foto sua em `imagens/` e apontar em `sobre.foto`
- [ ] Trocar a capa do CETAM: hoje é a página do PDF, porque os infográficos
      são verticais demais para caber num card 16:11
- [ ] Decidir sobre a licença web da Sofia Pro Soft (seção "Sobre as fontes")
- [ ] Publicar e ligar o formulário (seções 3 e 7)
