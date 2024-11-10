let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");

let msg = document.querySelector("#msg");


let trueO=true;




const winsPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
   

const resetgame=()=>{
    enableBoxes();
    msgContainer.classList.add("hide");
}


const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText="";
  }
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("btn is clicked");
        if(trueO){
        box.innerText="O";
        trueO=false;
        }else{
        box.innerText = "X";
        trueO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const checkWinner=()=>{
    for(let pattern of winsPattern  ){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

         let pos1 = boxes[pattern[0]].innerText;
         let pos2 = boxes[pattern[1]].innerText;
         let pos3 = boxes[pattern[2]].innerText;

            if (pos1 != "" && pos2 != "" && pos3 != "") {
              if (pos1 == pos2 && pos2 == pos3&&pos1==pos3 ) {
                console.log("winner",pos1);
                showWinner(pos1);
              }
            }
    }

   
     
}

const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congo, the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();

}

newgamebtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);