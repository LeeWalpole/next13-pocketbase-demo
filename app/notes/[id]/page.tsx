
async function getNote(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/profiles/records/${noteId}`,
  );
  const data = await res.json();
  return data;
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);

  return (
    <div>
      <h1>notes/{note.id}</h1>
        <h3>{note.username}</h3>
    </div>
  );
}