function loadComponent(path, elementId) {
    fetch(path)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

/* detect folder depth */
const basePath = window.location.pathname.includes("/systems/")
    ? "../"
    : "";

loadComponent(basePath + "components/header.html", "header");
loadComponent(basePath + "components/footer.html", "footer");
