const audioRecording = {};

audioRecording.recordAudio = () => 
  new Promise(async resolve => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);

    // store chunks of recorded audio
    const audioChunks = [];

    // push into audio chunk storage
    mediaRecorder.addEventListener("dataavailable", event => {
      audioChunks.push(event.data);
    });

    // start recording
    const start = () => mediaRecorder.start();

    // stop recording
    const stop = () =>
      new Promise(resolve => {
        mediaRecorder.addEventListener("stop", () => {
          const audioBlob = new Blob(audioChunks, { type: "audio/mpeg" });
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);
          const play = () => audio.play();
          resolve({audioBlob, audioUrl, play})
        });

        mediaRecorder.stop();
      });

    resolve({ start, stop });
  });
  

audioRecording.sleep = time => new Promise(resolve => setTimeout(resolve, time));

// start when button is pressed
audioRecording.handleAction = async (idNumber) => {
  const recorder = await audioRecording.recordAudio();
  const actionButton = document.getElementById(`${idNumber}`);
  actionButton.disabled = true;
  recorder.start();
  await audioRecording.sleep(3000);
  const audio = await recorder.stop();
  audio.play();
  await audioRecording.sleep(3000);
  actionButton.disabled = false;
};

audioRecording.storeAudio = async (idNumber) => {
  const recorder = await audioRecording.recordAudio();
  const actionButton = document.getElementById(`${idNumber}`);
  // actionButton.disabled = true;
  recorder.start();
  // await audioRecording.sleep(3000);
  return await recorder.stop();
  // await audioRecording.sleep(3000);
  // actionButton.disabled = false;
}

audioRecording.playAudio = async (idNumber) => {
  // const recorder = await audioRecording.recordAudio();
  const actionButton = document.getElementById(`${idNumber}`);
  // actionButton.disabled = true;
  // recorder.start();
  // await audioRecording.sleep(3000);
  // const audio = await recorder.stop();
  const audio = await audioRecording.storeAudio(idNumber);
  audio.play();
  // await audioRecording.sleep(3000);
  // actionButton.disabled = false;
}

module.exports = audioRecording;