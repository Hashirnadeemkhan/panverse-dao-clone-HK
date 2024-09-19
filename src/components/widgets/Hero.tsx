import Wrapper from "../shared/Wrapper";
import Image from "next/image"
import HeroPoster from "@/assets/images/hero-poster.webp"




const Hero = () => {
  return (
    <section className="bg-red-200">
    <Wrapper>
        <div>
      <h4 className="">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
      <h1>Certified Web 3.0 and Metaverse Developer</h1>
      <p>A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>
      <p>Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</p>
      <button>Learn More</button>
    </div>
    <div>
  <Image src={HeroPoster} alt="hero" height={100} width={100}></Image>
    </div>
    </Wrapper>
   </section>
  )
}

export default Hero
