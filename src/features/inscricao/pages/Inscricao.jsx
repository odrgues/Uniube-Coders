import { useEffect, useState } from "react";
import {
  PageWrapper,
  Hero,
  Title,
  Subtitle,
  FormSection,
  Form,
  Field,
  Label,
  Required,
  Input,
  Select,
  TextArea,
  CheckboxField,
  Checkbox,
  CheckboxLabel,
  ErrorText,
  SubmitButton,
  Feedback,
} from "../styles/inscricao.styles";
import { atividades, seriesEscolares } from "../data/opcoesInscricao";
import { enviarInscricao } from "../services/enviarInscricao";

const estadoInicial = {
  nome: "",
  email: "",
  telefone: "",
  dataNascimento: "",
  instituicao: "",
  serie: "",
  atividade: "",
  mensagem: "",
  acessibilidade: "",
  autorizacaoResponsavel: false,
  aceiteTermos: false,
};

// Calcula a idade a partir da data de nascimento (formato AAAA-MM-DD).
function calcularIdade(dataNascimento) {
  if (!dataNascimento) return null;
  const hoje = new Date();
  const nascimento = new Date(dataNascimento);
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mes = hoje.getMonth() - nascimento.getMonth();
  if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
    idade -= 1;
  }
  return idade;
}

function Inscricao() {
  const [dados, setDados] = useState(estadoInicial);
  const [erros, setErros] = useState({});
  const [enviando, setEnviando] = useState(false);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const idade = calcularIdade(dados.dataNascimento);
  const ehMenor = idade !== null && idade < 18;

  function handleChange(evento) {
    const { name, value, type, checked } = evento.target;
    setDados((anterior) => ({
      ...anterior,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function validar() {
    const novosErros = {};

    if (!dados.nome.trim()) {
      novosErros.nome = "Informe seu nome completo.";
    }

    if (!dados.email.trim()) {
      novosErros.email = "Informe seu e-mail.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dados.email)) {
      novosErros.email = "Digite um e-mail válido.";
    }

    if (!dados.telefone.trim()) {
      novosErros.telefone = "Informe seu telefone.";
    } else if (dados.telefone.replace(/\D/g, "").length < 10) {
      novosErros.telefone = "Telefone incompleto (use DDD + número).";
    }

    if (!dados.dataNascimento) {
      novosErros.dataNascimento = "Informe sua data de nascimento.";
    } else if (idade === null || idade < 0 || idade > 120) {
      novosErros.dataNascimento = "Data de nascimento inválida.";
    }

    if (!dados.atividade) {
      novosErros.atividade = "Escolha uma atividade.";
    }

    if (ehMenor && !dados.autorizacaoResponsavel) {
      novosErros.autorizacaoResponsavel =
        "Para menores de idade, é necessária a autorização do responsável.";
    }

    if (!dados.aceiteTermos) {
      novosErros.aceiteTermos =
        "É necessário aceitar os termos para se inscrever.";
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  }

  async function handleSubmit(evento) {
    evento.preventDefault();
    setFeedback(null);

    if (!validar()) return;

    try {
      setEnviando(true);
      await enviarInscricao(dados);
      setFeedback({
        type: "success",
        mensagem:
          "Inscrição enviada com sucesso! Em breve entraremos em contato.",
      });
      setDados(estadoInicial);
      setErros({});
    } catch (erro) {
      setFeedback({
        type: "error",
        mensagem:
          "Não foi possível enviar a inscrição. Tente novamente em instantes.",
      });
    } finally {
      setEnviando(false);
    }
  }

  return (
    <PageWrapper>
      <Hero>
        <Title>Inscrição</Title>
        <Subtitle>
          Preencha o formulário abaixo para participar das atividades do Uniube
          Coders. Os campos marcados com * são obrigatórios.
        </Subtitle>
      </Hero>

      <FormSection>
        <Form onSubmit={handleSubmit} noValidate>
          <Field>
            <Label htmlFor="nome">
              Nome completo <Required>*</Required>
            </Label>
            <Input
              id="nome"
              name="nome"
              type="text"
              value={dados.nome}
              onChange={handleChange}
              $error={!!erros.nome}
            />
            {erros.nome && <ErrorText>{erros.nome}</ErrorText>}
          </Field>

          <Field>
            <Label htmlFor="email">
              E-mail <Required>*</Required>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={dados.email}
              onChange={handleChange}
              $error={!!erros.email}
            />
            {erros.email && <ErrorText>{erros.email}</ErrorText>}
          </Field>

          <Field>
            <Label htmlFor="telefone">
              Telefone <Required>*</Required>
            </Label>
            <Input
              id="telefone"
              name="telefone"
              type="tel"
              placeholder="(34) 99999-9999"
              value={dados.telefone}
              onChange={handleChange}
              $error={!!erros.telefone}
            />
            {erros.telefone && <ErrorText>{erros.telefone}</ErrorText>}
          </Field>

          <Field>
            <Label htmlFor="dataNascimento">
              Data de nascimento <Required>*</Required>
            </Label>
            <Input
              id="dataNascimento"
              name="dataNascimento"
              type="date"
              value={dados.dataNascimento}
              onChange={handleChange}
              $error={!!erros.dataNascimento}
            />
            {erros.dataNascimento && (
              <ErrorText>{erros.dataNascimento}</ErrorText>
            )}
          </Field>

          <Field>
            <Label htmlFor="instituicao">Instituição de ensino</Label>
            <Input
              id="instituicao"
              name="instituicao"
              type="text"
              value={dados.instituicao}
              onChange={handleChange}
            />
          </Field>

          <Field>
            <Label htmlFor="serie">Ano ou série escolar</Label>
            <Select
              id="serie"
              name="serie"
              value={dados.serie}
              onChange={handleChange}
            >
              <option value="">Selecione...</option>
              {seriesEscolares.map((serie) => (
                <option key={serie} value={serie}>
                  {serie}
                </option>
              ))}
            </Select>
          </Field>

          <Field>
            <Label htmlFor="atividade">
              Atividade, curso ou evento <Required>*</Required>
            </Label>
            <Select
              id="atividade"
              name="atividade"
              value={dados.atividade}
              onChange={handleChange}
              $error={!!erros.atividade}
            >
              <option value="">Selecione...</option>
              {atividades.map((atividade) => (
                <option key={atividade} value={atividade}>
                  {atividade}
                </option>
              ))}
            </Select>
            {erros.atividade && <ErrorText>{erros.atividade}</ErrorText>}
          </Field>

          <Field>
            <Label htmlFor="mensagem">Mensagem ou observações</Label>
            <TextArea
              id="mensagem"
              name="mensagem"
              value={dados.mensagem}
              onChange={handleChange}
            />
          </Field>

          <Field>
            <Label htmlFor="acessibilidade">
              Necessidade de acessibilidade (se houver)
            </Label>
            <TextArea
              id="acessibilidade"
              name="acessibilidade"
              value={dados.acessibilidade}
              onChange={handleChange}
            />
          </Field>

          {ehMenor && (
            <Field>
              <CheckboxField>
                <Checkbox
                  id="autorizacaoResponsavel"
                  name="autorizacaoResponsavel"
                  type="checkbox"
                  checked={dados.autorizacaoResponsavel}
                  onChange={handleChange}
                />
                <CheckboxLabel htmlFor="autorizacaoResponsavel">
                  Confirmo que tenho a autorização do meu responsável para esta
                  inscrição. <Required>*</Required>
                </CheckboxLabel>
              </CheckboxField>
              {erros.autorizacaoResponsavel && (
                <ErrorText>{erros.autorizacaoResponsavel}</ErrorText>
              )}
            </Field>
          )}

          <Field>
            <CheckboxField>
              <Checkbox
                id="aceiteTermos"
                name="aceiteTermos"
                type="checkbox"
                checked={dados.aceiteTermos}
                onChange={handleChange}
              />
              <CheckboxLabel htmlFor="aceiteTermos">
                Li e aceito os termos de inscrição e o uso dos dados informados.{" "}
                <Required>*</Required>
              </CheckboxLabel>
            </CheckboxField>
            {erros.aceiteTermos && <ErrorText>{erros.aceiteTermos}</ErrorText>}
          </Field>

          {feedback && (
            <Feedback $type={feedback.type}>{feedback.mensagem}</Feedback>
          )}

          <SubmitButton type="submit" disabled={enviando}>
            {enviando ? "Enviando..." : "Enviar inscrição"}
          </SubmitButton>
        </Form>
      </FormSection>
    </PageWrapper>
  );
}

export default Inscricao;