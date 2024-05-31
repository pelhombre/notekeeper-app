import { Header, CreateNoteForm, NotesList, Footer } from "./components";
import { useNotes } from "./hooks";

function App() {
  const { notes, handleSetNotes } = useNotes();

  return (
    <>
      <Header heading="Notekeeper App" className="main-header" />
      <main className="main-content">
        <CreateNoteForm notes={notes} handleSetNotes={handleSetNotes} />
        <NotesList notes={notes} handleSetNotes={handleSetNotes} />
      </main>
      <Footer />
    </>
  );
}

export default App;