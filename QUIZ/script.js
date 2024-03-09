function checkAnswer(points) {
    let score = parseInt(sessionStorage.getItem('score')) || 0;
    score += points;
    sessionStorage.setItem('score', score);

    let currentQuestion = parseInt(sessionStorage.getItem('currentQuestion')) || 1;
    currentQuestion++;
    if (currentQuestion <= 10) {
        window.location.href = "question" + currentQuestion + ".html";
        sessionStorage.setItem('currentQuestion', currentQuestion);
    } else {
        let result;
        if (score > 80) {
            result = "result1.html";
        } else if (score >= 60 && score <= 80) {
            result = "result2.html";
        } else {
            result = "result3.html";
        }
        window.location.href = result;
    }
}

// Mencegah navigasi mundur
history.pushState(null, null, location.href)
window.onpopstate = function() {
    history.go(1) ;
}

window.history.pushState(null, "", window.location.href);
window.onpopstate = function(event) {
    window.history.pushState(null, "", window.location.href);
    let currentQuestion = parseInt(sessionStorage.getItem('currentQuestion')) || 1;
    if (currentQuestion <= 10) {
        window.location.href = "question" + currentQuestion + ".html";
    } else {
        let score = sessionStorage.getItem('score') || 0;
        let result;
        if (score > 80) {
            result = "result1.html";
        } else if (score >= 60 && score <= 80) {
            result = "result2.html";
        } else {
            result = "result3.html";
        }
        window.location.href = result;
    }
};
