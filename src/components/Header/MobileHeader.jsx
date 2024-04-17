import { NavBarItems } from ".";
import Header from "./Header";

export default function MobileHeader() {
  return (
    <div
      id="mobileMenu"
      className="absolute top-0 left-0 bg-black text-white  w-full h-full invisible opacity-0 transition-all duration-300"
    >
      <Header />

      <nav className="grid items-center border-t border-white/10">
        {NavBarItems.map((item) => (
          <a
            className="text-2xl py-1.5 rounded-md px-4 "
            href={item.href}
            key={item.href}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
}
