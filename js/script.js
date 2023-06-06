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
  