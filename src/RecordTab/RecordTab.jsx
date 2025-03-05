import React from 'react';
import Pause from '../assets/widget/pause.svg';
import Stop from '../assets/widget/stop.svg';
import Video from '../assets/popup-assets/Video.svg';
import Audio from '../assets/widget/audio.svg';
import Divider from '../assets/widget/divider.svg';
import Dividerv from '../assets/widget/dividerv.svg';
//import RecordRTC, {invokeSaveAsDialog} from 'recordrtc';
//import RecordComplete from '../RecordComplete/RecordComplete';
import './RecordTab.scss';
//import { useNavigate } from 'react-router';




const RecordTab = () => {

  // const [stream, setStream] = useState(null);
  // const [blob, setBlob] = useState(null);
  // //const [chunks, setChunks] = useState([]);
  // const refVideo = useRef(null);
  // const recorderRef = useRef(null);
  // //const navigate = useNavigate(); 

  // //const timeSlice = 2000;

    
  // const handleRecording = async () => {
  //   // const cameraStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  //   const mediaStream = await navigator.mediaDevices.getDisplayMedia({
  //     video: {
  //       width: 1920,
  //       height: 1080,
  //       frameRate: 30,
  //     },
  //     audio: false,
  //   });

  //   setStream(mediaStream);
   
  //   recorderRef.current = new RecordRTC(mediaStream, { type: 'video' });
  //   recorderRef.current.startRecording();
  // };
  // const handleRecordingV = async () => {
  //   // const cameraStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  //   const mediaStream = await navigator.mediaDevices.getDisplayMedia({
  //     video: {
  //       width: 1920,
  //       height: 1080,
  //       frameRate: 30,
  //     },
  //     audio: true,
  //   });

  //   setStream(mediaStream);
   
  //   recorderRef.current = new RecordRTC(mediaStream, { type: 'audio' });
  //   recorderRef.current.startRecording();
  // };

  // const handleStop = () => {
  //   recorderRef.current.stopRecording(() => {
  //     setBlob(recorderRef.current.getBlob());
      
      
      
      
  //   });
    
  // };
  
  //   const handlePause =() => {
  //       recorderRef.current.pauseRecording(() =>{
  //       setBlob(recorderRef.current.getBlob()); 
  //       })
  //   }
  

  // useEffect(() => {
  //   if (!refVideo.current) {
  //     return;
  //   }
  //   invokeSaveAsDialog(blob);
  //   // refVideo.current.srcObject = stream;
  // }, [stream, refVideo, blob]);

  return(
  <div id='recordTabComponent' className='controls' >
      <p className='time'>00:00:00</p>
      <div className='icon icnx 1cnz'><Dividerv/></div>
      <div className='icon icn icn1 '><Pause /></div>
      <div className='icon icn'><Stop /></div>
      <div className='icon icn'><Video /></div>
      <div className='icon icnz'><Audio /></div>
      <div className='icon icn2'><Divider/></div>
      {/* <>{blob && (
              <video
                  src={URL.createObjectURL(blob)}
                  controls
                  autoPlay
                  ref={refVideo}
                  style={{ width: '700px', margin: '1em' }}
              />
              )}</> */}
          
  </div>
 )
}
export default RecordTab;
// const ContainerR = document.createElement('div');
// document.body.appendChild(ContainerR)
// const root = createRoot(ContainerR);

// root.render(RecordTab);
