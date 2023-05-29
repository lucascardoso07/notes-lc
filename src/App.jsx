import { useState } from "react";
import { Header } from "./components/header";
import { NoteCreateForm } from "./components/noteCreateForm";
import { NoteList } from "./components/noteList";
import { NoteNumbers } from "./components/noteNumbers";
import { v4 as uuidv4 } from "uuid";
import { StyledApp } from "./styles/styledApp";

function App() {
  const [noteList, setNoteList] = useState([]);

  const notesNumber = noteList.length;

  const notesLenght = noteList.reduce((previousValue, note) => {
    return previousValue + note.message.length;
  }, 0);

  const addNoteToNoteList = (formData) => {
    const newNote = { ...formData, id: uuidv4() };
    const newNoteList = [...noteList, newNote];
    setNoteList(newNoteList);
  };

  const removeNoteFromNoteList = (noteId) => {
    const newNoteList = noteList.filter((note) => note.id !== noteId);
    setNoteList(newNoteList);
  };

  return (
    <StyledApp>
      <Header />
      <div>
        <main className="container">
          <div>
            <NoteCreateForm addNoteToNoteList={addNoteToNoteList} />
          </div>
          <div className="list-section">
            <h2>Lista de Notas</h2>
            <NoteNumbers notesNumber={notesNumber} notesLenght={notesLenght} />
            <NoteList
              noteList={noteList}
              removeNoteFromNoteList={removeNoteFromNoteList}
            />
          </div>
        </main>
      </div>
    </StyledApp>
  );
}

export default App;
