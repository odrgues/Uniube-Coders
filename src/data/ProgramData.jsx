import image1 from "../assets/images/Programa/image-1.jpg";
import image2 from "../assets/images/Programa/image-2.jpg";
import image3 from "../assets/images/Programa/image-3.jpg";

export const aboutProgramData = {
  content: (
    <>
      <h1>Um pouco da nossa história</h1>

      <p>
        O <strong>Uniube Coders</strong> nasceu de uma inquietação comum entre
        professores e estudantes da{" "}
        <strong>Universidade de Uberaba (Uniube)</strong>: a necessidade de
        aproximar o <span className="highlight">conhecimento acadêmico</span>
        da <span className="highlight">realidade do mercado de tecnologia</span>
        .
      </p>
      <img src={image1} side="left" />

      <p>
        Idealizado inicialmente como um pequeno grupo de estudos, o programa
        começou com encontros informais, onde os participantes compartilhavam
        experiências, aprendiam novas linguagens e desenvolviam projetos
        colaborativos. Com o tempo, o que era apenas uma iniciativa experimental
        se transformou em um <strong>movimento de formação tecnológica</strong>.
      </p>
      <img src={image2} side="left" />

      <p>
        À medida que mais estudantes demonstravam interesse, o Uniube Coders
        passou a oferecer <span className="emphasis">workshops</span>,
        <span className="emphasis"> oficinas práticas</span> e
        <span className="emphasis"> eventos abertos à comunidade</span>, criando
        um ambiente propício para o aprendizado contínuo e a troca de
        conhecimento.
      </p>

      <p>
        Hoje, o programa representa um espaço de{" "}
        <strong>inovação, colaboração e inclusão digital</strong>, impactando
        diretamente a formação profissional de seus participantes e contribuindo
        para o fortalecimento do ecossistema tecnológico da região.
      </p>
      <img src={image3} side="right" />

      <p>
        O Uniube Coders segue evoluindo, com o propósito de formar
        desenvolvedores preparados para os desafios do futuro, estimulando o
        <span className="highlight"> pensamento crítico</span>, a{" "}
        <span className="highlight"> criatividade</span> e o
        <span className="highlight"> espírito empreendedor</span>.
      </p>
    </>
  ),
};

export const aboutProgramCards = [
  {
    title: "Impacto Social",
    text: "O programa promove inclusão digital ao levar o ensino de programação para escolas públicas.",
    icon: "🤝",
  },
  {
    title: "Aprendizado na Prática",
    text: "Os alunos aprendem programação por meio de atividades práticas e projetos reais.",
    icon: "💻",
  },
  {
    title: "Conexão com a Comunidade",
    text: "Universidade e escolas públicas unidas para transformar realidades por meio da educação.",
    icon: "🏫",
  },
];
