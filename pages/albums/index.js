import React from "react";

export default function Albums({ albums }) {
  //   console.log("data", albums);
  return (
    <div>
      <h1>albums</h1>
      <ul>
        {albums.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  console.log("getServerSideProps");
  const res = await fetch("https://jsonplaceholder.typicode.com/albums/");
  const data = await res.json();

  return {
    props: { albums: data },
  };
}
