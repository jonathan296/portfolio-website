import { useState } from 'react'
import './App.css'
import BIRDS from 'vanta/dist/vanta.birds.min'
import { useEffect } from 'react'




function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    BIRDS({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0xfcfcfc,
      color1: 0xFFFB923C,
      color2: 0x0,
     
    })
  },[])
 
  return (
    <div id='vanta'>
      
      <div className='bg-orange-400 w-full opacity-95 flex flex-col items-center'>
        <div className=' py-5 flex'>
          <h1 className='font-Inter md:text-5xl text-2xl text-white '>JONATHAN ALVARENGA</h1>
          <h2 className='font-Inter md:text-2xl text-md font-extrabold text-gray-500'>WEB DEVELOPER</h2>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='sm:w-1/2 shadow-lg bg-white m-8 px-4 py-5 rounded-xl'>{/**About Me Card */}
          <h1 className='font-Inter font-black text-xl ml-5 mb-5'>ABOUT ME</h1>{/**Header*/}
          <div className='flex flex-row  align-center ml-11'>
            <div className='bg-gray-300 w-0.5 h-auto'></div>
            <div>
              <p className='mx-9 mb-2'>
                Hey there, I'm Jonathan, a recent graduate of a full-stack web development bootcamp, transitioning from a background in UX research. I'm thrilled about diving into the dynamic world of web development after spending time in UX. What excites me most is the creative potential inherent in web development—the ability to transform ideas into immersive experiences is incredibly captivating. I bring a unique perspective shaped by collaborating closely with UX designers and researchers, and I'm eager to contribute this outlook.</p>
              <p className='mx-9 mb-2'>
                My primary goal is to gain extensive team-oriented experience and expand my skill set further. I'm actively seeking opportunities in collaborative environments to contribute meaningfully and help craft exceptional digital solutions. If you're in need of a passionate web developer with a strong UX foundation, driven by collaborative success, let's connect! I'm excited about exploring new opportunities and making a positive impact.
              </p>
              </div>
          </div>
        </div>
        <div className='sm:w-1/2 bg-white shadow-xl'>
          <h1 className='font-Inter font-black text-xl ml-[61px] mt-14 mb-5'>SKILLS/ LANGUAGES</h1>
          <div className='flex flex-row  align-center ml-[80px]'>
            <div className='bg-gray-300 w-0.5 h-28'></div>
            <div className='ml-9'>
              <div className='flex flex-wrap gap-4'>
                  <div className="bg-white shadow-lg rounded-xl w-[100px] h-[100px] flex flex-col justify-center items-center">
                    <img className='h-20 w-20' src='\src\assets\react.svg'/>
                    <h2>React</h2>
                  </div>
                  <div className="bg-white shadow-lg rounded-xl w-[100px] h-[100px] flex flex-col justify-center items-center">
                    <img className='h-20 w-20' src='\src\assets\react.svg'/>
                    <h2>React</h2>
                  </div>
                  <div className="bg-white shadow-lg rounded-xl w-[100px] h-[100px] flex flex-col justify-center items-center">
                    <img className='h-20 w-20' src='\src\assets\react.svg'/>
                    <h2>React</h2>
                  </div>
                  <div className="bg-white shadow-lg rounded-xl w-[100px] h-[100px] flex flex-col justify-center items-center">
                    <img className='h-20 w-20' src='\src\assets\react.svg'/>
                    <h2>React</h2>
                  </div>
                  <div className="bg-white shadow-lg rounded-xl w-[100px] h-[100px] flex flex-col justify-center items-center">
                    <img className='h-20 w-20' src='\src\assets\react.svg'/>
                    <h2>React</h2>
                  </div>
              </div>
            </div>
         
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App
