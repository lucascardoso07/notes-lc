import { StyledNoteNumber } from "./style";

export const NoteNumbers = ({ notesNumber, notesLenght }) => {
  return (
    <StyledNoteNumber>
      <span>
        Notas: <strong>{notesNumber}</strong>
      </span>
      <span>
        Caracteres: <strong>{notesLenght}</strong>
      </span>
    </StyledNoteNumber>
  );
};
