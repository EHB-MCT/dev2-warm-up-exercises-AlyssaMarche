export const runTitle = () => {
    let i = 0;
    const titleHtml = document.querySelector('#title');
    const msg = "...Warming up ☕       ";
    const msgArr = msg.split('');

    setInterval(function () {
        if (i == msgArr.length - 1) {
            //reset
            titleHtml.innerHTML = '';
            i = 0;
        }
        titleHtml.innerHTML += msgArr[i];
        i++;
    }, 200);
}

export const getRandomScores = (amount) => {
    const scores = [];
    for (let i = 0; i < amount; i++) {
        scores.push(Math.round(Math.random() * 20));
    }
    return scores;
}

export const getStudentJSON = () => {
    const firstnames = ["Alyssa"];
    const lastnames = ["Marche"];
    const f = firstnames[0];
    const l = lastnames[0];
    const a = 20;
    const g =  false;
    return `{"firstname":"${f}", "name":"${l}", "age":${a}, "isGraduated": ${g}}`
}