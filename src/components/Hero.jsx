import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="bg-emerald-100 py-16 md:py-24">
      <div className=" align-element grid md:grid-cols-2 items-center gap-8">
        <article className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider">
            I am Ashlyn
          </h1>
          <p className="mt-4 text-2xl md:text-3xl text-slate-700 capitalize tracking-wide">
            front-end developer
          </p>
          <p className="mt-2 text-md md:text-lg text-slate-700 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>
          <div className="flex justify-center md:justify-start gap-x-4 mt-4">
            <a href="#">
              <FaGithubSquare className="h-8 w-8 text-emerald-600 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="h-8 w-8 text-emerald-600 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-emerald-600 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:flex md:justify-end">
          <img src={heroImg} alt="hero image" className="h-80 lg:h-96" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
