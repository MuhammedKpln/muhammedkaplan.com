import ProfileImage from "@assets/profile.jpg";
import { useCallback } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

export default function Header() {
  const toggleMenu = useCallback(() => {
    document.querySelector("#mobileMenu").classList.toggle("opacity-0");
    document.querySelector("#mobileMenu").classList.toggle("invisible");
  }, []);

  return (
    <>
      <header className="pt-4 lg:pt-6 pb-6 lg:pb-8 flex items-center justify-between container mx-auto">
        <a className="flex gap-x-4 items-center" href="/">
          <img
            className="w-16 h-16 lg:h-24 lg:w-24 bg-white/10 rounded-full border border-white/20"
            src={ProfileImage.src}
            alt="qwe"
          />

          <div>
            <h1 className="text-lg lg:text-2xl font-bold">Muhammed Kaplan</h1>
            <h6 className="text-sm lg:text-base text-gray-500">Developer</h6>
          </div>
        </a>

        <div className="md:hidden">
          <button className="p-2" onClick={toggleMenu}>
            <HiOutlineMenuAlt2 className="w-6 h-6" />
          </button>
        </div>

        <nav className="gap-x-3 items-center hidden md:flex">
          <a className="text-base py-1.5 rounded-md px-4 " href="/blog">
            Blog
          </a>
          <a className="text-base py-1.5 rounded-md px-4 " href="/ekipmanlar">
            Ekipmanlar
          </a>
          <a className="text-base py-1.5 rounded-md px-4 " href="/bookmarks">
            Yer İmleri
          </a>
          <a className="text-base py-1.5 rounded-md px-4 " href="/anlar">
            Anlar
          </a>
        </nav>
      </header>
    </>
  );
}
