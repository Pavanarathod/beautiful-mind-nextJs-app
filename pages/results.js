import Head from "next/head";
import BookList from "../components/BookList";

const Results = ({ books }) => {
  return (
    <div>
      <Head>
        <title>Beautiful Mind | Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="lg:max-w-7xl lg:m-auto lg:min-h-screen">
        <section className="card__container">
          {books?.map(
            ({ id, volumeInfo: { title, authors, imageLinks } }, index) => (
              <BookList
                key={index}
                title={title}
                id={id}
                authors={authors}
                image={imageLinks}
              />
            )
          )}
        </section>
      </main>
    </div>
  );
};

export default Results;

export const getServerSideProps = async (context) => {
  const findBook = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${context.query.term}+inauthor:keyes&key=${process.env.GOOGLE_KEY}`
  ).then((res) => res.json());

  const books = findBook.items;
  return {
    props: {
      books,
    },
  };
};
