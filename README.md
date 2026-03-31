# Uniube Coders

Aplicação desenvolvida para apresentar o projeto **Uniube Coders**, uma iniciativa de extensão da **Universidade de Uberaba (Uniube)** que promove a conexão entre universidade, escola pública e tecnologia por meio de experiências formativas em programação.

O projeto foi construído com foco em **organização visual**, **responsividade** e **manutenção futura**, servindo como base para continuidade por outros desenvolvedores.

---

## Sobre o projeto

O **Uniube Coders** é uma iniciativa voltada à aproximação entre o ensino superior e a educação básica, utilizando a tecnologia como ferramenta de aprendizagem, experimentação e desenvolvimento.

Esta aplicação tem como objetivo apresentar essa proposta de forma clara, acessível e visualmente consistente, valorizando tanto o conteúdo institucional quanto a experiência de navegação.

---

## Tecnologias utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- **React**
- **JavaScript**
- **Styled-components**

Também foi utilizado um **theme centralizado** para padronização de:

- cores
- espaçamentos
- tipografia
- sombras
- bordas
- transições
- breakpoints responsivos

---

## Como executar o projeto

### 1. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Acessar a pasta do projeto

```bash
cd NOME_DO_REPOSITORIO
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Iniciar o ambiente de desenvolvimento

```bash
npm run dev
```

Caso o projeto utilize outra configuração, verifique os scripts disponíveis no `package.json`. Em alguns casos, o comando pode ser:

```bash
npm start
```

### 5. Abrir no navegador

Após iniciar o servidor local, acesse a URL exibida no terminal, normalmente:

- `http://localhost:5173`
- `http://localhost:3000`

---

## Deploy

Qualquer desenvolvedor pode publicar este projeto seguindo o mesmo fluxo básico: clonar o repositório, instalar as dependências, gerar a build e subir a aplicação em uma plataforma como **Vercel** ou **Netlify**.

### Gerar build de produção

```bash
npm run build
```

### Testar build localmente

```bash
npm run preview
```

### Fluxo de deploy

1. Clonar o repositório
2. Instalar as dependências com `npm install`
3. Gerar a build com `npm run build`
4. Publicar o projeto na plataforma de hospedagem
5. Validar layout, navegação e responsividade em produção

### Deploy atual

```md
https://uniube-coders.vercel.app/
```

---

## Estrutura do projeto

A organização do projeto foi pensada por features, facilitando a manutenção e a escalabilidade da aplicação.

### Exemplo de estrutura

```bash
src/
  features/
    aboutProject/
    aboutUniube/
    home/
  shared/
    components/
```

Essa divisão ajuda a separar responsabilidades entre páginas, estilos, dados e componentes compartilhados.

---

## O que foi desenvolvido

Durante a evolução do projeto, os principais pontos trabalhados foram:

- construção e refinamento das páginas institucionais
- organização visual das seções
- ajustes de layout
- melhoria da responsividade
- revisão de proporção entre textos, imagens e blocos
- adaptação da interface para desktop, telas intermediárias e mobile
- padronização visual com base no theme do projeto

Também houve atenção especial à experiência mobile, com ajustes em:

- distribuição de conteúdo
- respiro lateral
- largura de títulos
- comportamento de grids
- escala de elementos visuais
- navegação e componentes interativos

---

## Decisões de implementação

### Styled-components

A estilização foi feita com **styled-components**, permitindo maior proximidade entre estrutura e estilo, além de facilitar o uso do tema global.

### Theme centralizado

A centralização de tokens visuais ajuda a manter consistência entre as páginas e reduz a repetição de valores fixos no CSS.

### Organização por domínio

A separação por features torna a navegação no código mais clara e facilita futuras manutenções ou expansões.

### Separação entre conteúdo e estrutura

Parte do conteúdo foi organizada em arquivos próprios, ajudando a deixar os componentes mais limpos e favorecendo alterações textuais sem impactar diretamente a estrutura visual.

---

## Pontos fortes da implementação atual

A versão atual do projeto apresenta alguns pontos positivos importantes:

- interface visual mais consistente
- melhor adaptação para diferentes telas
- estrutura organizada por features
- uso padronizado do theme
- maior clareza para manutenção
- preocupação com legibilidade e experiência do usuário

---

## Pontos de melhoria

Embora o projeto esteja estruturado e funcional, ainda existem melhorias importantes que podem ser feitas nas próximas etapas.

### Melhorar a componentização dos cards

Este é o principal ponto de evolução identificado.

Atualmente, alguns cards ainda possuem implementação muito específica dentro das páginas em que aparecem. Uma melhoria importante seria abstrair essas estruturas em componentes reutilizáveis, como por exemplo:

- `InfoCard`
- `OverviewCard`
- `HighlightCard`
- `ImageTextCard`

Isso pode trazer benefícios como:

- redução de repetição de código
- manutenção mais simples
- maior consistência visual
- melhor escalabilidade para novas seções

### Reforçar a reutilização de padrões visuais

Algumas estruturas podem ser consolidadas em componentes compartilhados, como:

- títulos de seção
- wrappers de conteúdo
- grids responsivos
- blocos com imagem e texto
- cards com estilos recorrentes

### Revisar responsabilidades de componentes

Em alguns trechos, ainda é possível melhorar a semântica e a clareza dos componentes, tornando mais evidente o papel de cada bloco dentro da interface.

### Continuar refinando a responsividade

A responsividade foi bastante trabalhada, mas ainda merece atenção contínua, principalmente em:

- telas intermediárias
- títulos longos
- proporção entre imagem e conteúdo
- espaçamentos em seções extensas

---

## Recomendações para continuidade

Para quem for dar sequência ao projeto, os próximos passos mais recomendados são:

- refatorar os cards em componentes reutilizáveis
- consolidar padrões visuais em componentes compartilhados
- revisar estilos muito específicos por página
- documentar melhor a estrutura dos componentes
- validar continuamente a interface em diferentes tamanhos de tela

---

## Manutenção

Ao realizar novas alterações, é importante observar:

- a consistência com o theme
- o impacto da alteração em outros breakpoints
- a possibilidade de reaproveitamento do que está sendo criado
- o equilíbrio entre estética, clareza e manutenção

Sempre que possível, o ideal é priorizar soluções reutilizáveis em vez de ajustes isolados.

---

## Considerações finais

Este projeto foi desenvolvido com foco em oferecer uma base visual sólida e organizada para apresentação do **Uniube Coders**, priorizando clareza, identidade visual e experiência responsiva.

A estrutura atual já permite continuidade com boa legibilidade, mas pode evoluir ainda mais com uma refatoração voltada principalmente à **componentização dos cards** e à **consolidação de componentes compartilhados**.