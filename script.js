const truths = [
    "What's the most embarrassing thing that has happened to you?",
    "Have you ever lied to your best friend?",
    "What is your biggest fear?",
    "What's the last lie you told?",
    // Add more truths as needed
];

const dares = [
    "Sing the chorus of your favorite song.",
    "Do 20 pushups.",
    "Call a random number and sing 'Happy Birthday'.",
    "Act like an animal until your next turn.",
    // Add more dares as needed
];

function randomTask() {
    const truthOrDare = Math.random() < 0.5 ? 'truth' : 'dare';
    const task = truthOrDare === 'truth' ? getRandomTruth() : getRandomDare();
    document.getElementById('task').innerText = task;
}

function getRandomTruth() {
    const index = Math.floor(Math.random() * truths.length);
    return truths[index];
}

function getRandomDare() {
    const index = Math.floor(Math.random() * dares.length);
    return dares[index];
}
