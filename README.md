# Green Community — Website

Landing page (site de apresentação) da **Green Community**, uma app que
transforma materiais reciclados em novas ideias. O site apresenta a app,
explica como funciona e leva o visitante ao download.

Feito com **HTML, CSS e JavaScript** puros (sem frameworks), pronto a publicar
no [Vercel](https://vercel.com).

---

## Demonstração

- Site online: `https://SEU-PROJETO.vercel.app` _(atualiza com o teu URL)_

## Páginas

| Página | Ficheiro | Descrição |
|---|---|---|
| Início | `index.html` | Apresentação da app, funcionalidades, como funciona e chamada à ação |
| Sobre | `sobre.html` | Missão, valores e história do projeto |
| Download | `transferir.html` | Botões das lojas, passos de instalação e requisitos |
| Contacto | `contacto.html` | Formulário de contacto, informações e mapa |

## Estrutura

```
GreenCommunity Website/
├─ index.html          Página inicial
├─ sobre.html          Sobre o projeto
├─ transferir.html     Descarregar a app
├─ contacto.html       Contactos
├─ vercel.json         Configuração do Vercel (cache dos assets)
├─ css/
│  └─ styles.css       Estilos (organizado por secções, comentado)
├─ js/
│  └─ scripts.js       Interatividade (menu, scroll, animações)
└─ assets/             Ícones e imagens
```

## Funcionalidades

- Design responsivo (telemóvel, tablet e desktop)
- Menu de navegação fixo que ganha sombra ao fazer scroll
- Animações de entrada ao percorrer a página
- Mockup da app feito apenas com CSS
- Formulário de contacto (via `mailto:`) e mapa integrado

## Tecnologias

- HTML5
- CSS3 (variáveis, grid, flexbox)
- JavaScript (sem bibliotecas)
- Fonte **Plus Jakarta Sans** (Google Fonts)

## Correr localmente

Basta abrir o `index.html` no navegador. Se preferires um servidor local:

```bash
# Python 3
python -m http.server 8000

# ou Node.js
npx serve
```

Depois abre `http://localhost:8000`.

## Publicar no Vercel

1. Envia este repositório para o GitHub.
2. Em [vercel.com](https://vercel.com) → **Add New → Project** → importa o repositório.
3. Deixa o *Root Directory* na raiz (predefinido).
4. *Framework Preset*: **Other** → **Deploy**.

> Nota: os botões **"Entrar"/"Criar conta"** apontam para `#entrar` (placeholder).
> Quando a app estiver online, troca `#entrar` pelo URL real e volta a fazer push.

## Nota

Este repositório contém apenas o **website**. A aplicação (feed, perfis,
publicações — em PHP + MySQL) vive num projeto separado e corre noutro
hospedeiro.

---

Projeto PAP — Green Community.
