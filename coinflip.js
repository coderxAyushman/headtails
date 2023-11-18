
function pickcomputerMove(){
	const randomNumber = Math.random();
	let computerMove = null;

	if (randomNumber <= 1 / 2 && randomNumber > 0){computerMove = 'Head'}
	else if (randomNumber <= 1 && randomNumber > 1 / 2){computerMove = 'Tail'}

    return computerMove;
}

function playGame(playerMove){
	let computermove = '';
	let computerMove = pickcomputerMove();
	let retun = document.getElementById('retun');
	if (playerMove === 'Head') {computermove = 'Tail';}
	else if (playerMove === 'Tail') {computermove = 'Head';}

	retun.textContent = `you picked ${playerMove}. Your opponent picked ${computermove}. result is ${computerMove}.`
}