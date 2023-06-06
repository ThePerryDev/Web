function novalinha() {
  // criação de variáveis
  var statusopcoes = ["Status...", "Feito", "Em andamento", "Não iniciado"];
  var storypointsopcoes = ["pontos...", "3", "5", "8", "13", "21"];
  var prioridadeopcoes = ["prioridade...", "Alta", "Média", "Baixa"];

  // cria uma linha
  let linha = document.createElement("tr");

  // cria a célula e o campo de texto das atividades

  let colunaatv = document.createElement("td");
  linha.appendChild(colunaatv);
  let nomeatv = document.createElement("input");
  colunaatv.appendChild(nomeatv);

  // cria os campos de seleção dos stautus
  let colunastatus = document.createElement("td");
  linha.appendChild(colunastatus);
  let status = document.createElement("select");
  colunastatus.appendChild(status);
  for (let i = 0; i < statusopcoes.length; i++) {
    let option = document.createElement("option");
    option.text = statusopcoes[i];
    option.value = i + 1;
    status.appendChild(option);
  }

  // cria os campos de data
  let data1 = document.createElement("td");
  linha.appendChild(data1);
  let prevdata = document.createElement("input");
  data1.appendChild(prevdata);
  prevdata.type = "date";

  let data2 = document.createElement("td");
  linha.appendChild(data2);
  let fimdata = document.createElement("input");
  data2.appendChild(fimdata);
  fimdata.type = "date";

  // cria os campos de seleção dos stories points
  let colunastories = document.createElement("td");
  linha.appendChild(colunastories);
  let stories = document.createElement("select");
  colunastories.appendChild(stories);
  for (let i = 0; i < storypointsopcoes.length; i++) {
    let option = document.createElement("option");
    option.text = storypointsopcoes[i];
    option.value = i + 1;
    stories.appendChild(option);
  }

  // cria os campos de seleção das prioridades
  let colunaprioridade = document.createElement("td");
  linha.appendChild(colunaprioridade);
  let prioridade = document.createElement("select");
  colunaprioridade.appendChild(prioridade);
  for (let i = 0; i < prioridadeopcoes.length; i++) {
    let option = document.createElement("option");
    option.text = prioridadeopcoes[i];
    option.value = i + 1;
    prioridade.appendChild(option);
  }

  document.getElementById("corpo").appendChild(linha);
}
