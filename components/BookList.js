import { useRouter } from "next/router";
import Image from "next/image";

const BookList = ({ image, title, authors, id }) => {
  const persons = authors.join(" , ");
  const router = useRouter();

  const detailPage = () => {
    router.push(`/details/${id}`);
  };

  return (
    <div className="group booklist__container">
      <div className="text-center">
        <Image
          src={
            image?.thumbnail ||
            image?.smallThumbnail ||
            "http://books.google.com/books/content?id=RWCRDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
          }
          objectFit="contain"
          width={150}
          height={300}
          className="lg:group-hover:opacity-20"
        />
      </div>
      <div className="space-y-3 mt-3">
        <h1 className="truncate text-center text-2xl font-thin group-hover:font-extralight">
          {title}
        </h1>
        <p className="text-center lg:group-hover:hidden font-thin truncate">
          {persons}
        </p>
      </div>

      <div className="lg:absolute md:left-10 lg:left-20 lg:top-40">
        <button onClick={detailPage} className="boollist__container__button">
          View
        </button>
      </div>
    </div>
  );
};

export default BookList;
