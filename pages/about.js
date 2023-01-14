import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import '../vanill-till/vanill-till'

const About = () => {
  if (typeof window !== "undefined") {
    VanillaTilt.init(document.querySelector(".vanilla"), {
        max: 25,
        speed: 400
      });
      //It also supports NodeList
      VanillaTilt.init(document.querySelectorAll(".vanilla"));
    }
  return (
    <div>
        <Head>
        <title>About - MTS School</title>
        <meta name="description" content="mtsschool.com we provide better education" />
        <link rel="icon" href="/logo/favicon.png" />
      </Head>
    <div className='glass p-3 m-5'>
    <h1 className='glass-blur p-3 text-2xl font-semibold text-gray-700'>About MOTHER TERESA SENIOR SECONDARY SCHOOL BAHARAWANDA KALAN</h1>
<p className='m-3'>MOTHER TERESA SEC.BAHARAWANDA KALA was established in 1998 and it is managed by the Pvt. Unaided. It is located in Rural area. It is located in KHANDAR block of SAWAI MADHOPUR district of Rajasthan. The school consists of Grades from 1 to 12. The school is Co-educational and it have an attached pre-primary section. The school is Not Applicable in nature and is not using school building as a shift-school. Hindi is the medium of instructions in this school. This school is approachable by all weather road. In this school academic session starts in April.
         The school has Private building. It has got 9 classrooms for instructional purposes. All the classrooms are in good condition. It has 2 other rooms for non-teaching activities. The school has a separate room for Head master/Teacher. The school has Pucca boundary wall. The school has have electric connection. The source of Drinking Water in the school is Tap Water and it is functional. The school has 3 boys toilet and it is functional. and 2 girls toilet and it is functional. The school has a playground. The school has a library and has 369 books in its library. The school does not need ramp for disabled children to access classrooms. The school has 2 computers for teaching and learning purposes and all are functional. The school is not having a computer aided learning lab. The school is Not Provided providing mid-day meal.</p>
    <div className="flex justify-center items-center mb-20">
<Image className='vanilla' src={'/card/front.png'} width={500} height={300}/>
<Image className='vanilla' src={'/card/back.png'} width={500} height={300}/>
    </div>
    </div>
    </div>
  )
}

export default About
