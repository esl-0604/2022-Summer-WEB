var answerList = [
    "apple",
    "target",
    "devkor"
];

function gameStart(self){
    if (self.value === "게임 시작"){
        document.querySelector("#e").style.visibility="visible";
        document.querySelector(".rightText").style.visibility="visible";
        document.querySelector(".answerText").style.visibility="visible";

        var answer;
        var blank = []; 

        var i = Math.floor(Math.random() * answerList.length);
        answer = answerList[i];

        for(var i=0; i<answer.length; i++){
            blank.push("_");
        }
        console.log(answer);

        const keyBoard = document.querySelector("body");
        const Answer = document.querySelector("#Answer");

        Answer.innerHTML = blank.join(" ");

        keyBoard.addEventListener("keyup", e=>{
            var input = e.key;
            i = answer.indexOf(input)
            console.log(i);
            if (i>=0){
                blank[i] = input;
                console.log(answer);
                answer = answer.replace(input, "*");
                console.log(answer);
                Answer.innerHTML = blank.join(" ");
            }else{
                console.log("없는데");
            }
        });

        self.value="처음으로";
    } else{
        document.querySelector("#e").style.visibility="hidden";
        document.querySelector(".rightText").style.visibility="hidden";
        document.querySelector(".answerText").style.visibility="hidden";

        console.clear();
        self.value="게임 시작";
    }
};








