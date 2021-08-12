import Head from "next/head";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import Trending from "../components/Trending";

export default function Home({ trending }) {
  return (
    <div>
      <Head>
        <title>Beautiful Mind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <Hero />
      <main className="max-w-7xl p-3 m-auto">
        <section>
          <Welcome
            image="/images/Books.jpg"
            header="World's No:1 Online Book Shop"
            info="Find you'r favourite Book"
            buttonText="Search Books"
          />
        </section>

        <h1 className="text-center text-3xl font-thin mt-3">Trending Books</h1>
        <section className="space-y-3 mt-5 p-5 sm:space-y-0 sm:grid md:grid-cols-3 lg:grid-cols-4 gap-3">
          {trending
            .slice(0, 8)
            .map(
              ({ id, volumeInfo: { title, authors, imageLinks } }, index) => (
                <Trending
                  key={index}
                  title={title}
                  id={id}
                  authors={authors}
                  image={imageLinks}
                />
              )
            )}
        </section>
        <section className="mt-16">
          <Welcome
            image="/images/Students.jpg"
            header="Top Books for Students"
            info="Find All Books Related to School and Collage"
            buttonText="Find"
            right={true}
          />
        </section>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const bookList = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=planet+inauthor:keyes&key=${process.env.GOOGLE_KEY}`
  ).then((res) => res.json());

  const trending = bookList.items;

  return {
    props: {
      trending,
    },
  };
};
