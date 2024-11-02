import Link from "next/link";

export default function Users({ data }) {
  return (
    <ul>
      {data.map((item) => (
        <Link key={item.id} href={`/users/${item.id}`}>
          <li>{item.name}</li>
        </Link>
      ))}
    </ul>
  );
}
export async function getStaticProps() {
  const res = await fetch("http://localhost:3001/users/");
  const data = await res.json();
  return {
    props: { data },
  };
}
