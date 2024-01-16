function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username.indexOf("@gmail.com") === -1) {
      alert("O email deve ser do domínio @gmail.com");
      return false;
    }

    if (password.length < 10) {
      alert("A senha deve ter pelo menos 10 caracteres");
      return false;
    }

    return true;
  }