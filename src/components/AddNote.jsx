import { useState } from "react"
import { createNote } from "../helpers/createNote";

export const AddNote = ({ onAddNote }) => {
    const [id, setId] = useState(0);
    const [value, setValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        if(value.length > 2){
            let nuevaNota = createNote(id, value);
            onAddNote(nuevaNota);
            setId( id + 1);
            setValue('');
        } 
    }

    return(
        
        <form onSubmit={onSubmit} id="add-note">
            <div className={'container-add-title'}>
                <input onChange={ (e) => setValue(e.target.value) } type="text"
                    value={value}
                    autoComplete='off'
                    id="title"
                />
            </div>

            <div id="container-button-add-note">
                <button onSubmit={onSubmit} type="submit" id="button-add-note">Agregar nota</button>
            </div>

        </form>
    )
}