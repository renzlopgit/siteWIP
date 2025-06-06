document.getElementById("language-toggle").addEventListener("change", function() {
    if (this.checked) {
        window.location.href = "/en";
    } else {
        window.location.href = "/it";
    }
});
