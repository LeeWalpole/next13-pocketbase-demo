async function getNote(username: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/profiles/records/${username}`,
  );
  const data = await res.json();
  return data;
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.username);

  return (
    <div>
      <h1>notes/{note.username}</h1>
      <div>
        <h3>{note.username}</h3>
        <h5>{note.username}</h5>
        <p>{note.display_name}</p>
      </div>
    </div>
  );
}
