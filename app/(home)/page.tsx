import Welcome from "@/ui/home/welcome";
import Services from "@/ui/home/services";
import Gallery from "@/ui/gallery/gallery";
import Contact from "@/ui/contact/contact";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-14 md:gap-20">
      <Welcome />
      <Services />
      {/* About Section */}
      <Gallery />
      <Contact />
    </div>
  );
}
