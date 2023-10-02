document.addEventListener("DOMContentLoaded", function() {
    console.log("carga");
    const uploadInput = document.getElementById("upload");
    const fileStatus = document.getElementById("fileStatus");

    uploadInput.addEventListener("change", function() {
        if (uploadInput.files.length > 0) {
            fileStatus.textContent = `Archivo seleccionado`;
        } else {
            fileStatus.textContent = "Ningún archivo seleccionado";
        }
    });
});

