// import PocketBase from 'pocketbase';
import Link from 'next/link';


import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');


async function getNotes() {
  const db = new PocketBase('http://127.0.0.1:8090');
  const result = await db.records.getList('profiles');
  const res = await fetch('http://127.0.0.1:8090/api/collections/profiles/records', { cache: 'no-store' });
  const data = await res.json();
  return data?.items as any[];
}



export default async function NotesPage() {
  const notes = await getNotes();

  return(
    <div>
      <h1>Notes</h1>
      <div>
        {notes?.map((note) => {
          return <Note key={note.username} note={note} />;
        })}
      </div>
 
    </div>
  );
}



function Note({ note }: any) {
  const { username, display_name } = note || {};

  return (
    <Link href={`/notes/${username}`}>
      <div>
        <h2>{display_name}</h2>
        <h5>{username}</h5>
      </div>
    </Link>
  );
}
