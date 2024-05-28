import { NotesList, CreateNoteForm } from "./components";
import { Header } from "./components";
import { useNotes } from "./hooks";

function App() {
  const { notes, handleSetNotes } = useNotes();

  return (
    <>
      <Header heading="Notekeeper App" />
      <CreateNoteForm notes={notes} handleSetNotes={handleSetNotes} />
      <NotesList notes={notes} handleSetNotes={handleSetNotes} />
    </>
  );
}

export default App;