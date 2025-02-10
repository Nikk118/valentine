import { useState ,useRef , useEffect } from 'react'
import { FaHeart } from "react-icons/fa";
import './App.css'
import gsap from "gsap"


function App() {

  const [yesButtons,setYesButtons]=useState(1)
  const [isAccept,setIsAccepted]=useState(false)
  const noButtonRef=useRef(null)
  const yesButtonsRef=useRef([])

  useEffect(() => {
    gsap.to(yesButtonsRef.current, {
      y: -40, 
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2
    });
  }, [yesButtons]);

  const handleNoClick=()=>{
    
    gsap.to(noButtonRef.current,{
      x:-Math.floor(Math.random()*200),
      y:-Math.floor(Math.random()*200),
      duration:0.1,
      ease:"bounce.inOut"
      
    })
    setYesButtons((prev) => prev + 1);
  }

  const mouseLeave=()=>{
    gsap.to(noButtonRef.current,{
      x:-Math.floor(Math.random()*200),
      y:-Math.floor(Math.random()*200),
      duration:0.1,
        ease:"bounce.inOut"
    })
  }

  const mouseEnter=()=>{
    gsap.to(noButtonRef.current,{
      x:Math.floor(Math.random()*200),
      y:Math.floor(Math.random()*200),
      duration:0.1,
      ease:"back.inOut"
    })
  }

  return (
   <>
    <div className=''>

      <div className='flex justify-center items-center m-8'>
        { 
          !isAccept&&<h1 className='text-5xl text-center font-bold text-black flex items-center'>Will You Be My Valentine ?
          <span className='ml-0.5'>
           <FaHeart color={"red"} size={40}/></span> </h1>
        }
        {
          isAccept&& <h1  className='text-5xl text-center font-bold text-black flex items-center'>yaayyy!! Lets go on a Date<span className='ml-0.5'>
           <FaHeart color={"red"} size={40}/></span></h1>
        }
      </div>
      <div className='flex justify-center my-5'>
        
          {
            isAccept&&<img src="https://media.tenor.com/RG_lIajbbtQAAAAi/milk-and-mocha.gif" alt="gif" className="w-50 h-50"/>
          }
        {
          !isAccept&& <img src="https://media.tenor.com/ZJ0t7DP3FjMAAAAi/milk-and-mocha-gif-mocha-makeing-love.gif" alt="gif" className="w-50 h-50" />
        }
      </div>
      
          
            {
              !isAccept&& Array.from({length:yesButtons}).map((_,index)=>(
                <button 
                ref={(el) => (yesButtonsRef.current[index] = el)}
                onClick={()=>setIsAccepted(true)}
                key={index}
                className="yes-btn bg-green-500 text-white px-4 py-2 rounded-lg font-semibold m-5 shadow-lg hover:bg-green-600 transition-all"
                >yes</button>
              ))
            }
            
           {
            !isAccept&& <button
            ref={noButtonRef}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            onClick={handleNoClick}
            className='bg-red-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-red-600 transition-all'
          >
            no</button>
           }
          </div>
   </>
  )
}

export default App
