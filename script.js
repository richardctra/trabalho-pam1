document.getElementById('enviarBtn').addEventListener('click', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const erro = document.getElementById('erro');
  
    erro.textContent = '';
  
    const testarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!testarEmail.test(email)) {
      erro.textContent = 'Email inválido';
      return false;
    }
  
    if (senha.length < 6) {
      erro.textContent = 'Senha precisa ter pelo menos 6 caracteres';
      return false;
    }
    
    alert('Login bem-sucedido!');
    return true;
  });
  