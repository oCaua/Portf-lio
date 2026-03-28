let text = document.getElementById("text").innerHTML;
let textArr = text.split("");
let newText = textArr[0];

for (let i = 0; i < textArr.length; i++) {
    (function(i) {
        setTimeout(function() { console.log(i); 
        document.getElementById("text").innerHTML = newText;
                               newText = newText + textArr[i+1];

                              
                              
                              
                              }, 300 * i);
    })(i);
}

// Animação de scroll sutil - apenas uma vez ao rolar
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Selecionar elementos para animar
    const elementsToAnimate = document.querySelectorAll('.sobre-container, .Mini-projetos, footer');
    elementsToAnimate.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
});