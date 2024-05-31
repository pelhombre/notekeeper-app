import { Header, CreateNoteForm, NotesList } from "./components";
import { useNotes } from "./hooks/useNotes.js";


function App() {
  const { notes, handleSetNotes } = useNotes();

  return (
    <>
      <Header heading="Notekeeper App" className="main-header" />
      <main className="main-content">
        <CreateNoteForm notes={notes} handleSetNotes={handleSetNotes} />
        <NotesList notes={notes} handleSetNotes={handleSetNotes} />
      </main>
    </>
  );
}

export default App;