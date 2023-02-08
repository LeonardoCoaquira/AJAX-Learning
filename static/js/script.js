document.getElementById("miBoton").addEventListener("click", function() {
    alert("Has hecho clic en el botón");
  });

console.log("holis");

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML = this.responseText;
      }
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }