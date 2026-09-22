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
  eixo: "identidade",              // identidade | diagramacao | outros | uxui | social | jogos
  ano: "2026",
  cliente: "Nome do cliente",
  papel: "O que você fez",
  duracao: "4 semanas",            // opcional
  resumo: "Uma frase que aparece no card e no topo da página.",
  ferramentas: ["Illustrator", "Photoshop"],
  capa: "imagens/projetos/meu-projeto/capa.jpg",          // card: 1600 × 1100
  abertura: "imagens/projetos/meu-projeto/abertura.jpg",  // topo: 2400 × 1350
  introducao: [
    "O contexto do projeto. Aparece ao lado da ficha técnica.",
  ],
  secoes: [
    {
      titulo: "O desafio",
      texto: ["Parágrafo da seção."],
    },
    {
      titulo: "Aplicações",
      texto: ["Parágrafo da seção."],
      imagens: [
        { src: "imagens/projetos/meu-projeto/01.jpg", formato: "dupla", legenda: "..." },
        { src: "imagens/projetos/meu-projeto/02.jpg", formato: "dupla", legenda: "..." },
      ],
    },
  ],
  destaque: false,                 // true = o card ocupa a largura inteira
},
```

A página de cada projeto é montada sempre na mesma ordem (veja a seção 12).

### Imagens

Crie uma pasta por projeto dentro de `imagens/` e escreva o caminho exato.
Maiúsculas e minúsculas importam na hospedagem: `Capa.JPG` e `capa.jpg` são
arquivos diferentes pro servidor, mesmo que funcionem igual no seu Windows.

Recomendação de peso: capas com 1600px de largura e no máximo 400KB. Se a
imagem estiver pesada, o site demora a abrir e o recrutador desiste antes.
Use o **Squoosh** (squoosh.app) pra comprimir — é gratuito e roda no navegador.

### Os portfólios em PDF

São dois, e saem dos mesmos projetos do site, como os currículos: editou um
projeto, o PDF sai atualizado na próxima vez que você gerar.

- **Design gráfico:** identidade visual, diagramação, social media e autorais
- **UX/UI:** cases de UX e interface de jogo

Para gerar: menu **Baixar → Portfólio de design gráfico** (ou de UX/UI), botão
**Baixar em PDF**, e na janela de impressão escolha **Salvar como PDF**. A
página já sai deitada (A4 paisagem) e as cores de fundo saem mesmo com a
opção "Gráficos de plano de fundo" desligada.

Cada PDF tem: capa, "Muito prazer!", sumário, uma página de abertura por eixo,
e para cada projeto uma página com texto, ficha técnica e a imagem de
abertura (ou a capa), seguida de uma página de imagens. Fecha com os contatos.

Ajustes que você pode fazer no bloco de conteúdo:

```js
portfolios: {
  grafico: { titulo: "Design gráfico", eixos: ["identidade", "diagramacao", "social", "outros"] },
  uxui:    { titulo: "UX/UI",          eixos: ["uxui", "jogos"] },
},
```

Dentro de um projeto:

```js
pdf: false,                                   // o projeto não entra no PDF
imagensPdf: ["imagens/.../01.jpg", "..."],    // escolhe as imagens da 2ª página
```

Sem `imagensPdf`, entram as primeiras imagens do projeto: até 4 no de design
gráfico (3 quando são posts ou telas verticais) e 2 no de UX/UI, que também
resume as quatro primeiras seções do case. Se a segunda página tiver menos de
duas imagens, ela não é gerada.

---

## 2. Os currículos

Os dois modelos saem do mesmo bloco `curriculo` — você preenche uma vez e os
dois ficam sincronizados.

Pra gerar o PDF: abra o currículo no site, clique em **Baixar em PDF**, e na
janela de impressão escolha **Salvar como PDF** no campo de destino.

Deixe a opção "Gráficos de plano de fundo" **ligada** no modelo criativo (é o
que imprime a faixa de cor) e **desligada** no ATS.

O site zera a margem da página na impressão, o que impede o navegador de
imprimir o endereço do site, a data e o título no rodapé e no cabeçalho. Se
mesmo assim aparecer alguma dessas informações, em "Mais configurações",
desmarque **Cabeçalhos e rodapés** e confira se **Margens** está em
"Padrão".

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
| Capa de card normal | 16:11 (1600 × 1100) | recorta pelo centro |
| Capa de card destaque | 21:9 (2100 × 900) | recorta pelo centro |
| Abertura da página | 16:9 (2400 × 1350) | recorta pelo centro |
| Imagens das seções | depende do formato | veja a seção 8 |

Ou seja: só a capa precisa de atenção. Escolha uma imagem onde o assunto
principal esteja no meio, ou exporte uma versão recortada só para a capa.

---

## 6. Acessibilidade

A cada versão, o site passa por uma verificação automática de contraste: todo
texto visível, nos cinco temas, na página inicial, nas páginas de projeto e
nos dois currículos, medido contra o mínimo da WCAG 2.1 AA (4.5:1 para texto
normal, 3:1 para texto grande).

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

### Os formatos

| formato | Como aparece | Exportar em | Use para |
|---|---|---|---|
| `cheia` | largura do conteúdo, proporção preservada (no máximo a altura da tela) | 2000 px de largura | o padrão; mockups em paisagem, **fluxogramas, wireframes e painéis de telas** |
| `sangria` | de ponta a ponta da tela, proporção preservada | 2400 px de largura | só fotos de impacto exportadas em 2400 px |
| `dupla` | duas por linha, cortadas em 4:3 | 1200 × 900 | detalhes que se comparam |
| `tripla` | três por linha, cortadas em quadrado | 1000 × 1000 | produtos, variações de logo |
| `retrato` | três por linha, cortadas em 9:17 | 720 × 1360 | **telas de celular**, capas de reels, infográficos longos |
| `post` | três por linha, cortadas em 4:5 | 1080 × 1350 | **posts de Instagram** |

Se você não escrever `formato`, ele assume `cheia`.

**Nenhum formato corta imagem de conteúdo.** `cheia` e `sangria` sempre
mostram a imagem inteira. Os que cortam (`dupla`, `tripla`, `retrato`, `post`)
são para peças soltas; fluxogramas e painéis com várias telas vão sempre em
`cheia`, e quem quiser ler o detalhe clica para ampliar. Evite `sangria` em
imagens com menos de 2400 px de largura: numa tela grande elas ficam
esticadas e borradas.

Imagens seguidas com o mesmo formato viram um grupo, e o número de colunas se
ajusta sozinho à quantidade: quatro posts ficam quatro por linha, cinco ficam
três em cima e dois centralizados embaixo, sete ficam quatro em cima e três
embaixo, um fica sozinho no centro. Nenhuma
fica órfã num canto.

### Onde o corte começa

Os formatos que cortam (`dupla`, `tripla`, `retrato`, `post`) cortam pelo
centro. Para escolher outro ponto, acrescente `foco` na imagem:

```js
{ src: "imagens/projetos/cetam/info-ingles.jpg", formato: "retrato", foco: "top",
  legenda: "..." },
```

Aceita `"top"`, `"bottom"`, `"left"`, `"right"` ou uma posição como
`"50% 20%"`. Os infográficos do CETAM usam `foco: "top"`, então a miniatura
mostra sempre o título de cada um; o infográfico inteiro continua no zoom.

No celular, `dupla` vira uma por linha; `tripla`, `retrato` e `post` ficam
duas por linha.

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

### Corte da capa e da abertura

A capa do card é cortada em 16:11 (ou 21:9 nos destaques), e a abertura em
16:9, sempre pelo centro. Se o assunto principal não estiver no meio, ajuste o
foco:

```js
capa: "imagens/projetos/deathmare/capa.jpg",
capaFoco: "top",        // ou "bottom", "left", "right", "50% 20%"
abertura: "imagens/projetos/deathmare/abertura.jpg",
aberturaFoco: "center",
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

Etapas e fluxos entram dentro de uma seção, no mesmo nível de `texto` e
`imagens`.

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
texto dentro do disco também: o código testa o texto claro e o escuro e usa o
que der mais contraste com a cor escolhida. Se nenhum dos dois chegar a 4.5:1
(o mínimo da WCAG), ele escurece ou clareia a cor do disco aos poucos, mantendo
o tom, até passar. Por isso alguns discos podem sair um pouco mais fechados do
que o hexadecimal que você escreveu.

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

- [x] Responder os **ESCREVA AQUI** (busque com Ctrl+F). São os achados de
      pesquisa, os resultados de teste e os aprendizados — a parte que só você
      sabe, e a que mais pesa numa entrevista
- [x] Exportar a **abertura** de cada projeto em 2400 × 1350 e preencher o
      campo `abertura`
- [x] Escrever o contexto do Ghosts Squeezed (quando, com quem, estado do jogo)
- [ ] Decidir se o TaskIn volta: o bloco dele saiu do arquivo, mas as imagens
      seguem em `imagens/projetos/taskin/`
- [ ] Mockups do "depois" do rebrand (capa e abertura já estão em
      `imagens/projetos/gio/`; a galeria ainda usa as páginas do PDF)
- [ ] Colocar uma foto sua em `imagens/` e apontar em `sobre.foto`
- [x] Trocar a capa do CETAM
- [ ] Decidir sobre a licença web da Sofia Pro Soft (seção "Sobre as fontes")
- [ ] Publicar e ligar o formulário (seções 3 e 7)


---

## 12. Como a página de um projeto é montada

Toda página segue a mesma ordem, em todos os projetos:

1. **Topo** — eixo, ano, título e resumo
2. **Abertura** — uma imagem 16:9 de ponta a ponta da tela
3. **Introdução e ficha técnica** — o texto de `introducao` à esquerda;
   cliente, papel, ano, duração, equipe e ferramentas à direita. As `metricas`,
   quando existem, entram logo abaixo
4. **Índice** — quando o projeto tem três seções ou mais, aparece uma barra
   fixa com o nome de cada uma. Ela acompanha a leitura e leva direto à seção
   clicada
5. **Seções** — cada uma com número, título, texto e as imagens dela logo
   abaixo. O fundo alterna sozinho entre a cor base, a faixa rosa e a faixa
   escura
6. **O que eu levei desse projeto** — a lista `aprendizados`, se existir
7. **Próximo projeto** — um card com a capa do próximo projeto do mesmo eixo

### Enquanto a abertura não existe

Se o campo `abertura` estiver vazio, o site usa a capa no lugar. Se a capa for
vertical, ela aparece inteira e centralizada sobre um fundo claro, em vez de
ser cortada. Funciona, mas é provisório: a página só fica padronizada quando
todos os projetos tiverem a abertura própria em 16:9.

### Roteiros sugeridos de seções

- **Identidade e diagramação:** O desafio → O conceito → A marca → Aplicações → Resultado
- **UX/UI:** O problema → Pesquisa → Definição → Solução → Testes → Aprendizados
- **Social e autorais:** uma ou duas seções de peças

São pontos de partida. Uma seção pode ter só título e imagens, sem texto.

### Antes e depois

Qualquer seção pode ter um comparador. Em vez de `imagens`, use `antes` e
`depois`:

```js
{
  titulo: "Da estrela à flor",
  texto: ["..."],
  antes: ["imagens/projetos/gio-antes-01.jpg"],
  depois: ["imagens/projetos/gio-depois-01.jpg"],
},
```

### Os "ESCREVA AQUI"

Todo texto que começa com `ESCREVA AQUI` **não aparece no site publicado**.
Quando você abre o `index.html` direto do seu computador, ele aparece com uma
borda tracejada, para você ver o que ainda falta. Se uma seção ficar sem
nenhum conteúdo, ela some inteira, e o índice se ajusta.

Para ver o site como ficaria publicado mesmo abrindo do computador, é só
tirar os ESCREVA AQUI; para ver os pendentes num site já publicado, acrescente
`?rascunho` ao endereço, antes do `#`.
