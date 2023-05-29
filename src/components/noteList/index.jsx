import { NoteCard } from "./noteCard";

export const NoteList = ({ noteList, removeNoteFromNoteList }) => {
  return (
    <>
      {noteList.length > 0 ? (
        <ul>
          {noteList.map((note) => {
            return (
              <NoteCard
                key={note.id}
                note={note}
                removeNoteFromNoteList={removeNoteFromNoteList}
              />
            );
          })}
        </ul>
      ) : (
        <p className="cadaster">cadastre sua primeira nota</p>
      )}
    </>
  );
};
