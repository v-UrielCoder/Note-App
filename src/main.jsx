import ReactDOM from 'react-dom/client'
import React from 'react';
import { NoteApp } from './NoteApp';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <NoteApp/>
    </React.StrictMode>
)