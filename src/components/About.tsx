import { useEffect } from "react";
import lottie from "lottie-web";

const About = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById("lottie-container") as HTMLElement,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/about-animation.json", // Reemplaza con la ruta de tu animación
    });
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center min-h-screen p-6 bg-primary">
      {/* Contenedor de la animación */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div id="lottie-container" className="w-full h-full max-w-lg"></div>
      </div>

      {/* Contenedor del texto */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-left p-6">
        <h1 className="text-4xl font-bold text-mark mb-4">About Us</h1>
        <p className="text-lg text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </section>
  );
};

export default About;
