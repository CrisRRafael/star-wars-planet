# 🌌 Star Wars Planets

Aplicação desenvolvida com [Next.js](https://nextjs.org/) e [TypeScript](https://www.typescriptlang.org/) que permite explorar os planetas do universo de Star Wars, utilizando dados da [SWAPI - Star Wars API](https://swapi.dev/).

## 🔎 Funcionalidades

- Pesquisa de planetas por nome ou população.
- Visualização de detalhes de um planeta.
- Componentização baseada em Atomic Design

## 🚀 Tecnologias

- Next.js
- TypeScript
- Styled-components
- SWAPI (https://swapi.dev/)

## 📁 Estrutura do Projeto

```
src/
├── context/                # Gerenciamento de estado global com Context API
├── hooks/                  # Hooks personalizados
├── pages/                  
│   ├── index.tsx           # Página de pesquisa de planetas
│   └── planet/             # Página de detalhes de um planeta
├── shared/
│   ├── assets/             # Imagens e ícones
│   ├── components/
│   │   ├── atoms/          # Elementos básicos (ex: botões, textos)
│   │   ├── molecules/      # Conjuntos simples de atoms
│   │   ├── organisms/      # Blocos de componentes
│   │   └── templates/      # Layouts e estruturas de página
│   └── styles/             # Estilos globais
├── Layout/                 # Componente principal de layout
```

## 🖼️ Páginas

- **Home (Pesquisa)**: Interface para busca por planetas pelo nome ou população. Exibe uma lista com os resultados.
- **Detalhes do Planeta**: Ao clicar em um planeta na lista, o usuário é levado para uma página com as informações, como clima, terreno, população e outros.

## 🛠️ Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/CrisRRafael/star-wars-planet.git
cd star-wars-planet
```

2. Instale as dependências:

```bash
npm install
```

3. Execute a aplicação:

```bash
npm run dev
```

4. Acesse no navegador:

```
http://localhost:3000
```

## 💡 Melhorias Futuras

- [ ] Testes automatizados com Jest
