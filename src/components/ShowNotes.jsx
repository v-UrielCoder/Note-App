import { Note } from "./Note";

export const ShowNotes = ({notas, onDeleteNote}) => {
    
    return (
        <>
            {notas.map((nota) => (
                <div key={nota.id} className="note" >
                    <Note 
                        key={nota.id} 
                        {...nota} 
                        onDeleteNote={onDeleteNote}
                    />
                </div>
            ))}
        </>
  )
}
