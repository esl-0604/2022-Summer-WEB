/* 행맨에서 쓰일 정답 리스트 */
var answerList = [
    "apple",
    "target",
    "devkor"
];

/* 게임 시작 버튼을 눌렀을 경우 자동으로 실행되는 행맨 게임 함수 */
const gameStart = (self) => {
    // "게임 시작" 버튼을 누른 경우 game UI가 생성되면서 게임 시작
    if (self.value === "게임 시작"){ 
        
        // 게임 UI를 보이도록 설정
        hangman.style.visibility="visible";
        right.style.visibility="visible";
        answerSheet.style.visibility="visible";


        
        // 게임 시작 시에 정답 리스트 중에서 한 단어가 랜덤으로 answer에 할당됨.  
        answer = answerList[Math.floor(Math.random() * answerList.length)];

        // answer에 할당된 단어 길이만큼 blank 변수에서 "_"가 할당됨.
        for(var t=0; t<answer.length; t++){
            blank.push("_");
        }
        // console을 통해 정답을 확인할 수 있음.
        console.log("The Answer : " + answer);

        // 처음에는 모든 칸이 "_" 인 상태로 답안지가 주어진다.
        Answer.innerHTML = blank.join(" ");

        // 키보드에 입력을 할 때마다, answering 함수 호출
        keyBoard.addEventListener("keyup", Answering);

        self.value="처음으로";
    }
    // "처음으로" 버튼을 누른 경우 페이지를 새로고침 시키며 처음 모습으로 세팅 
    else{
        location.reload(true);
    }
};

// answering : 게이머가 키보드로 입력할 때마다 호출되는 함수
    // answer에 있는 단어인지 체크한다.
    //    - 만약에 있을 경우, 답안지를 수정하고, answer에서는 해당 단어를 지움.
    //    - 만약에 없을 경우, 목숨 1개를 빼고, aWrong에 해당 글자를 표시, 행맨 그림이 하나 추가된다.
const Answering = (e) => {
    // input : 키보드로 입력받은 글자
    var input = e.key;

    // answer에 input이 있는지 확인
    //  - 있으면 : 가장 먼저 input이 등장하는 index 반환
    //  - 없으면 : -1 반환
    var i = answer.indexOf(input)
    
    if (i>=0){
        // blank에 input 대입
        // anwer에 input 마킹
        // 수정된 blank 다시 정답지로 주어짐.
        blank[i] = input;
        answer = answer.replace(input, "*");
        Answer.innerHTML = blank.join(" ");

        // answer가 전부 마킹된다면, 게임 승리
        if(answer.length === answer.split("*").length - 1){
            console.log("게임 승리");
            keyBoard.removeEventListener("keyup", Answering);
            // 게임 승리에 대한 팝업창 오픈
            window.open(
                "winpop.html", 
                "Game Win", 
                "width=300px, height=50px, left=500, top=400"
            );
        }
    }else{
        // 만약 input이 answer에 없다면, 
        //   - 목숨 1개 감소, 행맨 그림 한개씩 추가
        //   - 오답에 해당 input 추가
        lifes -= 1; 
        hangmanAppear();

        // 콘솔에 남은 목숨 표시
        console.log("lifes : " + lifes);

        // 오답에 해당 input 추가해서 업로드
        wrong.push(input);
        Wrong.innerHTML = wrong.join(" ");             

        // 만약, 목숨이 0일 경우에는 게임 종료에 대한 팝업창 오픈
        if(lifes === 0){
            console.log("게임 패배");
            keyBoard.removeEventListener("keyup", Answering);
            window.open(
                "losepop.html", 
                "Game Lose", 
                "width=300px, height=50px, left=500, top=400"
            );
        }
    }
}

// 남은 목숨에 따라 행맨 그림 표시해주는 함수
const hangmanAppear = () => {
    if(lifes === 5){
        hangman1.style.visibility="visible";
    }
    if(lifes === 4){
        hangman2.style.visibility="visible";
    }
    if(lifes === 3){
        hangman3.style.visibility="visible";
    }
    if(lifes === 2){
        hangman4.style.visibility="visible";
    }
    if(lifes === 1){
        hangman5.style.visibility="visible";
    }
    if(lifes === 0){
        hangman6.style.visibility="visible";
    }
}

/* 
<게임에 필요한 변수 선언>
    1. answer : 정답 단어가 들어갈 변수
        - 예시) answer = "name";

    2. blank : 게이머가 단어를 맞추고 있는 현상황이 반영되는 변수
        - 처음에는 정답 단어 개수만큼 "_ _ _ _" 형태로 주어짐.
        - 맞춰갈 수록 "_ a _ e" 형태로 동적으로 바뀜.

    3. lifes : 게이머에게 주어진 목숨 개수를 담고있는 변수
        - 처음에는 총 6개의 목숨이 주어짐.

    4. wrong : 오답들을 모아둘 변수
*/
var answer; 
var blank = []; 
var lifes = 6;
var wrong = [];


/* <게임에 필요한 객체 상수 선언> */
const hangman = document.querySelector("#e");
const right = document.querySelector(".rightText");
const answerSheet = document.querySelector(".answerText");
const keyBoard = document.querySelector("body");
const Answer = document.querySelector("#Answer");
const Wrong = document.querySelector("#awrong");
const hangman1 = document.querySelector("#e1");
const hangman2 = document.querySelector("#e2");
const hangman3 = document.querySelector("#e3");
const hangman4 = document.querySelector("#e4");
const hangman5 = document.querySelector("#e5");
const hangman6 = document.querySelector("#e6");






