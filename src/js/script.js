// 1. Atualizar o ano do rodapé automaticamente
document.addEventListener("DOMContentLoaded", () => {
  const anoAtual = new Date().getFullYear();
  const elementoAno = document.getElementById("ano-atual");

  if (elementoAno) {
    elementoAno.textContent = anoAtual;
  }
});

// 2. Scroll Suave para os links de navegação
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");

    if (targetId !== "#") {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  });
});
