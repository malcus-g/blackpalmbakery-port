import Welcome from "@/ui/home/welcome";
import Services from "@/ui/home/services";
import Gallery from "@/ui/gallery/gallery";
import Contact from "@/ui/contact/contact";
import About from "@/ui/about/about";
import Menu from "@/ui/menu/menu";
import Flyer from "@/ui/flyer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-30 md:gap-40">
      <Welcome />
      <Services />
      <Flyer />
      <About />
      <Menu />
      <Gallery />
      <Contact />
    </div>
  );
}
