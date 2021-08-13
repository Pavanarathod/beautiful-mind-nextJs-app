import Head from "next/head";

const BookDetails = ({ book }) => {
  return (
    <div>
      <Head>
        <title>Beautiful Mind | Detail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Book details....</h1>
    </div>
  );
};

export default BookDetails;

export const getServerSideProps = async (context) => {
  const book = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${context.params.id}`
  ).then((res) => res.json());

  return {
    props: {
      book,
    },
  };
};
