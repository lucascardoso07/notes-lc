import { StyledCardList } from "./style";

export const NoteCard = ({ note, removeNoteFromNoteList }) => {
  return (
    <StyledCardList>
      <h3>{note.title}</h3>
      <p>{note.message}</p>
      <button onClick={() => removeNoteFromNoteList(note.id)}>Excluir</button>
    </StyledCardList>
  );
};
