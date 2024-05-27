// TROCAR COR DO SITE

document.addEventListener("DOMContentLoaded", function() {
    const themeSystem = localStorage.getItem("themeSystem") || "light";
    document.documentElement.setAttribute('data-theme', themeSystem);
    const trocarcor = document.getElementById("imagemdark");
    const trocarlogo = document.getElementById("logo");
    let lightMode = themeSystem === "light";

    trocarcor.addEventListener("click", function () {
        let oldTheme = localStorage.getItem("themeSystem") || "light";
        let newTheme = oldTheme === "light" ? "dark" : "light";

        // Troca a imagem do botão
        if (lightMode) {
            trocarcor.src = "images/Modo Light.png";
            trocarlogo.src = "images/Ecopolis Logo White.png";
        } else {
            trocarcor.src = "images/Modo Dark.png";
            trocarlogo.src = "images/Ecopolis Logo.png";
        }
        lightMode = !lightMode;

        // Atualiza o tema no documento e no armazenamento local
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem("themeSystem", newTheme);
    });
});