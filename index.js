let guest = document.getElementById("scoreCard");
let score = document.getElementById("scoreCardHome")
let reset = document.getElementById("reset-btn")
let val = 0;
score.innerHTML = val;
let val2 =0
guest.innerText = val2
function addOnePointHome() {
val+=1;
score.innerText = val;
    
}
 function addTwoPointHome(){
 val+=2;
 score.innerText = val
}
function addThreePointHome(){
    val+=3;
    score.innerText = val
}

function addOnePoint() {
    val2+=1;
    guest.innerText = val2;
        
    }
     function addTwoPoint(){
     val2+=2;
     guest.innerText = val2
    }
    function addThreePoint(){
        val2+=3;
        guest.innerText = val2
    }
    
    function resetbtn(){
        score.innerHTML = 0;
        val = 0;
        guest.innerText = 0;
        val2 = 0
    }