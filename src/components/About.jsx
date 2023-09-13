import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section id="about" className="bg-white py-12 md:py-16">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <img src={aboutSvg} alt="about image" className="w-full h-64" />
        <article>
          <SectionTitle text="about me" />
          <p className="text-slate-600 mt-8 leading-loose text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
            exercitationem asperiores a provident magni blanditiis qui tempore
            dolorum porro aperiam! Debitis excepturi nam harum consequatur!
            Itaque nulla, sapiente soluta nesciunt totam, atque et tempore esse,
            illum similique aut delectus.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
