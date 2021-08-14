import Head from "next/head";
import BookDetail from "../../components/BookDetail";

const BookDetails = ({ book }) => {
  const {
    title,
    subtitle,
    authors,
    publisher,
    publishedDate,
    pageCount,
    printedPageCount,
    categories,
    imageLinks,
    language,

    description,
  } = book.volumeInfo;

  const { country, listPrice, buyLink } = book.saleInfo;
  return (
    <div>
      <Head>
        <title>Beautiful Mind | Detail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="lg:max-w-7xl lg:m-auto lg:min-h-screen">
        <BookDetail
          title={title}
          subtitle={subtitle}
          authors={authors}
          publisher={publisher}
          publishedDate={publishedDate}
          pageCount={pageCount}
          printedPageCount={printedPageCount}
          categories={categories}
          imageLinks={imageLinks}
          language={language}
          country={country}
          listPrice={listPrice}
          buyLink={buyLink}
          description={description}
        />
      </main>
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
