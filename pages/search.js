import Welcome from "../components/Welcome";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";
import BookList from "../components/BookList";
import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";

const Search = ({ searches }) => {
  const router = useRouter();
  const [searchInupt, setSearchInut] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    router.push({
      pathname: "/results",
      query: {
        term: searchInupt,
      },
    });
  };

  return (
    <main className="md:max-w-7xl sm:min-h-screen sm:m-auto">
      <Head>
        <title>Beautiful Mind | Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className="search__header">
          <div className="text-center sm:text-left">
            <Image
              src="/images/LogoBlack.png"
              alt="img"
              width={200}
              height={80}
              objectFit="contain"
              className="transition duration-700 ease-in-out"
            />
          </div>
          <div className="text-center mt-3 sm:text-left sm:flex-1 ml-20 sm:ml-0">
            <form className="flex items-center" onSubmit={onSubmit}>
              <input
                type="text"
                value={searchInupt}
                onChange={(e) => setSearchInut(e.target.value)}
                placeholder="Search"
                className="search__input"
              />
              <SearchIcon className="search__icon" />
            </form>
          </div>
        </div>
        <div className="p-2">
          <Welcome image="/images/AudioBook.png" />
        </div>
        <div>
          <h1 className="text-center text-2xl font-thin">Top Searches</h1>
        </div>
        <section className="card__container">
          {searches
            ?.slice(0, 8)
            .map(
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
      </section>
    </main>
  );
};

export default Search;

export const getStaticProps = async () => {
  const bookList = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=romance+inauthor:keyes&key=${process.env.NEXT_PUBLIC_GOOGLE_KEY}`
  ).then((res) => res.json());

  const searches = bookList.items;

  return {
    props: {
      searches,
    },
  };
};
