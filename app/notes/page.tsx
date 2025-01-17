// import PocketBase from 'pocketbase';
import Link from 'next/link';


// export const dynamic = 'auto',
//   dynamicParams = true,
//   revalidate = 0,
//   fetchCache = 'auto',
//   runtime = 'nodejs',
//   preferredRegion = 'auto'


async function getNotes() {
  // const db = new PocketBase('http://127.0.0.1:8090');
  // const result = await db.records.getList('notes');
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
          return <Note key={note.id} note={note} />;
        })}
      </div>

    </div>
  );
}

function Note({ note }: any) {
  const { id, username } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div >
        <h2>{username}</h2>
     
      </div>
    </Link>
  );
}