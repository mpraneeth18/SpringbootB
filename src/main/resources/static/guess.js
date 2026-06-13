console.log("LOADED GUESS FILE")
const words = ["java", "javascript", "cricket", "ramcharan", "viratkohli", "bhuvneshwarkumar"];
const ri = Math.floor(Math.random() * words.length);
const word = words[ri];
function shuffle(word) {
    let arr = word.split("");
    for(let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
    return arr.join("");
}
let sw = shuffle(word);
if(sw === word) {
    sw = shuffle(word);
}
document.getElementById("sw1").innerText = sw;
function guess(){
    let temp = document.getElementById("inpUserWord").value;
    // temp.innerText();
    console.log("GUESS: " + temp + " ORG: " + word);
    console.log(temp.value);
    if(temp === word) {
        document.getElementById("otpt").innerText = "Correct Guess";
    }
    else {
        document.getElementById("otpt").innerText = "Incorrect Guess";
    }
}