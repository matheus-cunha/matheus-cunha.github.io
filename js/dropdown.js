function DropdownFunction() {
    document.getElementById("NavDropdown").classList.toggle("show");
}

// TESTE DE CODIGO PARA FECHAR AO CLICAR FORA DO BOX
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

function ResponsiveDropdownFunction() {
    document.getElementById("RespDropdown").classList.toggle("show");
}
  
window.onclick = function(event) {
  if (!event.target.matches('.resp-dropbtn')) {
    var dropdowns = document.getElementsByClassName("resp-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// BACKUP DO CODIGO que eu acho que funcionava

// function DropdownFunction() {
//   document.getElementById("NavDropdown").classList.toggle("show");
// }

// window.onclick = function(e) {
//   if (!e.target.matches('.dropbtn')) {
//       var myDropdown = document.getElementById("NavDropdown");
//       if (myDropdown.classList.contains('show')) {
//       myDropdown.classList.remove('show');
//       }
//   }
// }