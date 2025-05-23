# 🧾 Novo Site da GritoWeb - Next.js
Este projeto é o novo site da GritoWeb, feito em Next.js.

# 🚀 Tecnologias
React
Next.js
TypeScript
ESLint
TailwindCSS para estilos


# 📁 Estrutura de Pastas

```bash
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
```

# Arquivos na raiz do projeto

```bash
.next/
node_modules/
package.json
tsconfig.json
postcss.config.mjs
eslint.config.mjs
next.config.ts
README.md
```


# ⚡️ Instalando Dependências do Projeto
[Yarn]
Para iniciar o Projeto local: 
    yarn install 
    yarn dev

# Extensões necessárias: 
    ESLint Prettier ESLint


