const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
document.addEventListener("DOMContentLoaded", function() {
    var datepickers = document.querySelectorAll('.datepicker');
    for (var i = 0; i < datepickers.length; i++){
      var datepicker = datepickers[i];
      datepicker.addEventListener("focus", function() {
        var options = {
          dateFormat: 'dd/mm/yy',
          autoclose: true
        };
        this.type = "text";
        $(this).datepicker(options);
      });
    }
    var addRowButton = document.getElementById('add-row');
    addRowButton.addEventListener("click", function(){
      var rowTemplate = document.getElementById('row-template');
      var newRow = rowTemplate.cloneNode(true);
      newRow.removeAttribute('id');
      newRow.style.display = 'table-row';
      var datepickerInputs = newRow.querySelectorAll('input.datepicker');
      for (var i = 0; i < datepickerInputs.length; i++) {
        var datepickerInput = datepickerInputs[i];
        datepickerInput.classList.remove('hasDatepicker');
        var options = {
          dateFormat: 'dd/mm/yyyy',
          autoclose: true
        };
        $(datepickerInput).datepicker(options);
      }
      var tableBody = document.querySelector('table tbody');
      tableBody.appendChild(newRow);
    });
});

function novalinha(){
  var statusopcoes = ["Status...", "Feito", "Em andamento", "Não iniciado"];
  var storypointsopcoes = ["pontos...", "3", "5", "8", "13", "21"];
  var prioridadeopcoes = ["prioridade...", "Alta", "Média", "Baixa"];
  let linha = document.createElement("tr");
  let colunaatv = document.createElement("td");
  linha.appendChild(colunaatv);
  let nomeatv = document.createElement("input");
  colunaatv.appendChild(nomeatv);
  let colunastatus = document.createElement("td");
  linha.appendChild(colunastatus);
  let status = document.createElement("select");
  colunastatus.appendChild(status);
  for (let i = 0; i < statusopcoes.length; i++){
    let option = document.createElement("option");
    option.text = statusopcoes[i];
    option.value = i + 1;
    status.appendChild(option);
  }
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

