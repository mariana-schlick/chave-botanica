// Função que rola a página até o topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
    });
}

// Exibe o botão quando o usuário rolar para baixo
window.onscroll = function() {
    var button = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block"; // Mostra o botão
    } else {
        button.style.display = "none"; // Esconde o botão quando o topo é alcançado
    }
};
