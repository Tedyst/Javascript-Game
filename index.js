let play = false;
let mainAudio = document.createElement("audio");
mainAudio.src = "media/main.mp3";

function Fade(){
	let fade = document.createElement('div');
	fade.id = 'box';
	let body = document.getElementById('body');
	body.appendChild(fade);
}
				
function playAudio(){
	let audio = document.createElement("audio");
	audio.src = "media/start.mp3";
	audio.play();
	setTimeout(function(){window.location = 'game/game.html';}, 2000);
}
		
let playSong = function(){

	play = !play;

	if(play){
		let soundImg = document.getElementById('soundImg');
		soundImg.src = 'media/soundOn.png';
		mainAudio.play();
		mainAudio.loop = 'infinite';
	}

	else{
		let soundImg = document.getElementById('soundImg');
		soundImg.src = 'media/soundOff.png';
		mainAudio.pause();
	}
}