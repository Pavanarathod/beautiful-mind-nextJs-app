import { useRouter } from "next/router";
import Head from "next/head";

const Results = ({ books }) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Beautiful Mind | Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>this is results</h1>
    </div>
  );
};

export default Results;

export const getServerSideProps = async (context) => {
  const findBook = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${context.query.term}+inauthor:keyes&key=${process.env.NEXT_PUBLIC_GOOGLE_KEY}`
  ).then((res) => res.json());

  const books = findBook.items;
  return {
    props: {
      books,
    },
  };
};
