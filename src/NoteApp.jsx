import React, { useState } from 'react'
import { AddNote } from './components/AddNote'
import { ShowNotes } from './components/ShowNotes';

export const NoteApp = () => {
    const [notas, setNotas] = useState([]);

    const onAddNote = ( nota ) => {
        setNotas([nota, ...notas])
    }

    const onDeleteNote = ( idDeleteNote ) => {
        const newNotas = notas.filter( note => note.id != idDeleteNote)
        console.log(newNotas);

        setNotas(newNotas)
    }

    return (
        <>
            <div className='container-main'>
                <div id='header'>
                    <header>
                        <h1>Note App</h1>
                    </header>
                </div>
                <div id='container-form-add-note'>
                    <AddNote onAddNote={ onAddNote }/>
                </div>

                <div id='container-notes'>
                    <ShowNotes 
                        notas={notas}
                        onDeleteNote={onDeleteNote} 
                    />
                </div>
            </div>
        </>
    )
}

