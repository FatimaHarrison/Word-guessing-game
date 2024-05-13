
var words = ["disney", "pink","orlando",  "washington", "yahoo", "watermelon", "walmart",
"patrick", "cat", "kitten", "windows", "juno", "marcales"];

var array = [
        { q: "A baby elephant weighs about 2,055 pounds.", a: "disney" },
        { q: "Micheal Lawrence was a screenwritter.", a: "yahoo" },
        { q: "The Marine Corps birthday is Nov 10th, 1775.", a: "cat" },
        { q: "Chrispother Columbus discovered Egypt.", a: "marcales" },
        { q: "Canada was the 2nd country to gain their indepence.", a: "juno" },
        { q: "Gelato ice cream is the same as regular ice cream.", a: "patrick" },
        { q: "Moana is the 56th Disney movie.", a: "kitten" },
        { q: "Everybody hates Chris.", a: "walmart" },
        { q: "Peter Pan is the 14th Disney moive.", a: "pink" },
        { q: "Call of duty is a fun game.", a: "orlando" },
        { q: "Ruby is a part of coding.", a: "washington" },
        { q: "Janet Jackson is a silbing out of 5.", a: "windows" },
        { q: "We all have our ups and downs.", a: "apple" }
    ];

    document.getElementById("question").innerHTML = array[count].q;
    document.onkeyup   = function (event) {
        var input = event.key;
        if(input == words){
            if (array[count].a == input) {
                alert("Correct");
                score++;
                document.getElementById("score").innerHTML = "Current score: " + score;
            }
            else{
                alert("Incorrect");
                score--;
                       
            }
            count++;
            if(count < 10){
                document.getElementById("question").innerHTML = array[count].q;
            }
            else{
                alert("You've reached to the end");
            }
        }
        else{
            alert("Remember the letters are all lowercase.");
        }
    }

   
    function displayTutorial() {
            var x = document.getElementById("tutorial");
            var y = document.getElementById("tutorialButton");
            if (x.style.display === "none") {
                x.style.display = "block";
                y.textContent = "Put away instructions";
            } else {
                x.style.display = "none";
                y.textContent = "Reveal instructions";
            }
    }
    
   
