function validar(campo) {
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const comentarios = document.getElementById("comentarios");
  const password = document.getElementById("password");
  const labelNombre = document.getElementById("lblNombre");
  const labelEmail = document.getElementById("lblEmail");
  const labelEmailOK = document.getElementById("lblEmailOK");
  const labelComentarios = document.getElementById("lblComentarios");
  const labelComentariosLength = document.getElementById("lblComentariosLength");
  const labelPassword = document.getElementById("lblPassword");
  const caracterBuscado = "@";
  let containsMay = false;
  let containsMin = false;
  let containsNum = false;

  switch (campo) {
    case "nombre":
      if (nombre.value === "") {
        labelNombre.style = "color: red;";
        nombre.style = "border-color: red;";
      } else {
        labelNombre.style = "display: none;color: red;";
        nombre.style = "border-color: black;";
      }
      break;
    case "email":
      if (email.value === "") {
        labelEmail.style = "color: red;";
        labelEmailOK.style = "display: none;";
        email.style = "border-color: red;";  
      }else if (email.value.includes(caracterBuscado)) {
        labelEmail.style = "display: none;";
        labelEmailOK.style = "display: none;";
        email.style = "border-color: black;";
      } else {
        labelEmail.style = "display: none;";
        labelEmailOK.style = "color: red;";
        email.style = "border-color: red;";
      }
      break;
    case "comentarios":
      if (comentarios.value === "") {
        labelComentarios.style = "color: red;";
        labelComentariosLength.style = "display: none;";
        comentarios.style = "border-color: red;";
      } else if (comentarios.value.length > 50) {
        labelComentariosLength.style = "color: red;";
        labelComentarios.style = "display: none;";
        comentarios.style = "border-color: red;";
      } else {
        labelComentarios.style = "display: none;color: red;";
        comentarios.style = "border-color: black;";
      }
      break;
    case "password":
      for (i = 0; i < password.value.length; i++) {
        if(password.value.charAt(i) >= "0" && password.value.charAt(i) <= "9"){
          containsNum = true;
        }
        else if(password.value.charAt(i) >= "a" && password.value.charAt(i) <= "z"){
          containsMin = true;
        } else if (password.value.charAt(i) >= "A" && password.value.charAt(i) <= "Z") {
          containsMay = true;
        }
      }

      if (password.value != "" && password.value.length >= 6 && containsMay && containsMin && containsNum )
      {
        labelPassword.style = "display: none;";
        password.style = "border-color: black;";
      }
      else{
        labelPassword.style = "color: red;";
        password.style = "border-color: red;";
      }
      break;
  }
}

function validarForm() {
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const comentarios = document.getElementById("comentarios");
  const password = document.getElementById("password");
  const check = document.getElementById("gridCheck1").checked;
  const labelNombre = document.getElementById("lblNombre");
  const labelEmail = document.getElementById("lblEmail");
  const labelEmailOK = document.getElementById("lblEmailOK");
  const labelComentarios = document.getElementById("lblComentarios");
  const labelComentariosLength = document.getElementById("lblComentariosLength");
  const labelPassword = document.getElementById("lblPassword");
  const caracterBuscado = "@";
  let containsMay = false;
  let containsMin = false;
  let containsNum = false;
  let formOK = true;

  
      if (nombre.value === "") {
        labelNombre.style = "color: red;";
        nombre.style = "border-color: red;";
        formOK = false;
      } 
      if (email.value === "") {
        labelEmail.style = "color: red;";
        labelEmailOK.style = "display: none;";
        email.style = "border-color: red;";  
        formOK = false;
      }else if (!email.value.includes(caracterBuscado)) {
        labelEmail.style = "display: none;";
        labelEmailOK.style = "color: red;";
        email.style = "border-color: red;";
        formOK = false;
      }
     
      if (comentarios.value === "") {
        labelComentarios.style = "color: red;";
        labelComentariosLength.style = "display: none;";
        comentarios.style = "border-color: red;";
        formOK = false;
      } else if (comentarios.value.length > 50) {
        labelComentariosLength.style = "color: red;";
        labelComentarios.style = "display: none;";
        comentarios.style = "border-color: red;";
        formOK = false;
      } 
     
      for (i = 0; i < password.value.length; i++) {
        if(password.value.charAt(i) >= "0" && password.value.charAt(i) <= "9"){
          containsNum = true;
        }
        else if(password.value.charAt(i) >= "a" && password.value.charAt(i) <= "z"){
          containsMin = true;
        } else if (password.value.charAt(i) >= "A" && password.value.charAt(i) <= "Z") {
          containsMay = true;
        }
      }

      if (password.value != "" && password.value.length >= 6 && containsMay && containsMin && containsNum )
      {
        labelPassword.style = "display: none;";
        password.style = "border-color: black;";
      }
      else{
        labelPassword.style = "color: red;";
        password.style = "border-color: red;";
        formOK = false;
      }

      if(formOK && check)
      {
        alert("se envia el formulario");
        return true;
      }
      else{
        alert("Formulario incorrecto. Por favor, revisa los campos.");
        return false;
      }
}


