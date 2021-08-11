import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-[300px] lg:h-screen">
      <Image
        src={
          "https://cloudfront.penguin.co.in/wp-content/uploads/2021/05/Hero-Banner-Web-02.png" ||
          "/images/Hero.jpg"
        }
        layout="fill"
        objectFit="cover"
      />

      <div className="hidden lg:block absolute left-52">
        <div>
          <Image
            src="/images/IntroTwo.svg"
            alt="Img"
            objectFit="contain"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
