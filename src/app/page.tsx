import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Documental from "@/components/sections/Documental";
import Escena from "@/components/sections/Escena";
import Personajes from "@/components/sections/Personajes";
import PresentacionesEnVivo from "@/components/sections/PresentacionesEnVivo";
import Musica from "@/components/sections/Musica";
import Galeria from "@/components/sections/Galeria";
import Prensa from "@/components/sections/Prensa";
import SegundoCerebro from "@/components/sections/SegundoCerebro";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <Documental />
        <div className="section-divider" />
        <Escena />
        <div className="section-divider" />
        <Personajes />
        <div className="section-divider" />
        <PresentacionesEnVivo />
        <div className="section-divider" />
        <Musica />
        <div className="section-divider" />
        <Galeria />
        <div className="section-divider" />
        <Prensa />
        <div className="section-divider" />
        <SegundoCerebro />
      </main>
      <Footer />
    </>
  );
}
