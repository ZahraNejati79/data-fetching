export default function Home({ data }) {
  // console.log("data", data);
  return (
    <div>
      <h3>salam</h3>
      <ul>
        {data.map((item) => (
          <li key={item}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // console.log("data", data);

  return {
    props: { data },
  };
}
