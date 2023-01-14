import Head from 'next/head'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const success_contact_form = () => toast("SUCCESS 🎉")
  // toast.success('🦄 Wow so easy!', {
  //   position: "top-left",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   });
  if (typeof window !== "undefined") {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzSa1f694xg5tFLeiWco0b2X8Ork5JgKnnFCbeFgH80a6hnlONHvP1Wh8KCXsGnZ5_Mcw/exec'
  const form = document.forms['contact']
  if(form){
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => success_contact_form())
      .catch(error => console.error('Error!', error.message))
  })
}
}
  return (
    <div>
        <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
      <Head>
        <title>MTS School</title>
        <meta name="description" content="mtsschool.com we provide better education" />
        <link rel="icon" href="/logo/favicon.png" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <div>
        <div className="flex flex-wrap justify-center m-3 space-x-3">
          <div className="p-3 flex flex-col glass-blur text-center">
            <Image src="/icons/stundent.png" width={100} height={100} />
            <p className='threed glass p-1 text-3xl'>700+</p>
          </div>
          <div className="p-3 flex flex-col glass-blur text-center">
            <Image src="/icons/teacher.png" width={100} height={100} />
            <p className='threed glass p-1 text-3xl'>15+</p>
          </div>
          <div className="p-3 flex flex-col glass-blur text-center">
            <Image src="/icons/school.png" width={100} height={100} />
            <p className='threed glass p-1 text-3xl'>2</p>
          </div>
          <div className="container mt-2">
            <h1 className='text-white text-4xl varela'>Arts</h1>
            <div className="flex flex-wrap justify-center text-center">
              <div className="card z-50">
                <div className="content">
                  <h2>01</h2>
                  <h3>HISTORY</h3>
                  <a href="https://en.wikipedia.org/wiki/History" target="_blank">Read More</a>
                </div>
              </div>
              <div className="card">
                <div className="content">
                  <h2>02</h2>
                  <h3>HINDI LITERATURE</h3>
                  <a href="https://en.wikipedia.org/wiki/Hindi_literature" target="_blank">Read More</a>
                </div>
              </div>
              <div className="card">
                <div className="content">
                  <h2>03</h2>
                  <h3>GEOGRAPHY</h3>
                  <a href="https://en.wikipedia.org/wiki/Geography" target="_blank">Read More</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div>
        <h1 className='text-white text-center text-4xl w-full varela'>Facilities</h1>
        <div className="glass-blur flex flex-wrap p-2 justify-center items-center">
          <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>Medium: Hindi</h1>
          </div>
          <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>Medium: English</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'> Pre Primary Section Available</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>Board for ClassName 10th RBSE</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>Board for ClassName 12th RBSE</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>ClassNamees: From ClassName 1 to ClassName 12</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>Total Teachers: 15+</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>Male Teachers: 10+</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'> Female Teacher: 2+</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>Electricity</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>Library</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>Playground</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>Drinking Water</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image src="/icons/cross.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>Meal Provided</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>Contact Teacher</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>Teacher Teaching with Fun</h1>
          </div>  <div className="glass m-3 bg-slate-900 flex justify-center p-3 items-center w=full">
            <Image src="/icons/check.png" width={40} height={40} />
            <h1 className='ml-1 bungee text-white'>Students Motivated</h1>
          </div>
        </div>
      </div>
      <div className="linear-gradient-card-vala p-5">
        <div className="wrapper flex items-center justify-center p-1">
          <Image src="/ceo.png" className='rounded-full' width={100} height={100} />
          <h1 className='ml-5 ubuntu text-xl font-semibold'>"We provide better education. never see money for study"</h1>
        </div>
      </div>
      <div className="flex justify-center linear-gradient-card-vala items-center p-10">
        <div className="wrapper w-full flex md:flex-nowrap flex-wrap justify-center md:justify-start items-center md:p-4 p-1">
          <div className="ml-5 md:w-1/2" >
            <div className="bg-gray-800 h-14  p-2  w-20 rounded-lg">
              <h1 className='text-4xl font-bold threed  text-white'>MST</h1>
            </div>
            <h2 className='text-4xl font-semibold mt-3 Josefin'>MTS SCHOLARSHIP TEST</h2>
            <p className='ubuntu text-xl mt-3'>You are intelligent but you have less money to pay the full fee. Intoduce MST. MST is a scholarship test which has to be given before taking admission. If you are take good marks in MST you change to get 50% Scholarship</p>
          </div>
          <div className="md:ml-40">
            <Image src="/icons/scholarship.webp" className='rounded-sm' width={300} height={300} />
          </div>
        </div>
      </div>
      <div className="flex justify-center linear-gradient-card-vala items-center p-5">
        <div className="wrapper w-full flex items-center p-1">
          <Image src="/bus.jpg" className='rounded-sm' width={1000} height={700} />
          <h1 className='ml-5 ubuntu text-xl font-semibold'>"Here bus sevice available. many villages in bus pickup and drop students. Good Bus Driver in our bus service"</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center linear-gradient-contact-vala items-center p-5">
        <div className="wrapper">
          <header>Send us a Message</header>
          <form id="contact">
            <div className="dbl-field">
              <div className="field">
                <input required type="text" name="name" placeholder="Enter your name" />
                <img src="/icons/user.png" />
              </div>
              <div className="field">
                <input required type="email" name="email" placeholder="Enter your email" />
                <img src="/icons/email.png" />
              </div>
            </div>
            <div className="message">
              <textarea required
                placeholder="Write your message"
                name="message"
                defaultValue={""}
              />
              <img src="/icons/message.png" />

            </div>
            <div className="button-area">
              <button type="submit">Send Message</button>
              <span />
            </div>
          </form>
        </div>
{/* <iframe className='-mb-36' src="https://docs.google.com/forms/d/e/1FAIpQLSf4yBDfigXCVt2krcd91Dz7Emxw9NPvXA0okDJZ23e4RRFU3g/viewform?embedded=true" width="640" height="947" frameBorder="0" marginheight="0" marginWidth="0"></iframe> */}
        <div className="glass-blur p-1 text-gray-800 mb-24  flex justify-center items-center">
          <p>© 2022 mtsschool.com — All Rights Reserved</p>
          <div className="ml-4 flex">
            <a className='m-1 hover:scale-110 transition-all' href="https://twitter.com/mtsschool1998">
              <img src="/icons/twitter.png" width={30} />
            </a>
            <a className='m-1 hover:scale-110 transition-all' href="https://www.facebook.com/profile.php?id=100085838620140">
              <img src="/icons/facebook.png" width={30} />
            </a>
            <a className='m-1 hover:scale-110 transition-all' href="https://www.instagram.com/mtsschool1998/">
              <img src="/icons/instagram.png" width={30} />
            </a>
            <a className='m-1 hover:scale-110 transition-all' href="https://www.youtube.com/channel/UCMXVcZ5OvOuPoC0Ty8OzJcw/videos">
              <img src="/icons/youtube.png" width={30} />
            </a>
          </div>
        </div>
      </div>
      <ToastContainer
position="top-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    </div>
  )
}
