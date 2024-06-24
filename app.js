let gameSeq=[];
let userSeq=[];
let oldScore=[];

let start=false;
let level=0;

let button = document.querySelectorAll('button');

let startinitial = document.querySelector('h1');
// game start here
startinitial.addEventListener('click', function (ab) {
    if(start==false){
        start=true;
        levelup();
    }
} );

let col;
//levelup and flash
function levelup () {
    level++;
    startinitial.innerText=`Start ${level}`;
    let val=Math.floor((Math.random()*10)%4);
    col=    button[val].style.background ;
    console.log(col);
    button[val].style.background = 'white';

    setTimeout(function() {
        button[val].style.background = '';
    }, 100); // 1000 milliseconds = 1 second
    gameSeq.push(val);
};

function change(btn,col) {
    btn.style.backgroundColor  = col;
    setTimeout(function() {
        btn.style.background = '';
    }, 100); // 1000 milliseconds = 1 second

};

function btnpress() {console.dir(this);
    if(start==true)
    {
        if(this == button[0]){
            console.log('yellow');
            change(button[0],'black');
            userSeq.push(0);
            Check();
        }
        else if(this == button[1]){
            console.log('blue');
            change(button[1],'black');

            userSeq.push(1);
            Check();

        }
        else if(this == button[2]){
            console.log('red');
            change(button[2],'black');

            userSeq.push(2);
            Check();

        }
        else if(this == button[3]){
            console.log('green');        
            change(button[3],'black');

            userSeq.push(3);
            Check();

        }
        else{
            console.log('another button pressed')        
        }
    }
}

function endgame (){
    startinitial.innerText=`Game End Score ${level} \nClick here to restart game`;
    gameSeq=[]
    userSeq=[]
    oldScore.push(level);

    let stScor = document.createElement('tr');

    let fir = document.createElement('th');
    fir.innerText=`Game ${oldScore.length}`;
    let sec = document.createElement('th');
    sec.innerText= level;

    stScor.appendChild(fir);
    stScor.appendChild(sec);


    let table = document.querySelector('table');
    table.appendChild(stScor);

    level=0;
    start=false;
    let bod = document.querySelector('body');
    bod.style.backgroundColor ='red';
    setTimeout(function() {
        bod.style.background = '';
    }, 500); // 1000 milliseconds = 1 second
}

function arraysMatch(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            endgame()
            console.log('end game');
            return false;
        }
    }
    if(arr1.length == arr2.length){
        return true;    
    }
    else{
        return false;
    }
}

function Check ()  {    
    
    if(arraysMatch(userSeq,gameSeq)){
        userSeq=[];
        levelup();
    }
}


for ( butn of button) {
        butn.addEventListener('click',btnpress);   
}