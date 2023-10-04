let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices(); // getVoices() provides all the available voices on the device
    speech.voice = voices[0];

    voices.forEach(
        (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
    );
};

document.querySelector('button').addEventListener('click', () => {
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
});
