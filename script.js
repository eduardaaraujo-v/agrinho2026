// Animação ao rolar a página
const elementos = document.querySelectorAll('.fade');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

elementos.forEach((el) => observer.observe(el));

// Contadores animados
function contador(id, final){

    let atual = 0;
    const incremento = Math.ceil(final / 100);

    const timer = setInterval(() => {

        atual += incremento;

        if(atual >= final){
            atual = final;
            clearInterval(timer);
        }

        document.getElementById(id).textContent = atual + "%";

    }, 25);
}

window.addEventListener('load', () => {

    contador('n1', 95);
    contador('n2', 88);
    contador('n3', 100);

});