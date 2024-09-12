document.addEventListener('DOMContentLoaded', function() {
    fetch('base/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Errore nel caricamento dell\'header:', error));
});
