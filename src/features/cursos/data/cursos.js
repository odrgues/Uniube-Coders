// Exemplos do PDF da página de cursos.
// A lista real (título, vagas, carga e campos extras) ainda depende da coordenação.

export const cursos = [
  {
    slug: "logica-de-programacao",
    titulo: "Lógica de Programação",
    resumo:
      "Primeiro contato com algoritmos, variáveis, condições e repetições, resolvendo desafios do dia a dia.",
    publico: "Ensino Fundamental e Médio",
    cargaHoraria: "20h",
    vagas: 30,
    status: "aberto",
    camposExtras: [],
  },
  {
    slug: "desenvolvimento-web",
    titulo: "Desenvolvimento Web",
    resumo:
      "HTML, CSS e JavaScript para criar e publicar a primeira página na internet.",
    publico: "Ensino Médio",
    cargaHoraria: "24h",
    vagas: 25,
    status: "aberto",
    camposExtras: [],
  },
  {
    slug: "maratona-de-programacao",
    titulo: "Maratona de Programação",
    resumo:
      "Equipes de até 3 pessoas resolvendo problemas contra o relógio, no formato das maratonas universitárias.",
    publico: null,
    cargaHoraria: null,
    vagas: null,
    status: "aberto",
    camposExtras: [
      {
        name: "equipe",
        label: "Nome da equipe",
        type: "text",
        obrigatorio: true,
      },
      {
        name: "linguagem",
        label: "Linguagem",
        type: "select",
        opcoes: ["C++", "Java"],
        obrigatorio: true,
      },
    ],
  },
  {
    slug: "workshop-de-tecnologia",
    titulo: "Workshop de Tecnologia",
    resumo:
      "Encontro curto com convidados da área mostrando como a tecnologia aparece em diferentes profissões.",
    publico: "Aberto a todos",
    cargaHoraria: "4h",
    vagas: null,
    status: "em-breve",
    camposExtras: [],
  },
];
