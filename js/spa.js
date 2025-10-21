// SPA: mostrar apenas a seção clicada
const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target.textContent.toLowerCase();

    sections.forEach(sec => {
      if(sec.querySelector('h2').textContent.toLowerCase() === target){
        sec.style.display = 'block';
      } else {
        sec.style.display = 'none';
      }
    });
  });
});

// Templates: gerar cards dinamicamente
const projects = [
  { title: "Projeto A", category: "Voluntariado", description: "Descrição breve do Projeto A. Envolvimento da comunidade e impacto social positivo." },
  { title: "Projeto B", category: "Educação", description: "Descrição breve do Projeto B. Atividades educativas e culturais para crianças e jovens." },
  { title: "Projeto C", category: "Saúde", description: "Descrição breve do Projeto C. Ações de saúde preventiva e suporte à população vulnerável." },
  { title: "Projeto D", category: "Meio Ambiente", description: "Descrição breve do Projeto D. Ações ecológicas e sustentáveis na comunidade." }
];

const container = document.querySelector('.cards-container');
container.innerHTML = ""; // Limpa qualquer card antigo

projects.forEach(proj => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <h3>${proj.title} <span class="badge">${proj.category}</span></h3>
    <p>${proj.description}</p>
    <button>Saiba Mais</button>
  `;
  container.appendChild(card);
});
