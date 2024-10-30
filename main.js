function AlteraTitulo() {
    document.getElementById("title").innerText = "Vai Corinthians!";
}

function AlteraParagrafo() {
    const paragraph = document.getElementById("paragraph");
    paragraph.style.color = paragraph.style.color === "black" ? "blue" : "black";
}

function AlteraImagem (){
    const img = document.getElementById("image");
    img.src = "Vert.png";
}

function TocaAudio (){
    const audio = document.getElementById("audio");
    audio.play();  
}

function toggleButtons (){
    const buttons = document.querySelectorAll(".botao");
    buttons.forEach(button => button.classList.toggle("botao1"));
}
