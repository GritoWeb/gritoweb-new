🧾 Novo Site da GritoWeb - Next.js
Este projeto é o novo site da GritoWeb, feito em Next.js.

🚀 Tecnologias
React
Next.js
TypeScript
ESLint
TailwindCSS para estilos


📁 Estrutura de Pastas
src/
├── app/                     # Diretório principal (App Router do Next.js)
│   ├── layout.tsx           # Layout principal do site
│   ├── page.tsx             # Página inicial
│   └── globals.css          # Estilos globais
│
├── components/              # Componentes genéricos reutilizáveis
│   └── ui/                  # Elementos visuais puros e desacoplados (opcional)
│
├── features/                # Funcionalidades principais do site (caso use mais domínios)
│   └── contato/             # Exemplo: funcionalidade de formulário de contato
│       ├── components/
│       ├── hooks/
│       └── services/
│
├── layouts/                 # Layouts reutilizáveis além do principal
├── hooks/                   # Hooks reutilizáveis e independentes
├── utils/                   # Funções auxiliares (formatadores, helpers, etc)
├── services/                # Configuração de serviços globais (ex: api.ts)
├── constants/               # Constantes globais do sistema
├── config/                  # Configurações gerais (tema, env, etc)
└── types/                   # Tipagens globais

# Arquivos na raiz do projeto
.next/
node_modules/
package.json
tsconfig.json
postcss.config.mjs
eslint.config.mjs
next.config.ts
README.md



⚡️ Instalando Dependências do Projeto
[Yarn]
Para iniciar o Projeto local: 
    yarn install 
    yarn dev

Extensões necessárias: ESLint Prettier ESLint





# README PADRÃO DO NEXT.JS COM DOCUMENTAÇÃO DO PRÓPRIO

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.