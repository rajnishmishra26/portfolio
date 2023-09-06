//next image
import Image from "next/image";

//components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

//Framer Motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div
        className={
          "w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10"
        }
      >
        <div
          className={
            "text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto"
          }
        >
          {/* text */}
          <h1 className="h1">
            Transforming Idea <br /> Into{" "}
            <span className="text-accent">Digital Reality </span>
          </h1>
          {/* subtitile */}
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            I am a creative designer and developer, who aims to work with small
            businesses and marginalized communities to bring their passions to
            life. I offer both design and development services of web
            applications or websites
          </p>
        </div>
      </div>
      <div>image</div>
    </div>
  );
};

export default Home;
