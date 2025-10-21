// Validação de formulário
const form = document.querySelector('form');

if(form) { // Verifica se o formulário existe
  form.addEventListener('submit', e => {
    e.preventDefault();

    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const phone = form.querySelector('#phone').value.trim();

    if(!name || !email || !phone){
      alert('Por favor, preencha todos os campos!');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
      alert('E-mail inválido!');
      return;
    }

    // Salva temporariamente no localStorage
    localStorage.setItem('formData', JSON.stringify({name, email, phone}));

    alert('Formulário enviado com sucesso!');
    form.reset();
  });
}
