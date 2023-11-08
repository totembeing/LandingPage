var luffy = new Audio("audio\\Final-Luffy.mp3");
var naruto = new Audio("audio\\Final-Naruto.mp3");
var ichigo = new Audio("audio\\Final-Ichigo.mp3");
var goku = new Audio("audio\\Final-SonGoku.mp3");

var intros = [luffy, naruto, ichigo, goku];

let isAudioPlaying = false;

function playAudio(audioFile) {
    if(!isAudioPlaying) {
        audioFile.play();
        isAudioPlaying = true;

        audioFile.addEventListener("ended", () => {
            isAudioPlaying = false;
            $(".overlay").css("display", "none");
        })
    }
}

for (let i = 0; i < document.querySelectorAll(".imgComp").length; i++) {
    document.querySelectorAll(".imgComp")[i].addEventListener("click", (event) => {
        var elementId = event.srcElement.id;
        setTimeout(() => {
            $(".popUp").attr("src", `images/${elementId}-nobg.png`)
        }, 350);
        setTimeout(() => {
            $(".overlay").css("display", "flex").fadeIn(500);
        }, 250);
        playAudio(intros[i]);
        
    })
}