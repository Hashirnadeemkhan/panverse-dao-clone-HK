import Logo from "/public/logo.png"
import Image from "next/image"
import Link from "next/link"
import Wrapper from "../shared/Wrapper"

const Header = () => {
  return (
    <header className="sticky top-0 z-10  bg-white">
    <Wrapper>
    <div className='flex justify-between py-5  items-center'>
        <div>
     <Image src={Logo} alt="logo" width={100} height={100}></Image>
        </div>
        <ul className='flex space-x-4 font-medium'>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/courses"}>Courses</Link></li>
        </ul>
    </div>
    </Wrapper>
    </header>
  )
}

export default Header
