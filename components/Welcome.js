import Image from "next/image";

const Welcome = ({ image, header, info, buttonText, right }) => {
  return (
    <div className="relative h-96 mt-5 p-5">
      <Image
        src={image}
        layout="fill"
        objectFit="cover"
        className="rounded-md shadow-2xl"
      />

      <div
        className={
          right
            ? "absolute space-y-4 right-60 top-16 text-right"
            : "absolute top-14 lg:left-56 lg:top-16 space-y-4"
        }
      >
        <h1 className="text-3xl font-semibold">{header}</h1>
        <p className="text-lg font-medium">{info}</p>
        <button className="button">{buttonText}</button>
      </div>
    </div>
  );
};
// absolute top-14 lg:left-56 lg:top-16 space-y-4
export default Welcome;
