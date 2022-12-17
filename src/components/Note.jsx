import { useState } from "react";

export const Note = ({id ,contenido, onDeleteNote}) => {

    const [cheked, setCheked] = useState(false);
    
    const onCheked = () => {
        cheked? setCheked(false): onDeleteNote(id);
    }
    return(
        <>
            <div className="note-title">
                <h2 className="note-title">{contenido}</h2>
            </div>
            <div className="container-button-complete">
                <input 
                    type="checkbox" 
                    name="" 
                    id="note-state"
                    checked={cheked}
                    onChange={ onCheked }
                />
            </div>
        </>
    )
}
