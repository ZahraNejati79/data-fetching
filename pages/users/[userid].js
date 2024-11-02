import { useRouter } from "next/router";
import React from "react";

export default function UsersDetails({ data }) {
  const router = useRouter();
  return (
    <div>
      {router.isFallback ? (
        <div>fallback true</div>
      ) : (
        <div>
          page
          {data.name} {data.email}
        </div>
      )}
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await res.json();
  const newData = data.slice(0, 4);

  const paths = newData.map((item) => ({
    params: { userid: item.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log("params", params);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userid}`
  );
  const data = await res.json();
  if (!data.name) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
