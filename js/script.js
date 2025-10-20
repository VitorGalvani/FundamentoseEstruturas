document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("cadastroForm");
    if(form){
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Evita envio real
            alert("Formulário enviado com sucesso!");
        });
    }
});
