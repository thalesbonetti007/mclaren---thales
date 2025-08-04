const botao = document.getElementById("modo-toggle");
        botao.addEventListener("click", () => {
            document.body.classList.toggle("modo-escuro");
            if (document.body.classList.contains("modo-escuro")) {
                botao.textContent = " Modo Claro";
            } else {
                botao.textContent = " Modo Escuro";
            }
        });
