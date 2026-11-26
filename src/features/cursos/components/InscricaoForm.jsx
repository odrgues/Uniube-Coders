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
} from "../../inscricao/styles/inscricao.styles";
import { seriesEscolares } from "../data/seriesEscolares";
import { enviarInscricao } from "../../inscricao/services/enviarInscricao";

function criarEstadoInicial(curso) {
  const extras = {};

  for (const campo of curso?.camposExtras ?? []) {
    extras[campo.name] = "";
  }

  return {
    nome: "",
    email: "",
    telefone: "",
    dataNascimento: "",
    instituicao: "",
    serie: "",
    mensagem: "",
    acessibilidade: "",
    autorizacaoResponsavel: false,
    aceiteTermos: false,
    ...extras,
  };
}

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

function InscricaoForm({ curso = null }) {
  const [dados, setDados] = useState(() => criarEstadoInicial(curso));
  const [erros, setErros] = useState({});
  const [enviando, setEnviando] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const camposExtras = curso?.camposExtras ?? [];
  const inscricoesAbertas = !curso || curso.status === "aberto";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [curso?.slug]);

  useEffect(() => {
    setDados(criarEstadoInicial(curso));
    setErros({});
    setFeedback(null);
  }, [curso]);

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

    for (const campo of camposExtras) {
      if (!campo.obrigatorio) continue;
      if (!String(dados[campo.name] ?? "").trim()) {
        novosErros[campo.name] = `Preencha o campo ${campo.label}.`;
      }
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

    if (!inscricoesAbertas || !validar()) return;

    try {
      setEnviando(true);
      await enviarInscricao({
        ...dados,
        curso: curso?.titulo ?? "",
      });
      setFeedback({
        type: "success",
        mensagem:
          "Inscrição enviada com sucesso! Em breve entraremos em contato.",
      });
      setDados(criarEstadoInicial(curso));
      setErros({});
    } catch {
      setFeedback({
        type: "error",
        mensagem:
          "Não foi possível enviar a inscrição. Tente novamente em instantes.",
      });
    } finally {
      setEnviando(false);
    }
  }

  function renderCampoExtra(campo) {
    const erro = erros[campo.name];

    if (campo.type === "select") {
      return (
        <Select
          id={campo.name}
          name={campo.name}
          value={dados[campo.name] ?? ""}
          onChange={handleChange}
          $error={!!erro}
        >
          <option value="">Selecione...</option>
          {(campo.opcoes ?? []).map((opcao) => (
            <option key={opcao} value={opcao}>
              {opcao}
            </option>
          ))}
        </Select>
      );
    }

    if (campo.type === "textarea") {
      return (
        <TextArea
          id={campo.name}
          name={campo.name}
          value={dados[campo.name] ?? ""}
          onChange={handleChange}
          $error={!!erro}
        />
      );
    }

    return (
      <Input
        id={campo.name}
        name={campo.name}
        type="text"
        value={dados[campo.name] ?? ""}
        onChange={handleChange}
        $error={!!erro}
      />
    );
  }

  return (
    <PageWrapper>
      <Hero>
        <Title>{curso ? curso.titulo : "Inscrição"}</Title>
        <Subtitle>
          {curso
            ? curso.resumo
            : "Preencha o formulário abaixo para participar das atividades do Uniube Coders. Os campos marcados com * são obrigatórios."}
        </Subtitle>
      </Hero>

      <FormSection>
        <Form onSubmit={handleSubmit} noValidate>
          {!inscricoesAbertas && (
            <Feedback $type="error">
              As inscrições deste curso não estão abertas.
            </Feedback>
          )}

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

          {camposExtras.map((campo) => (
            <Field key={campo.name}>
              <Label htmlFor={campo.name}>
                {campo.label}{" "}
                {campo.obrigatorio && <Required>*</Required>}
              </Label>
              {renderCampoExtra(campo)}
              {erros[campo.name] && <ErrorText>{erros[campo.name]}</ErrorText>}
            </Field>
          ))}

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

          <SubmitButton type="submit" disabled={enviando || !inscricoesAbertas}>
            {enviando ? "Enviando..." : "Enviar inscrição"}
          </SubmitButton>
        </Form>
      </FormSection>
    </PageWrapper>
  );
}

export default InscricaoForm;
