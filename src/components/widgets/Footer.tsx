import React from 'react'
import Wrapper from '../shared/Wrapper'
import Image from 'next/image'
import Logo from "/public/logo.png"


const programData=["Web 3.0 and Metaverse Developer","Artificial Intelligence","Cloud-Native Computing","Ambient Computing and IoT","Genomics and Bioinformatics","Network Programmability and Automation"]
const pagesData =["Home","Quarter 1","Quarter 2","Quarter 3"]
const Footer = () => {
  return (
      <footer>
        
        <hr className='mt-10' />
        <Wrapper>
        {/* parent div  */}
        <div className='flex gap-x-20 text-slate-600 mb-20 flex-col md:flex-row gap-y-16 mt-20'>
            {/* left div */}
<div className='flex-1 basis-5/12'>
<Image src={Logo} alt='panaverse'width={120} height={120} ></Image>
<p className='mt-5'>Certified Web 3.0 and Metaverse Developer A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>

</div>


{/* middle div */}
<div className='flex-1 basis-3/12'>
<h3 className='font-bold text-lg'>Programs</h3>
{programData.map((item,i)=>(
    <div key={i} className='mt-2'>
        <p>{item}</p>

    </div>
))}

</div>


{/* right div */}

<div className='flex-1 basis-2/12'>
    <h3 className='font-bold text-lg'>Pages</h3>
    {pagesData.map((item,i)=>(
        <div key={i} className='mt-2'>
            <p>{item}</p>
        </div>
    ))}
</div>

        </div>

        </Wrapper>
    </footer>
  )
}

export default Footer
