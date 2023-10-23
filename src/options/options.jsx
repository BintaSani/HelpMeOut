import React from 'react';
import {createRoot} from 'react-dom/client';
import '../popup/popup.scss'

const Test = (
    <div>
        <h1>Hello</h1>
    </div>
)
const Container = document.createElement('div');
document.body.appendChild(Container)
const root = createRoot(Container);

root.render(Test);