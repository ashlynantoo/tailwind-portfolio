import { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links } from "../data";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    showLinks
      ? (linksContainerRef.current.style.height = `${linksHeight}px`)
      : (linksContainerRef.current.style.height = `0px`);
  }, [showLinks]);

  return (
    <section className="bg-emerald-100">
      <nav className="align-element md:flex md:justify-between md:items-center">
        <div className="py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            Web<span className="text-emerald-600">Dev</span>
          </h1>
          <button
            className="md:hidden"
            onClick={() => {
              setShowLinks(!showLinks);
            }}
          >
            <FaBars className="w-6 h-6 text-emerald-600 hover:text-black" />
          </button>
        </div>
        <div
          ref={linksContainerRef}
          className="h-0 md:!h-auto overflow-hidden duration-300 ease-linear"
        >
          <div ref={linksRef}>
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <a
                  key={id}
                  href={href}
                  className="capitalize text-lg tracking-wide hover:bg-emerald-500 duration-300 block md:inline-block px-1 md:px-8 py-1"
                >
                  {text}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
