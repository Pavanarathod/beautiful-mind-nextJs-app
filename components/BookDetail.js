import Image from "next/image";
import { useRouter } from "next/router";
const BookDetail = ({
  title,
  subtitle,
  authors,
  publisher,
  publishedDate,
  pageCount,
  printedPageCount,
  categories,
  language,
  country,
  listPrice,
  imageLinks,
  description,
  buyLink,
}) => {
  const persons = authors.join(" , ");

  const remooveTags = (str) => {
    str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
  };

  const router = useRouter();
  return (
    <section className="p-3 lg:flex shadow-xl bg-[whitesmoke]">
      <div className="text-center p-3 flex-[0.4]">
        <Image
          src={
            imageLinks?.smallThumbnail ||
            imageLinks?.thumbnail ||
            "http://books.google.com/books/content?id=RWCRDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
          }
          width={300}
          height={500}
          objectFit="contain"
        />
      </div>

      <div className="px-3 mt-3 flex-[0.6]">
        <div className="space-y-4">
          <h1 className="text-xl text-center font-bold truncate">{title}</h1>
          <h2>{subtitle}</h2>
          <h1 className="text-center font-semibold">{persons}</h1>

          <p className="font-medium">{remooveTags(description)}</p>
        </div>

        <div className="mt-5 flex items-center space-x-5">
          <h1 className="text-base font-semibold">Shared at: </h1>

          <div className="flex items-center space-x-4">
            <div>
              <Image
                src="/images/twitter.png"
                alt="fb"
                width={25}
                height={25}
                className="ml-3"
              />
            </div>
            <div>
              <Image
                src="/images/facebook.png"
                alt="fb"
                width={25}
                height={25}
              />
            </div>
            <div>
              <Image
                src="/images/instagram.png"
                alt="fb"
                width={25}
                height={25}
              />
            </div>
          </div>
        </div>

        <div className="mt-5 text-lg">
          <h1>publisher: {publisher}</h1>
          <h1>Initial Release: {publishedDate}</h1>
          <h1>Length: {pageCount}</h1>
          <h1>MRP: {listPrice?.amount}</h1>
          <h1>Language: {language}</h1>
        </div>

        <button className="w-full bg-green-600 hover:bg-green-700 font-bold text-white py-2 rounded-md mb-2 mt-5">
          Buy
        </button>
        <button
          onClick={() => router.push("/")}
          className="w-full bg-blue-600 py-2 rounded-md mb-2 text-white font-bold"
        >
          Home
        </button>
      </div>
    </section>
  );
};

export default BookDetail;
