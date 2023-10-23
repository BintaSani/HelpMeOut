import React from 'react';
import {createRoot} from 'react-dom/client';
import Logo from '../assets/popup-assets/Logo.svg';
import Setting from '../assets/popup-assets/setting.svg';
import Cancel from '../assets/popup-assets/Cancel.svg';
import Tv from '../assets/popup-assets/Tv.svg';
import Copy from '../assets/popup-assets/Copy.svg';
import RecordScreen from '../assets/popup-assets/Video.svg';
import Audio from '../assets/popup-assets/Microphone.svg';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import './popup.scss';

const Test = (
    <div className='pop'>
        <div className='head'>
                <div>
                    <Logo/>
                </div>
                <div className='cont'>
                    <div><Setting/></div>
                    <div><Cancel/></div>
                </div>
            </div>
            <p className='description'>This extension helps you record and share help videos with ease.</p>
            <div className='cont1'>
                <div className='tv'><Tv/></div>
                <div className='copy'><Copy/></div>
            </div>
            <div className='options'><div className='icons'><div className='cont'><RecordScreen /></div><p className='c'>Camera</p></div><ToggleSwitch label="record"/></div>
            <div className='options'><div className='icons'><div className='cont'><Audio/></div><p className='p'>Audio</p></div><ToggleSwitch label="audio"/></div>
            <div className='start'  >
                
                <p>Start recording</p>
                
                
            </div>
    </div>
)
const Container = document.createElement('div');
document.body.appendChild(Container)
const root = createRoot(Container);

root.render(Test);