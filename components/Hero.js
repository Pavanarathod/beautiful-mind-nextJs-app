import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-[300px] lg:h-screen">
      <Image src={"/images/Img1.jpg"} layout="fill" objectFit="cover" />
    </div>
  );
};

export default Hero;
