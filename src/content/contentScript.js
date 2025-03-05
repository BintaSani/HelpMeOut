const trustedOrigins = ['http://localhost:3000', 'https://help-me-out-ext.netlify.app/', 'https://chrome-ext-40d06.firebaseapp.com', 'https://firebase.google.com', 'https://helpmeout-be.vercel.app/', `chrome-extension://${chrome.runtime.id}`];
const requestUIDAndToken = () => {
  window.postMessage({ type: 'REQUEST_UID_AND_TOKEN' }, trustedOrigins);
  console.log('uid and token');
};

// Trigger the request when the content script is injected
requestUIDAndToken();
let storedUid = null;

window.addEventListener('message', async (event) => {
  // Ensure the message is from the correct origin
  if (!trustedOrigins.includes(event.origin)) return;

  const { type, token, uid } = event.data;

  if (type === 'SEND_TOKEN') {
    console.log('Received token and UID from hosted site:', { token, uid });

    // Use the UID and token for further actions
    try {
      storedUid = uid;
      const { signature, timestamp, folder } = await getSignature(storedUid);
      console.log('Signature details:', { signature, timestamp, folder });
      console.log(storedUid);
      // Example: Use this data for uploading a video
      // await stopRecording(token, signature, timestamp, folder);
    } catch (error) {
      console.error('Error processing received UID or token:', error);
    }
  }
});


// window.addEventListener('message', (event) => {
//   console.log(event)
//   if (!trustedOrigins.includes(event.origin)) {
//     console.error('Untrusted origin:', event.origin);
//     return;
//   }

//   if (event.data.type === 'SEND_TOKEN') {
//     const token = event.data.token;
//     console.log('Token received in content script:', token);

//     // Send token to the background script
//     // chrome.runtime.sendMessage({ type: 'AUTH_WITH_TOKEN', token: token }, (response) => {
//     //   if (chrome.runtime.lastError) {
//     //     console.error('Error sending message:', chrome.runtime.lastError.message);
//     //     return;
//     //   }

//     //   if (response?.success) {
//     //     console.log('User ID received from background:', response.userId);
//     //   } else {
//     //     console.error('Failed to authenticate:', response?.error || 'No response received');
//     //   }
//     // });
//     console.log('Sending message to background script');
//     chrome.runtime.sendMessage({ type: 'AUTH_WITH_TOKEN', token: token }, (response) => {
//       console.log('Response received:', response);
//       if (chrome.runtime.lastError) {
//         console.error('Error in communication:', chrome.runtime.lastError.message);
//         return;
//       }
    
//       if (response?.success) {
//         console.log('User ID received from background:', response.userId);
//       } else {
//         console.error('Failed to authenticate:', response?.error || 'No response received');
//       }
//     });
    
//   }
// }); 



var timer = document.createElement('div');
timer.style.color = 'white';
timer.style.display = 'flex';
timer.style.cursor = 'pointer';
timer.style.width = '25%';
timer.innerHTML = `<p style="display: flex; align-items: center" ><span id="time" style="font-size: 1.7rem;">00:00:00</span><span>&nbsp;</span></p>`

var timerImg = document.createElement('img');
timerImg.src = 'https://res.cloudinary.com/ddtbgrglm/image/upload/v1732530647/dot_bog23u.svg';
timer.alt = 'dot';
timerImg.style.width = '10px';
timerImg.style.height = '10px';
timerImg.style.margin = 'auto';
timer.appendChild(timerImg);


var divider = document.createElement('div');
divider.style.justifyItems = 'center';
divider.style.justifyContent = 'center';
divider.style.border = 'none';

var dividerImg = document.createElement('img');
dividerImg.style.height = '5vh';
dividerImg.style.marginTop = 'auto';
dividerImg.style.marginBottom = 'auto';
dividerImg.src = 'https://res.cloudinary.com/ddtbgrglm/image/upload/v1732531164/divider_w8u8ah.svg';
dividerImg.alt = 'divider';
divider.appendChild(dividerImg);



var pauseBtn = document.createElement('button');
pauseBtn.style.cursor = 'pointer';
pauseBtn.style.justifyItems = 'center';
pauseBtn.style.justifyContent = 'center';
pauseBtn.style.background = '#ffffff';
pauseBtn.style.border = 'none';
pauseBtn.style.height = '5vh';
pauseBtn.style.width = '14%';
pauseBtn.style.borderRadius = '50px';
pauseBtn.style.marginTop = 'auto';
pauseBtn.style.marginBottom = 'auto';
pauseBtn.style.paddingTop = '0.5vh';

var pauseImg = document.createElement('img');
pauseImg.style.height = '3vh';
pauseImg.style.width = '45%';
pauseImg.style.margin = 'auto';

pauseImg.src = 'https://i.ibb.co/6Z030k8/play-svgrepo-com-2.png';
pauseImg.alt = 'play';
pauseBtn.appendChild(pauseImg);



var stopB = document.createElement('button');
stopB.style.cursor = 'pointer';
stopB.style.justifyItems = 'center';
stopB.style.justifyContent = 'center';
stopB.style.background = '#ffffff';
stopB.style.border = 'none';
stopB.style.height = '5vh';
stopB.style.width = '14%';
stopB.style.borderRadius = '50px';
stopB.style.marginTop = 'auto';
stopB.style.marginBottom = 'auto';
stopB.style.paddingBottom = '0.5vh';

var stopImg = document.createElement('img');
stopImg.style.height = '5vh';
stopImg.style.width = '80%';
stopImg.style.margin = 'auto';

stopImg.src = 'https://i.ibb.co/k4bjQn0/stop-svgrepo-com-1.png';
stopImg.alt = 'stop';
stopB.appendChild(stopImg);



var videoBtn = document.createElement('button');
videoBtn.style.cursor = 'pointer';
videoBtn.style.justifyItems = 'center';
videoBtn.style.justifyContent = 'center';
videoBtn.style.background = '#ffffff';
videoBtn.style.border = 'none';
videoBtn.style.height = '5vh';
videoBtn.style.width = '14%';
videoBtn.style.borderRadius = '50px';
videoBtn.style.marginTop = 'auto';
videoBtn.style.marginBottom = 'auto';
videoBtn.style.paddingTop = '0.5vh';

var videoImg = document.createElement('img');
videoImg.style.height = '3vh';
videoImg.style.width = '55%';
videoImg.style.margin = 'auto';

videoImg.src = 'https://i.ibb.co/PMjHVPv/video-camera-svgrepo-com-3.png';
videoImg.alt = 'video';
videoBtn.appendChild(videoImg);



var audioBtn = document.createElement('button');
audioBtn.style.cursor = 'pointer';
audioBtn.style.justifyItems = 'center';
audioBtn.style.justifyContent = 'center';
audioBtn.style.background = '#ffffff';
audioBtn.style.border = 'none';
audioBtn.style.height = '5vh';
audioBtn.style.width = '14%';
audioBtn.style.borderRadius = '50px';
audioBtn.style.marginTop = 'auto';
audioBtn.style.marginBottom = 'auto';
audioBtn.style.paddingTop = '0.5vh';

var audioImg = document.createElement('img');
audioImg.style.height = '3vh';
audioImg.style.width = '70%';
audioImg.style.margin = 'auto';

audioImg.src = 'https://i.ibb.co/gtjr5BY/mic-microphone-podcast-svgrepo-com.png';
audioImg.alt = 'audio';
audioBtn.appendChild(audioImg);



var trash = document.createElement('button');
trash.style.cursor = 'pointer';
trash.style.justifyItems = 'center';
trash.style.justifyContent = 'center';
trash.style.background = '#4B4B4B';
trash.style.border = 'none';
trash.style.height = '5vh';
trash.style.width = '14%';
trash.style.borderRadius = '50px';
trash.style.marginTop = 'auto';
trash.style.marginBottom = 'auto';


var trashImg = document.createElement('img');
trashImg.style.height = '3vh';
trashImg.style.width = '50%';
trashImg.style.margin = 'auto';

trashImg.src = 'https://i.ibb.co/P12hFgn/bin.png';
trashImg.alt = 'trash';
trash.appendChild(trashImg);



var videoContainer = document.createElement('div');
videoContainer.style.borderRadius = '50%';
videoContainer.style.height = '10rem';
videoContainer.style.width = '10rem';
videoContainer.style.overflow = 'hidden';
videoContainer.style.display = 'none';

var videoSource = document.createElement('video');
videoSource.style.width = '100%';
videoSource.style.height = '100%';
videoSource.style.objectFit = 'cover';
videoSource.style.objectPosition = 'center';

videoContainer.appendChild(videoSource);


var buttonsContainer = document.createElement('div');
buttonsContainer.style.display = 'flex';
buttonsContainer.style.justifyContent = 'space-between';
buttonsContainer.style.width = '70%';
buttonsContainer.appendChild(pauseBtn);
buttonsContainer.appendChild(stopB);
buttonsContainer.appendChild(videoBtn);
buttonsContainer.appendChild(audioBtn);
buttonsContainer.appendChild(trash);

var container = document.createElement('div');
container.style.background = '#141414';
container.style.display = 'flex';
container.style.width = '72%';
container.style.height = '9vh';
container.style.borderRadius = '50px';
container.style.border = '7px solid #4B4B4B';
container.style.alignItems = 'center';
container.style.justifyContent = 'space-between';
container.style.paddingLeft = '1%';
container.style.paddingRight = '1%';
container.style.marginTop = 'auto';
container.style.marginBottom = 'auto';


container.appendChild(timer);
container.appendChild(divider);
container.appendChild(buttonsContainer);



var widget = document.createElement('div');

widget.appendChild(videoContainer);
widget.appendChild(container);

widget.style.display = 'flex';
widget.style.margin = '0 0 0 2rem';
widget.style.gap = '0.5rem';
widget.style.alignItems = 'center';
widget.style.position = 'fixed';
widget.style.zIndex = '50';
widget.style.bottom = '5vh';
widget.style.left = '1.2%';
widget.style.width = '40%';
widget.style.justifyContent = 'space-between';


var body = document.body.appendChild(widget);

var isRecording = null;
var isStopped = null;

var constraints = {
    audio: true,
    video: true,
  };
  
  
  
  let recorder;
  let isPaused = false;
  let recordedChunks = [];
  let stream = null;
  let audio = null;
  var isCamera = null;
  var cameraStream = null;

  let timerInterval;
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  
  console.log({ isRecording, isStopped }, 'check ');

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  document.getElementById('time').textContent = formattedTime; // Update the timer display
}



function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(updateTimer, 1000);
  }
}

// function pauseTimer() {
//   if (timerInterval) {
//     clearInterval(timerInterval);
//     timerInterval = null;
//   }
// }

function resumeTimer() {
  if (!timerInterval) {
    startTimer();
  }
}

// function stopTimer() {
//   if (timerInterval) {
//     clearInterval(timerInterval);
//     timerInterval = null;
//   }
  
//   seconds = 0;
//   minutes = 0;
//   hours = 0;
//   updateTimer(); // Update the timer display
// }

function pauseTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function stopTimer() {
  pauseTimer(); // stops the interval without resetting time
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateTimer();
}


  


async function startRecording() {
  isRecording = true;
  isStopped = false;
  // console.log({ isRecording, isStopped }, 'checking ');
  if (recorder && recorder.state === 'recording') {
    recorder.pause();
    pauseTimer();
    console.log('recording paused');
  } else if (recorder && recorder.state === 'paused') {
    recorder.resume();
    isPaused = false;
    resumeTimer();
    console.log('resumed recording');
  } else {
    stream = navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: true,
    });

    audio = navigator.mediaDevices.getUserMedia({
      video: false,
      audio: true,
    });
    
    let audioInput = await audio;
    // startTimer();
    // console.log('recording started');

    stream
      .then(async (mediaStream) => {
        let media = new MediaStream([
          ...mediaStream.getTracks(),
          ...audioInput.getAudioTracks(),
        ]);
        recorder = new MediaRecorder(media, {
          mimeType: 'video/webm;codecs=vp9,opus',
        });
        var audioTrack = mediaStream?.getAudioTracks();
        console.log(audioTrack, 'audio track');

        recorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            recordedChunks.push(event.data);
          }
        };

        recorder.start();
        startTimer();
        console.log('recording started');
      })
      .catch((error) => {
        console.error('Error accessing media devices:', error);
      });
  }
}

// async function stopRecording() {
//   isStopped = true;
//   isRecording = false;
//   console.log({ isRecording, isStopped }, 'checking ');
//   alert('capturing has ended');
//   if (recorder && recorder.state !== 'inactive') {
//     recorder.stop();
//     stopTimer();
//     recorder.onstop = async () => {
//       var blob = new Blob(recordedChunks, {
//         mimeType: 'video/webm;codecs=vp9,opus',
//       });
//       recordedChunks = [];

//       if (stream) {
//         const streamInstance = await stream;
//         streamInstance.getTracks().forEach(track => track.stop());
//         stream = null;
//      }
     
//      if (audio) {
//         const audioStream = await audio;
//         audioStream.getTracks().forEach(track => track.stop());
//         audio = null;
//      }

//       console.log(blob, 'blob  here');

//       var formData = new FormData();
//       formData.append(
//         'video',
//         blob,
//         `HelpMeOut_video_${new Date().getTime()}.webm`
//       );
//       console.log(formData);
//       // fetch(
//       //   apiEndpoint, {
//       //   method: 'POST',
//       //   headers: {
//       //     'Authorization': 'Bearer 02LTprR4LVUJBoev2NYTDRs4c1sOQXF3HLsYvTBiYsVnnTAiutNgfmy7VpJyRzjoOgMKcBGu7kHl3U97ceK4c2B4AEiek',
//       //     // 'Content-Type':	'application/json',
//       //   //   'Accept': 'application/vnd.vimeo.*+json;version=3.4',
//       //   },
//       //   body: formData,
//       //   //redirect_url: "https://help-me-out-ext.netlify.app/playback"
//       // })
//       //   .then((response) => {
//       //     console.log(response);
//       //     if (response.ok) {
//       //       console.log('Screen recording sent to the API successfully.');
//       //       var res = response.json();
//       //       console.log(res);
//       //       return res;
//       //     } else {
//       //       console.error('Error sending screen recording to the API.');
//       //     }
//       //   })
//       //   .then(async (data) => {
//       //     console.log('data' + data);
//       //     if (data) {
//       //       var baseUrl = 'https://help-me-out-ext.netlify.app';
//       //       const videoURL =`${baseUrl}/playback?recording=${data.url}&transcript=${data.transcribe_url}&filename=${data.video_name}`
           
//       //       window.open(videoURL);
//       //     } else throw new Error('An error occurred');
//       //   })
//       //   .catch((error) => {
//       //     console.error('Error sending screen recording to the API:', error);
//       //   });
//       try {
//         // Send the FormData to the API
//         const response = await fetch(apiEndpoint, {
//           method: 'POST',
//           headers: {
//             Authorization: 'Bearer 02LTprR4LVUJBoev2NYTDRs4c1sOQXF3HLsYvTBiYsVnnTAiutNgfmy7VpJyRzjoOgMKcBGu7kHl3U97ceK4c2B4AEiek',
//             // DO NOT set 'Content-Type' here
//           },
//           body: formData,
//         });

//         if (!response.ok) {
//           console.error('Error sending screen recording to the API:', response.statusText);
//           return;
//         }

//         console.log('Screen recording sent to the API successfully.');
//         const data = await response.json();
//         console.log('API Response:', data);

//         if (data) {
//           const baseUrl = 'https://help-me-out-ext.netlify.app';
//           const videoURL = `${baseUrl}/playback?recording=${data.url}&transcript=${data.transcribe_url}&filename=${data.video_name}`;
//           window.open(videoURL);
//         }
//       } catch (error) {
//         console.error('Error sending screen recording to the API:', error);
//       }
    
//     };
//   }
// }


// 

// Helper function to generate the signature

async function getSignature(uid) {
  const timestamp = Math.floor(Date.now() / 1000);
  // if (!uid) throw new Error('UID is missing or undefined');

  try {
    const response = await fetch('https://helpmeout-be.vercel.app/generate-signature', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ timestamp, uid }),
    });

    if (!response.ok) throw new Error('Failed to fetch signature');

    const data = await response.json();
    return { signature: data.signature, timestamp, folder: data.folder };
  } catch (error) {
    console.error('Error fetching signature:', error);
    throw error;
  }
}



async function stopRecording() {
  // if (!token) {
  //   console.error('User is missing or UID is undefined');
  //   return;
  // }
  isStopped = true;
  isRecording = false;
  console.log({ isRecording, isStopped }, 'checking ');
  alert('capturing has ended');
  
  if (recorder && recorder.state !== 'inactive') {
    recorder.stop();
    stopTimer();

    recorder.onstop = async () => {
      var blob = new Blob(recordedChunks, {
        mimeType: 'video/webm;codecs=vp9,opus',
      });
      recordedChunks = [];

      if (stream) {
        const streamInstance = await stream;
        streamInstance.getTracks().forEach(track => track.stop());
        stream = null;
      }

      if (audio) {
        const audioStream = await audio;
        audioStream.getTracks().forEach(track => track.stop());
        audio = null;
      }

      console.log(blob, 'blob here');

      // Create FormData to upload to Cloudinary

       const { signature, timestamp, folder } = await getSignature(storedUid);
       

      const formData = new FormData();
      formData.append('file', blob, `HelpMeOut_video_${new Date().getTime()}.webm`);
      formData.append('api_key', '247557432484292'); 
      formData.append('timestamp', timestamp);
      formData.append('signature', signature);
      formData.append('folder', folder);

      try {
        // Upload the video to Cloudinary
        
    const response = await fetch('https://api.cloudinary.com/v1_1/ddtbgrglm/video/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload video');
    }

    const result = await response.json();
    console.log('Upload success:', result);

    const videoUrl = result.secure_url;
    if (videoUrl) {
      const baseUrl = 'http://localhost:3000'; // Adjust as needed
      const videoPlaybackUrl = `${baseUrl}/playback?recording=${videoUrl}&filename=HMO_${result.public_id}.webm`;
      window.open(videoPlaybackUrl);
    }
        
      } catch (error) {
        console.error('Error during video upload or transcription:', error);
      }
    };
  }
}





async function recordVideo() {
  try {
    await navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: true,
      })
      .then((vidStream) => {
        cameraStream = vidStream;
        videoSource.srcObject = vidStream;
        videoSource.addEventListener('loadedmetadata', () => {
          videoSource.play();
        });
      });
    } catch (e) {
      console.log('Error occurred', e);
    }
  }
  
  function deactivateVideo() {
    if (!videoSource) return;
    let stream = videoSource.srcObject;
    let tracks = stream?.getTracks();
    typeof tracks !== 'undefined' && tracks?.forEach((track) => track.stop());
    videoSource.srcObject = null;
  }
  
  async function activateAudio() {
  try {
    await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false,
    })
    .then((stream) => {
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = function(event) {
        if (event.data.size > 0) {
          recordedChunks.push(event.data);
        }
      }
    })
  } catch (e) {
    console.log('no audio');
  }
}


function deleteMedia () {
  recordedChunks = [];
  // Clear the video element
  videoSource.srcObject = '';

  
  if (mediaRecorder && mediaRecorder.stream) {
    mediaRecorder.stream.getTracks().forEach((track) => track.stop());
  }
  videoContainer.style.display = 'none';
}

// function uuid(len = 5) {
//   let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghij012345678'.split('');
//   let id = '';
//   for (let i = 0; i < len; i++) {
//     const rand = Math.floor(Math.random() * char.length);
//     id += char[rand];
//   }
//   return 'HelpMeOut' + id;
// }




pauseBtn.addEventListener('click', (e) => {
  // e.currentTarget.disabled = isRecording; // Disable the button
  pauseBtn.style.background = '#4b4b4b';
  if (isRecording && pauseImg.src === 'https://i.ibb.co/6Z030k8/play-svgrepo-com-2.png') {
   // pauseBtn.classList.add('disabled');
    pauseBtn.style.background = '#4b4b4b';
    pauseBtn.style.paddingTop = '0.5vh';
    pauseImg.style.height = '2vh';
    pauseImg.style.width = '40%';
    pauseImg.style.margin = 'auto';
    pauseImg.src = 'https://i.ibb.co/0mbndK6/pause-1006-svgrepo-com.png';
    pauseImg.alt = 'pause';
  } else {
    pauseImg.style.height = '3vh';
    pauseImg.style.width = '40%';
    pauseImg.style.margin = 'auto';
    
    pauseImg.src = 'https://i.ibb.co/6Z030k8/play-svgrepo-com-2.png';
  }
  startRecording();
  
});

stopB.addEventListener('click', (e) => {
  
  if (isStopped) {
    stopB.style.background = '#4b4b4b';
  } else {
    stopB.style.background = '#ffffff';
  }
  setTimeout(() => {
    stopRecording();
  }, 1000); // Stop 
} )

videoBtn.addEventListener('click', async (e) => {
  videoBtn.style.background = '#4b4b4b';
  
  if (!isCamera) {
    alert('camera activated');
    isCamera = true;
    videoContainer.style.display = 'block';
    await recordVideo();
  } else {
    isCamera = false
    videoContainer.style.display = 'none';
    deactivateVideo();
  }
});

audioBtn.addEventListener('click', async (e) => {
  audioBtn.style.background = '#4b4b4b';
  await activateAudio();
});



trashImg.addEventListener('click', async (e) => {
  trash.style.background = '#ffffff';
  deleteMedia();
})

