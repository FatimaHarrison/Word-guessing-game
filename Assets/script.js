var words = ["lamborghini", "disney", "iphone", "missippi", "ruby", "pink",
"orlando", "digital", "train", "quinceanera", "washington", "christmas",
"teammate", "lie", "sabado", "marcales", "yahoo", "watermelon",
"javascript", "ticket", "egg", "internet", "browser", "walmart", "generation",
"patrick", "galaxy", "cat", "kitten", "ice", "bracelet", "incentive", "highschool", "windows", "juno"];

var array = [
    { q: "A baby elephant weighs about 2,055 pounds.", a: "f" },
    { q: "Micheal Lawrence was a screenwritter.", a: "t" },
    { q: "The Marine Corps birthday is Nov 10th, 1775.", a: "t" },
    { q: "Chrispother Columbus discovered Egypt.", a: "f" },
    { q: "Canada was the 2nd country to gain their indepence.", a: "f" },
    { q: "Gelato ice cream is the same as regular ice cream.", a: "f" },
    { q: "Moana is the 56th Disney movie.", a: "t" },
    { q: "Everybody hates Chris.", a: "f" },
    { q: "Peter Pan is the 14th Disney moive.", a: "t" },
    { q: "Call of duty is a fun game.", a: "t" },
    { q: "Ruby is a part of coding.", a: "t" },
    { q: "Janet Jackson is a silbing out of 5.", a: "f" },
    { q: "We all have our ups and downs.", a: "t" }
];

var wins = 0, losses = 0, numGuesses = 26, count = 0;
var wordIndex = 0;
var displayWord = [], wrongGuesses = [];
var duplicate;

resetGame();
console.log(words[wordIndex]);
document.getElementById("word").innerHTML = displayMysteryWord();
document.getElementById("question").innerHTML = array[count].q;
document.onkeyup = function (event) {
    var input = event.key;
    var regExp = new RegExp(input, "gi");
    var placeholder = words[wordIndex];
      if(placeholder.search(/[a-z]|[A-Z]/) != -1){
        if(placeholder.includes(input)){
            duplicate = placeholder.match(regExp);
            for(var i = 0; i < duplicate.length; i++){
                displayWord[placeholder.indexOf(input)] = input;
                placeholder = placeholder.replace(input, " ");
           }
        }
        else{
            if(document.getElementById("wrongLetters").innerHTML.includes(input.toLowerCase(),14)){

            }
            else{
                numGuesses--;
                wrongGuesses.push(input.toLowerCase());
                document.getElementById("wrongLetters").innerHTML = "Wrong letters: " + wrongGuesses;
                var temp = "star" + starNum;
                starNum++;
                
            }
        }
    }

    updateGame();
}

function updateGame(){
    document.getElementById("word").innerHTML = displayMysteryWord();
    setTimeout
    if(numGuesses <= 0){
        losses++
        alert("Sorry game over!");
        resetGame();
    }
    if(!(document.getElementById("word").innerHTML.includes("_"))){
        if(numGuesses > 0){
            wins++;
            alert("Congratulations you've won!");
            resetGame();
        }
    }
    document.getElementById("word").innerHTML = displayMysteryWord();
    document.getElementById("Wins").innerHTML = "Wins: " + wins;
    document.getElementById("Losses").innerHTML = "Losses: " + losses;
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + numGuesses;
}

function resetGame(){
    numGuesses = 26;
    wrongGuesses = [], displayWord = [];
    document.getElementById("wrongLetters").innerHTML = "Wrong letters: " + wrongGuesses;
    wordIndex = Math.floor(Math.random()*words.length);
    for(var i = 0; i < words[wordIndex].length; i++){
        displayWord.push(" _ ");
    }
    for(var i = 1; i <= 10; i++){
        var temp = "star" + i;
        
    }
    starNum = 1;
}

function displayMysteryWord(){
    var output = "";
    for(var i = 0; i < displayWord.length; i++){
        output += displayWord[i];
    }
    return output;
}


        
