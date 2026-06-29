// Função responsável por enviar os dados do formulário.
//
// COMO CONFIGURAR (passo a passo):
// 1. Acesse https://formspree.io e crie uma conta gratuita.
// 2. Crie um novo "form" e defina o e-mail que vai RECEBER as inscrições.
// 3. O Formspree vai te dar uma URL parecida com:
//        https://formspree.io/f/abcdwxyz
// 4. Cole essa URL no lugar de "SEU_CODIGO_AQUI" abaixo.
//
// Pronto: ao enviar o formulário, a inscrição chega no e-mail configurado.

const ENDPOINT = "https://formspree.io/f/SEU_CODIGO_AQUI";

export async function enviarInscricao(dados) {
  const resposta = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(dados),
  });

  if (!resposta.ok) {
    throw new Error("Falha ao enviar a inscrição.");
  }

  return resposta.json();
}