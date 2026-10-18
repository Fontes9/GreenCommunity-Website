/* ==========================================================================
   GREEN COMMUNITY - JAVASCRIPT DO WEBSITE
   --------------------------------------------------------------------------
   Este ficheiro trata de tres pequenas interacoes usadas em todas as paginas:
     1. Sombra na barra de navegacao quando se faz scroll
     2. Abrir/fechar o menu em ecras pequenos
     3. Animacao de entrada dos elementos com a classe .reveal
     4. Escrever o ano atual no rodape
   ========================================================================== */

(function () {
    "use strict";

    /* ----------------------------------------------------------------------
       1. BARRA DE NAVEGACAO
       Adiciona a classe "scrolled" quando a pagina desce, para a barra
       ganhar uma sombra (o aspeto e definido no CSS em .nav.scrolled).
       ---------------------------------------------------------------------- */
    var nav = document.querySelector(".nav");

    function atualizarNav() {
        if (!nav) return;
        nav.classList.toggle("scrolled", window.scrollY > 8);
    }

    window.addEventListener("scroll", atualizarNav, { passive: true });
    atualizarNav(); // corre tambem ao carregar a pagina


    /* ----------------------------------------------------------------------
       2. MENU MOBILE
       O botao com id "navToggle" mostra/esconde a lista de ligacoes
       (id "navLinks"). Ao clicar numa ligacao, o menu fecha.
       ---------------------------------------------------------------------- */
    var botaoMenu = document.getElementById("navToggle");
    var listaMenu = document.getElementById("navLinks");

    if (botaoMenu && listaMenu) {
        botaoMenu.addEventListener("click", function () {
            listaMenu.classList.toggle("open");
        });

        listaMenu.addEventListener("click", function (evento) {
            if (evento.target.tagName === "A") {
                listaMenu.classList.remove("open");
            }
        });
    }


    /* ----------------------------------------------------------------------
       3. ANIMACAO DE ENTRADA
       Mostra os elementos com a classe "reveal" assim que aparecem no ecra.
       Se o navegador for antigo, mostra tudo logo (sem animacao).
       ---------------------------------------------------------------------- */
    var elementos = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window && elementos.length) {
        var observador = new IntersectionObserver(function (entradas) {
            entradas.forEach(function (entrada) {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("in");
                    observador.unobserve(entrada.target); // anima so uma vez
                }
            });
        }, { threshold: 0.14 });

        elementos.forEach(function (el) { observador.observe(el); });
    } else {
        elementos.forEach(function (el) { el.classList.add("in"); });
    }


    /* ----------------------------------------------------------------------
       4. ANO ATUAL NO RODAPE
       Escreve o ano atual em todos os elementos com o atributo "data-year".
       ---------------------------------------------------------------------- */
    document.querySelectorAll("[data-year]").forEach(function (el) {
        el.textContent = new Date().getFullYear();
    });
})();
