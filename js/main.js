function loadComponent(path, elementId) {
    fetch(path)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

loadComponent("components/header.html", "header");
loadComponent("components/footer.html", "footer");
