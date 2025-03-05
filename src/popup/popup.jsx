
import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import Logo from '../assets/popup-assets/Logo.svg';
import Setting from '../assets/popup-assets/setting.svg';
import Cancel from '../assets/popup-assets/Cancel.svg';
import Tv from '../assets/popup-assets/Tv.svg';
import Copy from '../assets/popup-assets/Copy.svg';
import RecordScreen from '../assets/popup-assets/Video.svg';
import Audio from '../assets/popup-assets/Microphone.svg';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';


import './popup.scss';

const Popup = () => {
  const [stream, setStream] = useState(null);
  

  const activateVideo = async () => {
    const activateV = await navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: true,
      }); 
      setStream(activateV)
    console.log('video active');
    alert('video activated');
  }
  const activateAudio = async () => {
    const activateA = await navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: false,
      });
      setStream(activateA);
      setStream(activateA);
      console.log('audio active');
      alert('audio activated');
      
  }
 
  const getTabId = () => {
   
    
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0] && tabs[0].id) {
        const tabId = tabs[0].id;
        console.log(tabId);
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          files: ['contentScript.js']
         
        });
      
    } 
      else{
        console.log('Error: Unable to get the tabId');
      }
    });
    
  };


  return (
    <div className='pop'>
      <div className='head'>
        <div>
          <Logo />
        </div>
        <div className='cont'>
          <div>
            <Setting />
          </div>
          <div>
            <Cancel />
          </div>
        </div>
      </div>
      <p className='description'>This extension helps you record and share help videos with ease.</p>
      <div className='cont1'>
        <div className='tv'>
          <Tv />
        </div>
        <div className='copy'>
          <Copy />
        </div>
      </div>
      <div className='options'>
        <div className='icons'>
          <div className='cont'>
            <RecordScreen />
          </div>
          <p className='c'>Camera</p>
        </div>
        <ToggleSwitch label='record' onClick={() => activateVideo}/>
      </div>
      <div className='options'>
        <div className='icons'>
          <div className='cont'>
            <Audio />
          </div>
          <p className='p'>Audio</p>
        </div>
        <ToggleSwitch label='audio' onClick={() => activateAudio} />
      </div>
      <div className='start' onClick={getTabId}>
        <p>Start recording</p>
      </div>
    </div>
  );
};

const Container = document.createElement('div');
document.body.appendChild(Container);
const root = createRoot(Container);

root.render(<Popup />);
