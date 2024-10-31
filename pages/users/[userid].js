import React from "react";

export default function UsersDetails({ data }) {
  return (
    <div>
      {data.name} {data.email}
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await res.json();

  const paths = data.map((item) => ({
    params: { userid: item.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log("params", params);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userid}`
  );
  const data = await res.json();
  console.log("data", data);

  return {
    props: { data },
  };
}
