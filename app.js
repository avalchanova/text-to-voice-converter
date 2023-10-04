let speech = new SpeechSynthesisUtterance();
// creates a new instance of the SpeechSynthesisUtterance object, which represents the text that will be spoken

let voices = [];

let voiceSelect = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = () => {
    // is an event that fires when the list of available voices has been updated
    voices = window.speechSynthesis.getVoices(); // getVoices() provides all the available voices on the device
    speech.voice = voices[0];
    // setting the voice property of the SpeechSynthesisUtterance object (speech) to the first voice in the voices array

    voices.forEach(
        (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
    );
};

voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value]; // sets the voice property of the SpeechSynthesisUtterance object (speech) to the selected voice, allowing the user to choose a specific voice from the dropdown menu
});

document.querySelector('button').addEventListener('click', () => {
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
});
