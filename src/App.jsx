
import './App.css'


import { FaGithub } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { GrDocumentDownload } from "react-icons/gr";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, ImageWithZoom, ButtonFirst, ButtonLast, DotGroup } from 'pure-react-carousel';
import { useState } from 'react';
import { Gallery } from './Gallery';


function App() {

  const [twitterAutoplay, setTwitterAutoplay] = useState(false);
  const [chessAutoplay, setChessAutoplay] = useState(false);
  const [movieAutoplay, setMovieAutoplay] = useState(false);

  const [twitterScale, setTwitterScale] = useState(100);
  const [chessScale, setChessScale] = useState(100);
  const [movieScale, setMovieScale] = useState(100);


 

  const reset = () => {}


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  let twitterImgs = ['twitter1.png', 'twitter2.png', 'twitter3.png', 'twitter4.png', 'twitter5.png']
  let movieImgs = ['movie_battle2.png']
  let chessImgs = ['chess1.png', 'chess2.png']

  return (
    <>
      <div className="w-full bg-zinc-200 text-black">
      
      <div className = 'm-auto w-full flex flex-col place-items-center p-2 pt-5 gap-1 border-gray-300 border-b-2 shadow-md bg-zinc-200'>

        <div className="flex flex-col gap-1 lg:flex-row lg:gap-6 place-items-center">

          <img className="w-40 rounded-full ring-1 ring-slate-700" src="headshot.jpg"/>
          
          <div className ='flex flex-col'>
            <h1 className="text-3xl lg:text-4xl">
              Andrew Wulf
            </h1>
            
            <h2 className="text-lg lg:text-xl">
              Full Stack Developer
            </h2>
            
            <div className="flex gap-1">
              <img className="w-5" src="pin.svg"/> 
              <h2 className="text-lg lg:text-xl">
                Chicago, IL
              </h2>
            </div>
            
          </div>
          
        </div>
        <div className="w-72 md:w-96 pl-6 pt-6 pr-6 grid grid-cols-3">
          
          <div className="group flex flex-col gap-3 place-items-center m-auto text-[36px] text-gray-700 opacity-80 
          hover:opacity-100 hover:cursor-pointer hover:text-gray-900"
          >
            <GrDocumentDownload className=''/>
            <p className='font-bold -translate-y-full scale-50 group-hover:-translate-y-1 group-hover:scale-100 text-sm text-gray-900 text-opacity-0 group-hover:text-opacity-100 duration-500'>Resume</p>
          </div>

          <div className="group flex flex-col gap-3 place-items-center m-auto text-[40px] text-gray-700 opacity-80 
          hover:opacity-100 hover:cursor-pointer hover:text-gray-900"
          >
            <FaGithub className=''/>
            <p className='font-bold -translate-y-full scale-50 group-hover:-translate-y-1 group-hover:scale-100 text-sm text-gray-900 text-opacity-0 group-hover:text-opacity-100 duration-500'>Github</p>
          </div>

          <div className="group flex flex-col gap-3 place-items-center m-auto text-[48px] text-gray-700 opacity-80 
          hover:opacity-100 hover:cursor-pointer hover:text-gray-900"
          >
            <AiOutlineLinkedin className=''/>
            <p className='font-bold -translate-y-full scale-50 group-hover:-translate-y-1 group-hover:scale-100 text-sm text-gray-900 text-opacity-0 group-hover:text-opacity-100 duration-500'>Linkedin</p>
          </div>

        </div>
          
        
        
      </div>
      
      
      <div className="flex flex-col gap-[15px]">
        
        <div className="m-auto w-full pt-20 pb-20 p-5 text-center font-light text-lg xs:text-xl sm:text-2xl lg:text-3xl sm:w-[600px] md:w-[700px] lg:w-[800px] xl:w-[900px] 2xl:w-[1000px]">
          <p>
            I'm a versatile software engineering professional specializing in full stack web development. Check out my projects below!
          </p>
        </div>


        <div className="grid w-[100vw] m-auto gap-8 sm:gap-10 grid-cols-1 lg:gap-12 xl:gap-14 2xl:gap-16">

        

          <div
            className="mx-auto flex flex-col sm:rounded-lg w-full sm:w-5/6 md:w-[640px] xl:w-1/2 2xl:w-[768px] 
            bg-white hover:bg-gray-50 hover:border-blue-200 hover:border hover:shadow-md hover:shadow-blue-100 hover:cursor-pointer 
            text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0" 

            onMouseEnter={() => {setTwitterAutoplay(true)}}
            onMouseLeave={() => {setTwitterAutoplay(false)}}
            >
            <a href="#!">
            
            <Gallery imgs={twitterImgs} autoPlay={twitterAutoplay} delay={6}/>

            </a>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight">Twitter Clone</h5>
              <p className="text-base">
                Social media CRUD app, built from scratch using React & Ruby on Rails.
              </p>
            </div>
            <div
              className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300 grid grid-cols-3">
              <a className="text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-md text-gray-600 hover:cursor-pointer hover:underline hover:text-blue-700">View on Github</a>
              <a className="text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-md text-gray-600 hover:cursor-pointer hover:underline hover:text-blue-700">Project Site</a>
              <a className="text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-md text-gray-600 hover:cursor-pointer hover:underline hover:text-blue-700">Image Gallery</a>
            </div>
          </div>

          <div
            className="mx-auto flex flex-col sm:rounded-lg w-full sm:w-5/6 md:w-[640px] xl:w-1/2 2xl:w-[768px]
            bg-white hover:bg-gray-50 hover:border-blue-200 hover:border hover:shadow-md hover:shadow-blue-100 hover:cursor-pointer 
            text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0"  
            
            onMouseEnter={() => {setMovieAutoplay(true)}}
            onMouseLeave={() => {setMovieAutoplay(false)}}
            >
            <a href="#!">
              <Gallery imgs={movieImgs} autoPlay={movieAutoplay} delay={6}/>
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight">Movie Battle</h5>
              <p className="text-base">
                Multiplayer battle-royale style trivia game, inspired by cine2nerdle's battle mode. Coming soon!
              </p>
            </div>
            <div
              className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300 grid grid-cols-3">
              <a className="text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-md text-gray-600 hover:cursor-pointer hover:underline hover:text-blue-700">View on Github</a>
              <a className="text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-md text-gray-600 hover:cursor-pointer hover:underline hover:text-blue-700">Project Site</a>
              <a className="text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-md text-gray-600 hover:cursor-pointer hover:underline hover:text-blue-700">Image Gallery</a>
            </div>
          </div>
        
          <div
            className="mx-auto flex flex-col sm:rounded-lg w-full sm:w-5/6 md:w-[640px] xl:w-1/2 2xl:w-[768px]
            bg-white hover:bg-gray-50 hover:border-blue-200 hover:border hover:shadow-md hover:shadow-blue-100 hover:cursor-pointer 
            text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0"  

            onMouseEnter={() => {setChessAutoplay(true)}}
            onMouseLeave={() => {setChessAutoplay(false)}}
            >
            <a href="#!">
              <Gallery imgs={chessImgs} autoPlay={chessAutoplay} delay={6}/>
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight">Chess Game</h5>
              <p className="text-base">
                Play a game of chess against yourself or the stockfish engine. Built from scratch using React, Javascript & the Phaser library.
              </p>
            </div>
            <div
              className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300 grid grid-cols-3">
              <a className="text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-md text-gray-600 hover:cursor-pointer hover:underline hover:text-blue-700">View on Github</a>
              <a className="text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-md text-gray-600 hover:cursor-pointer hover:underline hover:text-blue-700">Project Site</a>
              <a className="text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-md text-gray-600 hover:cursor-pointer hover:underline hover:text-blue-700">Image Gallery</a>
            </div>
          </div>
        
          
        </div>

        <div className='h-16 sm:h-32 content-end place-items-center pb-3'>
          <p onClick={() => {window.scrollTo(0,0)}} className='align-middle text-md text-gray-500 hover:underline hover:cursor-pointer'>Back to Top</p>
        </div>

      </div>



       {/* <h1 className="text-3xl text-center">My Tech Stack</h1>
  
        <div className="w-[90%] gap-[10%] sm:w-[600px] sm:gap-[50px] lg:w-[90%] xl:w-[1200px] xl:gap-[50px] m-auto grid grid-cols-2 lg:grid-cols-4">
  
  
          <div className="w-full grid grid-cols-5 bg-gray-300 rounded-lg">
  
            <div className="m-3 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex place-content-center bg-[rgba(255,232,99,0.92)]">
              <img src="nodejs.svg" className="w-10"/>
            </div>
            
            <div className="ml-8 sm:ml-5 lg:ml-3 h-12 pt-2 col-span-4 grid grid-cols-1">
              <h1 className=" text-lg sm:text-xl">Javascript</h1>
              <p className=" hidden text-xs sm:text-md sm:block">Core Language</p>
            </div>
            
          </div>
  
  
        
          <div className="w-full grid grid-cols-5 bg-gray-300 rounded-lg">
  
            <div className="m-3 w-12 h-12 rounded-lg flex place-content-center bg-[rgba(157,212,216,0.3)]">
              <img src="react.svg" className="w-10"/>
            </div>
            
            <div className="ml-3 h-12 pt-2 col-span-4 grid grid-cols-1">
              <h1 className="text-md lg:text-xl">React</h1>
              <p className="text-md">Front End Framework</p>
            </div>
            
          </div>
        
  
        
          <div className="w-full grid grid-cols-5 bg-gray-300 rounded-lg">
  
            <div className="m-3 w-12 h-12 rounded-lg flex place-content-center bg-[rgba(177,98,98,0.41)]">
              <img src="rails.svg" className="w-10"/>
            </div>
            
            <div className="ml-3 h-12 pt-2 col-span-4 grid grid-cols-1">
              <h1 className="text-md lg:text-xl">Ruby on Rails</h1>
              <p className="text-md">Back End Framework</p>
            </div>
            
          </div>
        
  
        
          <div className="w-full grid grid-cols-5 bg-gray-300 rounded-lg">
  
            <div className="m-3 w-12 h-12 rounded-lg flex place-content-center bg-[rgba(71,109,167,0.29)]">
              <img src="python.svg" className="w-10"/>
            </div>
            
            <div className="ml-3 h-12 pt-2 col-span-4 grid grid-cols-1">
              <h1 className="text-md lg:text-xl">Python</h1>
              <p className="text-md">Core Language</p>
            </div>
            
          </div>
        
  
        
          <div className="w-full grid grid-cols-5 bg-gray-300 rounded-lg">
  
            <div className="m-3 w-12 h-12 rounded-lg flex place-content-center bg-[rgba(66,155,177,0.36)]">
              <img src="tailwind.svg" className="w-10"/>
            </div>
            
            <div className="ml-3 h-12 pt-2 col-span-4 grid grid-cols-1">
              <h1 className="text-md lg:text-xl">Tailwind</h1>
              <p className="text-md">CSS Framework</p>
            </div>
            
          </div>
        
  
        
          <div className="w-full grid grid-cols-5 bg-gray-300 rounded-lg">
  
            <div className="m-3 w-12 h-12 rounded-lg flex place-content-center bg-[rgba(109,50,114,0.54)]">
              <img src="git.svg" className="w-10"/>
            </div>
            
            <div className="ml-3 h-12 pt-2 col-span-4 grid grid-cols-1">
              <h1 class="text-md lg:text-xl">Git</h1>
              <p class="text-md">Version Control</p>
            </div>
            
          </div>
        
  
        
          <div class="w-full grid grid-cols-5 bg-gray-300 rounded-lg">
  
            <div class="m-3 w-12 h-12 rounded-lg flex place-content-center bg-[rgba(85,199,94,0.25)]">
              <img src="supabase.svg" class="w-10"/>
            </div>
            
            <div class="ml-3 h-12 pt-2 col-span-4 grid grid-cols-1">
              <h1 class="text-md lg:text-xl">Supabase</h1>
              <p class="text-md">Backend database</p>
            </div>
            
          </div>
        
  
        
          <div class="w-full grid grid-cols-5 bg-gray-300 rounded-lg">
  
            <div class="m-3 w-12 h-12 rounded-lg flex place-content-center bg-[rgba(189,85,199,0.3)]">
              <img src="heroku.svg" class="w-9"/>
            </div>
            
            <div class="ml-3 h-12 pt-2 col-span-4 grid grid-cols-1">
              <h1 class="text-md lg:text-xl">Heroku</h1>
              <p class="text-md">App Deployment</p>
            </div>
            
          </div>
        
  
      </div> */}



    </div>
    </>
  )
}

export default App
