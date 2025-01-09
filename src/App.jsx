
import './App.css'


import { GrDocumentDownload } from "react-icons/gr";
import { useEffect, useState } from 'react';
import { Card } from './Card';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { WiDaySunny } from 'react-icons/wi';
import { RxMoon } from 'react-icons/rx';
import { LuMail } from 'react-icons/lu';


function App() {

  const [theme, setTheme] = useState('light');

  const getLocalStorage = () => {

    if (localStorage.getItem("theme") === null) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.setItem("theme", "dark");
      }
      else {
        localStorage.setItem("theme", "light");
      }
    }
    setTheme(localStorage.getItem("theme"));
  }
  useEffect(getLocalStorage, []);


  useEffect(() => {
    if (theme === 'dark' && !document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.toggle('dark')
      console.log(theme)
    }

    else {
      if (theme === 'light' && document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.toggle('dark')
        console.log(theme)
      }
    }
  }, [theme])


  const themeToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem("theme", "dark");
    }
    else {
      setTheme('light');
      localStorage.setItem("theme", "light")
    }
  }

  let twitterImgs = ['twitter1.png', 'twitter2.png', 'twitter3.png', 'twitter4.png', 'twitter5.png']
  let movieImgs = ['movie_battle2.png']
  let chessImgs = ['chess1.png', 'chess2.png']

  return (
    <>
      <div className="w-[100vw] bg-gray-50 text-black dark:bg-[rgb(10,12,30)] dark:text-white">
      
      <div className = 'm-auto w-full flex flex-col place-items-center p-2 pt-5 gap-1 bg-gray-50 dark:bg-[rgb(10,12,30)]'>

        <div className="flex flex-col gap-1 lg:flex-row lg:gap-6 place-items-center">

          <img className="w-40 rounded-full" src="headshot.jpg"/>
          
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
          hover:opacity-100 hover:cursor-pointer hover:text-gray-900
          dark:text-gray-300 dark:hover:text-white
          "
          >
            <GrDocumentDownload className=''/>
            <p className='font-bold -translate-y-full scale-50 group-hover:-translate-y-1 group-hover:scale-100 text-sm text-gray-900 text-opacity-0 group-hover:text-opacity-100 duration-500'>Resume</p>
          </div>

          <div className="group flex flex-col gap-3 place-items-center m-auto text-[40px] text-gray-700 opacity-80 
          hover:opacity-100 hover:cursor-pointer hover:text-gray-900
          dark:text-gray-300 dark:hover:text-white
          "
          >
           <FiGithub />
            <p className='font-bold -translate-y-full scale-50 group-hover:-translate-y-1 group-hover:scale-100 text-sm text-gray-900 text-opacity-0 group-hover:text-opacity-100 duration-500'>Github</p>
          </div>

          <div className="group flex flex-col gap-3 place-items-center m-auto text-[48px] text-gray-700 opacity-80 
          hover:opacity-100 hover:cursor-pointer hover:text-gray-900
          dark:text-gray-300 dark:hover:text-white
          "
          >
            <FiLinkedin />
            <p className='font-bold -translate-y-full scale-50 group-hover:-translate-y-1 group-hover:scale-100 text-sm text-gray-900 text-opacity-0 group-hover:text-opacity-100 duration-500'>Linkedin</p>
          </div>

          <div 
          onClick={themeToggle}
          className='w-10 h-10 rounded-md hover:bg-gray-300 place-items-center place-content-center hover:cursor-pointer'
          >

            <WiDaySunny className='hidden dark:block w-8 h-8 text-yellow-500'/>
            <RxMoon className='dark:hidden w-8 h-8 text-blue-600'/>
          </div>
        </div>
          
        
        
      </div>
      
      
      <div className="flex flex-col gap-[15px]">
        
        <div className="m-auto w-full pt-20 pb-20 p-5 text-center font-light text-lg xs:text-xl sm:text-2xl lg:text-3xl sm:w-[600px] md:w-[700px] lg:w-[800px] xl:w-[900px] 2xl:w-[1000px]">
          <p>
            I'm a versatile software engineering professional specializing in full stack web development. Check out my projects below!
          </p>
        </div>


        <div className='w-full mx-auto max-w-[800px] px-8 lg:px-12 grid grid-cols-1 xl:grid-cols-3 xl:max-w-[1600px] gap-20'>

          <Card imgs={twitterImgs} delay={6} title={"Twitter Clone"} desc={"Social media CRUD app, built from scratch using React & Ruby on Rails. Features user creation, posts, and various interactions."}/>

          <Card imgs={movieImgs} delay={6} title={"Movie Battle"} desc={"Multiplayer battle-royale style trivia game, inspired by cine2nerdle's battle mode. Supports 2-8 players. Coming soon!"}/>

          <Card imgs={chessImgs} delay={6} title={"Chess Game"} desc={"Play a full game of chess against yourself or the stockfish engine. Built from scratch using React, Javascript & the Phaser library."}/>
        
        </div>
        


        <div className='flex flex-col mx-auto mt-10 gap-6 md:mt-24 md:flex-row-reverse md:justify-between md:gap-0 md:w-[400px]'>

          <div className='flex flex-row gap-7 mx-auto md:m-0'>
            <a href="https://www.linkedin.com/in/andrewdwulf/">
              <FiLinkedin className='w-5 h-5 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:cursor-pointer'/>
            </a>
            <a href="https://github.com/andrew-wulf">
              <FiGithub className='w-5 h-5 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:cursor-pointer'/>
            </a>
            <a href="mailto:andrewdwulf@gmail.com">
              <LuMail className='w-5 h-5 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:cursor-pointer'/>
            </a>
          
          </div>

          <div className='flex flex-row gap-1 place-items-center pb-10
          text-sm text-gray-500 
          '>
            <p>&copy;</p>
            <p>2025</p>
            <a href="https://andrew-wulf-portfolio.com" onClick={() => {window.scrollTo(0,0)}} 
            className='align-middle hover:text-neutral-900 dark:hover:text-white hover:cursor-pointer'
            >
              andrew-wulf-portfolio.com</a>
          </div>
        </div>
        

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

    </>
  )
}

export default App
