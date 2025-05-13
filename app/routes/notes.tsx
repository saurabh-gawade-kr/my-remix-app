import NewNotes, {links as newNoteStyle} from "~/pages/NewNotes/NewNotes";

export default function notes(){
    return( <NewNotes/>)
}

export function links(){
    return [...newNoteStyle()]
}