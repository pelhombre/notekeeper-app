import PropTypes from 'prop-types';
import { Note } from './Note';
import { UpdateNoteForm } from './UpdateNoteForm';
import { useUpdate } from '../hooks/useUpdate'; 

const NoteItem = ({ note, notes, handleSetNotes }) => {
  const { updatingNote, setUpdatingNote } = useUpdate(); 
  return (
    <div>
      {updatingNote ? (
        <UpdateNoteForm
          updatingNote={note}
          notes={notes}
          handleSetNotes={handleSetNotes}
          handleSetUpdate={setUpdatingNote}
        />
      ) : (
        <Note
          note={note}
          handleSetNotes={handleSetNotes}
          handleSetUpdate={setUpdatingNote}
        />
      )}
    </div>
  );
};

NoteItem.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    important: PropTypes.bool.isRequired,
  }).isRequired,
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      important: PropTypes.bool,
      status: PropTypes.string,
      dueDate: PropTypes.string,
    })
  ).isRequired,
  handleSetNotes: PropTypes.func.isRequired,
};

export default NoteItem;
