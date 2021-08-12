import Image from "next/image";

const Trending = ({ image, title, authors, id }) => {
  const persons = authors.join(" , ");
  return (
    <div className="group relative flex flex-col p-3 shadow-md hover:border hover:border-gray-300 hover:rounded-lg hover:shadow-xl hover:scale-105 transition transform duration-300 ease-in">
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
          className="group-hover:opacity-20"
        />
      </div>
      <div className="space-y-3 mt-3">
        <h1 className="truncate text-center text-2xl font-thin group-hover:font-extralight">
          {title}
        </h1>
        <p className="text-center group-hover:hidden">{persons}</p>
      </div>

      <div className="absolute left-24 md:left-10 lg:left-20 top-40">
        <button className="bg-gray-900 text-white rounded-lg shadow-2xl py-2 px-14 mt-3 hidden group-hover:block">
          View
        </button>
      </div>
    </div>
  );
};

export default Trending;
