import {
    getRandomScores,
    getStudentJSON,
    runTitle
} from './lib.js';

runTitle();
warmup1();
warmup2();

function warmup1() {
    console.log("Exercise week 1");

}

function warmup2() {
    console.log("Exercise week 2");
    let scores = getRandomScores(10);
    //TODO: detect button click
    document.querySelector('#button-2a').addEventListener('click', function()){

    //TODO: --scores toevoegen--
    //TODO: ul toevoegen
       
        let html = '<ul>';

        //TODO: li per score
        scores.forEach(function(score){
        //TODO: li toevoegen
            html += `<li>${score}</li>`;
        });
        html += '</ul>'
        //TODO: toevoegen aan html
        document.querySelector('#content-2').innerHTML = html;
    };
}
    //TODO: scores sorteren
   
       scores = score.sort(function(a,b)){
        if(a>b){
            return 1;
        }else {
            return -1;
        }
    };
  
   
        const sum = score.reduce(function(total, current)){
            return total + current;
        };

    


    
    


function warmup3() {
    let student = getStudentJSON();
}

function warmup4() {
    let main, min, max;
}

function warmup5() {

}
