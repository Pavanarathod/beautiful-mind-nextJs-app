import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [navBar, handleNavBar] = useState(false);

  const handleChange = () => {
    if (window.scrollY > 100) {
      handleNavBar(true);
    } else {
      handleNavBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleChange);

    return () => window.removeEventListener("scroll", handleChange);
  }, []);

  return (
    <div
      className={`flex justify-center sm:items-center sm:justify-around sticky top-0 z-50 transition duration-700 ease-in-out bg-black ${
        navBar && "bg-white"
      }`}
    >
      <div>
        <div>
          {navBar ? (
            <Image
              src="/images/LogoBlack.png"
              alt="img"
              width={200}
              height={80}
              objectFit="contain"
              className="transition duration-700 ease-in-out"
            />
          ) : (
            <Image
              src="/images/LogoWhite.png"
              alt="img"
              width={200}
              height={80}
              objectFit="contain"
              className="transition duration-700 ease-in-out"
            />
          )}
        </div>
      </div>

      <div className="items-center space-x-5 hidden sm:inline-flex">
        <p
          className={`hover:bg-gray-300 cursor-pointer hover:text-black text-white rounded-full px-4 py-2 ${
            navBar && "border border-gray-300 shadow-lg text-black"
          }`}
        >
          About us
        </p>
        <p
          className={`hover:bg-gray-300 hover:text-black cursor-pointer text-white rounded-full px-4 py-2 ${
            navBar &&
            "border border-gray-300 shadow-lg text-black hover:bg-transparents"
          }`}
        >
          Search Books
        </p>
      </div>
    </div>
  );
};

export default NavBar;
