const startBtn = document.getElementById('start-btn');
const transcriptP = document.getElementById('transcript');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (window.SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.lang = 'es-ES'; // Cambia a 'en-US' si prefieres el inglés
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
        startBtn.textContent = 'Grabando...';
    };

    recognition.onend = () => {
        startBtn.textContent = 'Iniciar grabación';
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        transcriptP.textContent = `Tu dijiste: ${transcript}`;
    };

    recognition.onerror = (event) => {
        transcriptP.textContent = `Un error a ocurrido: ${event.error}`;
    };

    startBtn.addEventListener('click', () => {
        recognition.start();
    });
} else {
    transcriptP.textContent = 'Lo siento, tu navegador no soporta el reconocimiento por voz';
}
