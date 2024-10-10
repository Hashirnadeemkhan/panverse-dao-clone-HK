import Hero from "@/components/widgets/Hero";
import CoreTracks from "@/components/widgets/CoreTracks";
import SpecializedTracks from "@/components/widgets/SpecializedTracks";
import OutCome from "@/components/widgets/OutCome";
import Footer from "@/components/widgets/Footer";


export default function Home() {
  return (
    <>
      <main>
      <Hero />
      <CoreTracks/>
      <SpecializedTracks/>
      <OutCome/>
      <Footer/>

      </main>

    </>
  );
}

