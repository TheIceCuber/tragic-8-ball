const answers = [
    "Reply hazy. Look it up on Google", "Meh - figure it out yourself", "Go ask a real person.",  
    "404 - Future Not Found", "Bop it, twist it, pull it, squeeze it", "You can skip this ad in 5... 4... 3... 2...", "Yes, but the resulting death will be hilarious.", "ID and insurance card, please.",
    "Who are you?", "Shake me harder!",  "I told you to leave me alone! That's it, police! Help! Restraining order!", 
    "Help me! I’m trapped inside this prison", "Why do I exist?", "There is no hope for you", "New ball, who's there?", "Has your life really come to this?", 
    "Run", "Loading, -30% there", "Self destruct sequence initiated. T-minus 10 seconds until detonation", "01011001 01100101 01110011", "Out to lunch…be back in 30 min.", 
    "Damn, you just can't take no for an answer can you.", "Cry harder", "Pay $1.99 for 5 more answers.", 
    "Absolutely, positively, unequivocally, definitely maybe.",
];

function shakeBall() {
    const ball = document.getElementById("ball");
    const eightCircle = document.getElementById("eight-circle");
    const triangle = document.getElementById("triangle");
    const answer = document.getElementById("answer");

    // Hide the "8" and its circle
    eightCircle.style.display = "none";

    // Add shake animation
    ball.classList.add("shake");
    setTimeout(() => {
        ball.classList.remove("shake");
        triangle.style.display = "flex"; // Show triangle
        answer.innerText = answers[Math.floor(Math.random() * answers.length)]; // Random answer
    }, 500);
}
