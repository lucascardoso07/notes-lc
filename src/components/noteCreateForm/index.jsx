import { useState } from "react";
import { StyledForm } from "./style";

// eslint-disable-next-line react/prop-types
export const NoteCreateForm = ({ addNoteToNoteList }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const submit = (event) => {
    event.preventDefault();
    const formData = { title, message };
    addNoteToNoteList(formData);
  };

  return (
    <StyledForm>
      <h2>cadastre a sua nota</h2>
      <form onSubmit={submit}>
        <input
          type="text"
          value={title}
          placeholder="digite o titulo..."
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          value={message}
          placeholder="digite sua nota..."
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>
        <button type="submit">Criar Nota</button>
      </form>
    </StyledForm>
  );
};
