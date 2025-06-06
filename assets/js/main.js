// Ascolta il cambiamento di stato del checkbox
document.getElementById("language-toggle").addEventListener("change", function() {
    // Verifica se il checkbox è selezionato (EN)
    if (this.checked) {
        // Se il checkbox è selezionato, EN
        window.location.href = "/en";
    } else {
        // Se il checkbox non è selezionato, IT
        window.location.href = "/it";
    }
});
