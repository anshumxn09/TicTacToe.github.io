let a1 = document.getElementById('A1');
let a2 = document.getElementById('A2');
let a3 = document.getElementById('A3');
let a4 = document.getElementById('A4');
let a5 = document.getElementById('A5');
let a6 = document.getElementById('A6');
let a7 = document.getElementById('A7');
let a8 = document.getElementById('A8');
let a9 = document.getElementById('A9');
let statusBlock = document.getElementById('winStatus');
let winnerName = document.getElementById('winnerName');
let countTap = 0;
let katTurn = false;
let click = new Audio('click.mp3');
let win = new Audio('win.mp3');
let tie = new Audio('tie.mp3');

const winnerAlert = () => {
    // console.log((a1.innerHTML === a2.innerHTML === a3.innerHTML));
    if((a1.innerHTML === a2.innerHTML && a2.innerHTML === a3.innerHTML) && (a1.innerHTML !== "" && a2.innerHTML !== "" && a3.innerHTML !== "")){
            click.pause();
            win.play();
            a1.style.background = "springgreen";
            a2.style.background = "springgreen";
            a3.style.background = "springgreen";
            if(a1.innerHTML.includes('kat.png')){
                winnerName.innerHTML = "Dr. Kat Win!!!!";
            }else{
                winnerName.innerHTML = "Coop Win!!!!";
            }
            Array.from(document.getElementsByClassName('clickOn')).forEach((element) => {
                element.disabled = true;
            })
    }
    else if((a4.innerHTML === a5.innerHTML && a5.innerHTML === a6.innerHTML) && (a4.innerHTML !== "" && a5.innerHTML !== "" && a6.innerHTML !== "")){
            click.pause();
            win.play();
            a4.style.background = "springgreen";
            a5.style.background = "springgreen";
            a6.style.background = "springgreen";
            if(a4.innerHTML.includes('kat.png')){
                winnerName.innerHTML = "Dr. Kat Win!!!!";
            }else{
                winnerName.innerHTML = "Coop Win!!!!";
            }
            Array.from(document.getElementsByClassName('clickOn')).forEach((element) => {
                element.disabled = true;
            })
    }
    else if((a7.innerHTML === a8.innerHTML && a8.innerHTML === a9.innerHTML) && (a7.innerHTML !== "" && a8.innerHTML !== "" && a9.innerHTML !== "")){
            click.pause();
            win.play();
            a7.style.background = "springgreen";
            a8.style.background = "springgreen";
            a9.style.background = "springgreen";
            if(a7.innerHTML.includes('kat.png')){
                winnerName.innerHTML = "Dr. Kat Win!!!!";
            }else{
                winnerName.innerHTML = "Coop Win!!!!";
            }
            Array.from(document.getElementsByClassName('clickOn')).forEach((element) => {
                element.disabled = true;
            })
    }
    else if((a1.innerHTML === a4.innerHTML && a4.innerHTML === a7.innerHTML) && (a1.innerHTML !== "" && a4.innerHTML !== "" && a7.innerHTML !== "")){
            click.pause();
            win.play();
            a1.style.background = "springgreen";
            a4.style.background = "springgreen";
            a7.style.background = "springgreen";
            if(a4.innerHTML.includes('kat.png')){
                winnerName.innerHTML = "Dr. Kat Win!!!!";
            }else{
                winnerName.innerHTML = "Coop Win!!!!";
            }
            Array.from(document.getElementsByClassName('clickOn')).forEach((element) => {
                element.disabled = true;
            })
    }
    else if((a2.innerHTML === a5.innerHTML && a5.innerHTML === a8.innerHTML) && (a2.innerHTML !== "" && a5.innerHTML !== "" && a8.innerHTML !== "")){
            click.pause();
            win.play();
            a2.style.background = "springgreen";
            a5.style.background = "springgreen";
            a8.style.background = "springgreen";
            if(a2.innerHTML.includes('kat.png')){
                winnerName.innerHTML = "Dr. Kat Win!!!!";
            }else{
                winnerName.innerHTML = "Coop Win!!!!";
            }
            Array.from(document.getElementsByClassName('clickOn')).forEach((element) => {
                element.disabled = true;
            })
    }
    else if((a3.innerHTML === a6.innerHTML && a6.innerHTML === a9.innerHTML) && (a3.innerHTML !== "" && a6.innerHTML !== "" && a9.innerHTML !== "")){
            click.pause();
            win.play();
            a3.style.background = "springgreen";
            a6.style.background = "springgreen";
            a9.style.background = "springgreen";
            if(a3.innerHTML.includes('kat.png')){
                winnerName.innerHTML = "Dr. Kat Win!!!!";
            }else{
                winnerName.innerHTML = "Coop Win!!!!";
            }
            Array.from(document.getElementsByClassName('clickOn')).forEach((element) => {
                element.disabled = true;
            })
    }
    else if((a1.innerHTML === a5.innerHTML && a5.innerHTML === a9.innerHTML) && (a1.innerHTML !== "" && a5.innerHTML !== "" && a9.innerHTML !== "")){
            click.pause();
            win.play();
            a1.style.background = "springgreen";
            a5.style.background = "springgreen";
            a9.style.background = "springgreen";
            if(a1.innerHTML.includes('kat.png')){
                winnerName.innerHTML = "Dr. Kat Win!!!!";
            }else{
                winnerName.innerHTML = "Coop Win!!!!";
            }
            Array.from(document.getElementsByClassName('clickOn')).forEach((element) => {
                element.disabled = true;
            })
    }
    else if((a3.innerHTML === a5.innerHTML && a5.innerHTML === a7.innerHTML) && (a3.innerHTML !== "" && a5.innerHTML !== "" && a7.innerHTML !== "")){
            click.pause();
            win.play();
            a3.style.background = "springgreen";
            a5.style.background = "springgreen";
            a7.style.background = "springgreen";
            if(a5.innerHTML.includes('kat.png')){
                winnerName.innerHTML = "Dr. Kat Win!!!!";
            }else{
                winnerName.innerHTML = "Coop Win!!!!";
            }
            Array.from(document.getElementsByClassName('clickOn')).forEach((element) => {
                element.disabled = true;
            })
    }
    else{
        if(countTap === 9){
            click.pause();
            tie.play();
            Array.from(document.getElementsByClassName('clickOn')).forEach((element) => {
                element.style.background = "palevioletred"
                element.disabled = true;
            })
            winnerName.innerHTML = "It's A Tie"
        }
    }
}
Array.from(document.getElementsByClassName('clickOn')).forEach((element, array, index) => {
    element.addEventListener('click', ()=> {
        if(element.innerHTML === ""){
            if(!katTurn){
                click.pause();
                click.play();
                element.innerHTML = '<img src="coop.png" alt="coop" height="100vh">';
                countTap++;
                katTurn = true;
            }else{
                click.pause();
                click.play();
                element.innerHTML = '<img src="kat.png" alt="kat" height="100vh">';
                countTap++;
                katTurn = false;
            }
            winnerAlert();
        }
    })
})