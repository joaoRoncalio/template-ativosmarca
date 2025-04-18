# 🎨 Portal de Ativos de Marca

Um portal de diretrizes de marca moderno e interativo construído com Astro.

## ✨ Funcionalidades

- 🖌️ Exibição de logotipos e variações
- 🎭 Paleta de cores interativa
- 📝 Guia de tipografia
- 📱 Design responsivo para todos os dispositivos

## 🚀 Estrutura do Projeto

```text
/
├── public/
│   ├── assets/
│   │   ├── logo-primary.svg
│   │   ├── logo-dark.svg
│   │   ├── fonts/
│   │   │   └── yourfont.zip
│   │   └── ...
│   ├── js/
│   │   └── colorManager.js
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ColorGrid.astro
│   │   ├── LogoGrid.astro
│   │   └── ThemeToggle.astro
│   ├── data/
│   │   └── brand.json
│   ├── layouts/
│   │   └── Layout.astro
│   ├── styles/
│   │   └── global.css
│   └── pages/
│       └── index.astro
├── package.json
├── tsconfig.json
├── .prettierrc.mjs
└── astro.config.mjs
```

## 🧞 Comandos

Todos os comandos são executados a partir da raiz do projeto:

| Comando            | Ação                                      |
| :----------------- | :---------------------------------------- |
| `pnpm install`     | Instala dependências                      |
| `pnpm run dev`     | Inicia servidor local em `localhost:4321` |
| `pnpm run build`   | Compila o site para produção em `./dist/` |
| `pnpm run preview` | Visualiza a compilação localmente         |

## 🛠️ Personalização

1. Edite o arquivo `src/data/brand.json` para atualizar as informações da marca
2. Substitua os logotipos em `public/assets/` pelos seus próprios arquivos
3. Ajuste as cores e tipografia conforme necessário

## 🔗 Tecnologias

- [Astro](https://astro.build) - Framework web rápido e leve
- CSS Moderno - Variáveis CSS, Grid, Flexbox
- JavaScript - Para interatividade e gerenciamento de cores

## 👀 Saiba mais

- [Documentação do Astro](https://docs.astro.build)
- [Discord do Astro](https://astro.build/chat)
