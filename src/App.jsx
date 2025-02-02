
import './App.css'


import { GrDocumentDownload } from "react-icons/gr";
import { useEffect, useState } from 'react';
import { Card } from './Card';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { WiDaySunny } from 'react-icons/wi';
import { RxMoon } from 'react-icons/rx';
import { LuMail } from 'react-icons/lu';
import { Modal } from './Modal';
import { PiMapPinFill } from 'react-icons/pi';
import { Contact } from './tw_components';



function App() {

  const [theme, setTheme] = useState('light');

  const [modalImg, setModalImg] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);


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



  let projectData = {
    twitter: {
      title: "Twitter Clone",
      desc: "Social media CRUD app. Features user creation, posts, and various interactions.",
      imgs: ['twitter1.png', 'twitter2.png', 'twitter3.png', 'twitter4.png', 'twitter5.png'],
      tech: ['Ruby on Rails', 'React.JS', 'Supabase', 'Heroku'],
      repo: 'https://github.com/andrew-wulf/twitter-clone-frontend',
      site: 'https://twitter-clone-frontend-q1pw.onrender.com/'
    },
    movieBattle: {
      title: "Movie Battle",
      desc: "Multiplayer battle-royale style trivia game, inspired by cine2nerdle's battle mode. Supports 2-8 players. Coming soon!",
      imgs: ['movie_battle2.png'],
      tech: ['React.JS', 'Tailwind', 'Socket.IO', 'Express.JS', 'Heroku'],
      repo: 'https://github.com/andrew-wulf/movie_battle',
      site: 'https://movie-battle.onrender.com/'
    },
    chess: {
      title: "Chess Game",
      desc: "Play a full game of chess against yourself or the stockfish engine.",
      imgs: ['chess1.png', 'chess2.png'],
      tech: ['Phaser', 'React.JS'],
      repo: 'https://github.com/andrew-wulf/chess',
      site: 'https://chess-hfx7.onrender.com'
    },
  }

  let techStack = {
    'React': ['react.svg', 'Javascript library'],
    'Ruby on Rails': ['rails.svg', 'Web app framework'],
    'Tailwind': ['tailwind.svg', 'CSS framework'],
    'Vite': ['vite.svg', 'Javascript build tool'],
    'Python': ['python.svg', 'Programming language'],
    'PostgreSQL': ['postgresql.svg', 'Database system']

  }

  const updateModal = (img) => {
    setModalImg(img);
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false);
  }

  const projectScroll = () => {
    console.log(1)
    const element = document.getElementById("cards");
    element.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }



  return (
    <>
      <div className="relative isolate z-10 min-w-[380px] flex flex-col w-full bg-gray-50 text-black dark:bg-[rgb(10,12,30)] dark:text-white ">

        <div className="hidden md:absolute top-[420px] md:top-[360px] md:right-[55%] md:-z-10 md:mr-10 md:block md:transform-gpu md:blur-3xl" aria-hidden="true">
            <div className="aspect-[1000/700] md:w-[60.5625rem] bg-gradient-to-tr from-[#f0aaf0] to-[#817be2] opacity-20 dark:opacity-10 dark:from-[#7a457a] dark:to-[#3c3a9e]" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}></div>
        </div>
        <div className="absolute top-[460px] left-[60%] blur-xl md:top-[500px] md:left-[55%] -z-10 -translate-x-1/2 transform-gpu md:blur-3xl md:ml-16 md:translate-x-0" aria-hidden="true">
            <div className="opacity-0 aspect-[900/500] md:aspect-[1000/560] w-[600px] md:w-[68.5625rem] bg-gradient-to-tr from-[#9591ec] to-[#f55ef5] md:opacity-20 dark:opacity-10 dark:from-[#7a457a] dark:to-[#3c3a9e]" style={{clipPath: 'polygon(31% 6%, 39% 34%, 57% 50%, 70% 47%, 62% 62%, 27% 60%, 43% 41%, 36% 30%, 1% 18%, 16% 5%)'}}></div>
        </div>

        <div className = 'fixed h-20 w-full min-w-[380px] flex flex-row place-items-center justify-between px-4 sm:px-4 xl:px-8 gap-1 bg-gray-50/[0.5] dark:bg-[rgb(10,12,30)]/[0.5]'>
          
          <a href="https://andrew-wulf-portfolio.com">
            <img src='/logo_dark.png' alt="logo" className='hover:cursor-pointer aspect-square h-16 md:h-20 hidden dark:block '/>
            <img src='/Logo.png' alt="logo" className='hover:cursor-pointer aspect-square h-16 md:h-20 dark:hidden'/>
          </a>

          <div className=' flex flex-row gap-8 place-items-center hidden'>

            <p className='text-md md:text-lg text-gray-600 hover:text-zinc-800 dark:text-gray-300 dark:opacity-75 hover:cursor-pointer dark:hover:text-gray-200 dark:hover:opacity-100 font-medium'>Home</p>
            <p className='text-md md:text-lg text-gray-600 hover:text-zinc-800 dark:text-gray-300 dark:opacity-75 hover:cursor-pointer dark:hover:text-gray-200 dark:hover:opacity-100 font-medium'>Projects</p>
            <p className='text-md md:text-lg text-gray-600 hover:text-zinc-800 dark:text-gray-300 dark:opacity-75 hover:cursor-pointer dark:hover:text-gray-200 dark:hover:opacity-100 font-medium'>Blog</p>
            <div 
              onClick={themeToggle}
              className='2xl:hidden w-10 h-10 rounded-md hover:bg-gray-300 hover:cursor-pointer dark:hover:bg-gray-700 flex place-items-center justify-center'
              >
                <WiDaySunny className='hidden dark:block w-6 h-6 md:w-7 md:h-7 text-yellow-500'/>
                <RxMoon className='dark:hidden w-6 h-6 md:w-7 md:h-7 text-blue-600'/>
            </div>
          </div>

          <div 
              onClick={themeToggle}
              className=' 2xl:flex w-10 h-10 rounded-md hover:bg-gray-300 hover:cursor-pointer dark:hover:bg-gray-700 flex place-items-center justify-center'
              >
                <WiDaySunny className='hidden dark:block w-7 h-7 md:w-7 md:h-7 text-yellow-500'/>
                <RxMoon className='dark:hidden w-7 h-7 md:w-7 md:h-7 text-blue-600'/>
            </div>

      

        </div>


        <div className='mt-28 mx-auto flex place-items-center flex-col '>

          <div className='w-full sm:w-[500px] rounded-none sm:rounded-xl bg-gray-50 dark:bg-[rgb(10,12,30)] border border-gray-300 shadow-md shadow-gray-300  p-4 place-items-center
          dark:border-[rgb(34,41,71)] dark:shadow-[rgb(10,12,30)]'>

            <div className="flex flex-col gap-1 md:flex-row w-3/4 justify-between place-items-center">

              <img className="w-36 rounded-full" src="headshot.jpg"/>
              
              <div className ='flex flex-col tracking-tighter'>
                <h1 className="text-3xl text-black dark:text-white tracking-tight">
                  Andrew Wulf
                </h1>
                
                <h2 className="text-lg text-gray-800 dark:text-gray-300 ">
                  Full Stack Developer
                </h2>
                
                <div className="flex gap-1">
                  <img className="w-5" src="pin.svg"/>
                  <h2 className="text-lg text-gray-800 dark:text-gray-300">
                    Chicago, IL
                  </h2>
                </div>
                
              </div>
              
            </div>

            <div className="w-72 md:w-96 pl-6 pt-6 pr-6 place-items-center">

              <div className='flex flex-row gap-12 place-items-center'>

                <a href="Andrew_Wulf_Resume.docx" target="_blank" rel="noopener noreferrer" className='flex flex-row place-items-center gap-2 p-2 px-4 border border-slate-300 shadow-sm shadow-slate-200 rounded-lg font-semibold 
                hover:cursor-pointer hover:bg-gray-100 
                dark:shadow-none dark:bg-transparent dark:border-[rgb(34,41,71)] dark:text-gray-100 dark:hover:text-white dark:hover:bg-[rgb(6,8,26)] dark:hover:border-gray-500'
                >
                  <p>Resume</p>
                  <GrDocumentDownload/>
                </a>

                <div className='flex flex-row gap-7 mx-auto md:m-0'>
                    <a href="https://www.linkedin.com/in/andrewdwulf/">
                      <FiLinkedin className='w-6 h-6 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:cursor-pointer'/>
                    </a>
                    <a href="https://github.com/andrew-wulf">
                      <FiGithub className='w-6 h-6 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:cursor-pointer'/>
                    </a>
                    <a href="mailto:andrewdwulf@gmail.com">
                      <LuMail className='w-6 h-6 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:cursor-pointer'/>
                    </a>
                </div>

              </div>
              
            </div>
            
          </div>


            <div className='absolute top-1/2 bg-black w-[600px]' style={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)'}}/>


            <div className="mt-10 mb-20 md:mt-20 md:mb-32 xl:mt-28 xl:mb-40 rounded-xl m-auto max-w-xl md:max-w-6xl py-5 px-3 md:px-5 text-center font-light text-gray-900 dark:text-gray-300
            text-3xl/normal md:text-4xl/normal xl:text-5xl/normal tracking-tight">
              <p>
                I'm a <b className='text-[rgb(73,73,187)] dark:text-[rgb(122,124,245)] hover:text-[rgb(120,147,255)]'>software engineer</b> specializing in <b className='text-[rgb(44,44,82)] dark:text-[rgb(202,202,235)]'>full stack web development</b>. Check out my <b 
                className='text-[rgb(243,74,139)] dark:text-[rgb(255,107,164)] hover:cursor-pointer hover:text-[rgb(255,134,180)]' onClick={projectScroll}>projects</b> below!
              </p>
            </div>


        </div>


        <div className='mx-auto w-[380px] md:w-[500px] lg:w-[800px]'>

          <h1 className='px-2 text-4xl mb-6 dark:text-white place-self-center tracking-tight text-black'>My Tech Stack</h1>
    
          <div className='pt-6 grid grid-cols-2 px-2 gap-4  md:gap-6 lg:grid-cols-3  lg:gap-8'>
            {
              Object.keys(techStack).map((key, i) => {

                let arr = techStack[key];

                return (

                  <div className="w-full flex flex-row border border-gray-300 dark:border-none rounded-lg
                  bg-[rgb(238,240,244)] dark:bg-[#151b2e]  hover:bg-[rgb(232,234,238)] dark:hover:bg-[rgb(18,24,44)]" key={i}>
    
                    <div className="m-3 w-10 h-10 md:w-12 md:h-12 rounded-lg flex place-content-center bg-[rgba(71,109,167,0.29)] ">
                      <img src={arr[0]} className="w-8 md:w-10"/>
                    </div>
                    
                    <div className="ml-3 pt-2 flex flex-col">
                      <h1 className="mt-1 text-sm md:text-md text-gray-800 font-semibold dark:font-medium dark:text-gray-200">{key}</h1>
                      <p className="text-xs md:text-sm text-gray-700 dark:text-gray-400">{arr[1]}</p>
                    </div>
                    
                  </div>

                )
              })
            }
          </div>
        </div>




        <Modal img={modalImg} show={modalVisible} onClose={closeModal}/>


        <h1 id='cards' className='mt-32 mx-auto text-4xl dark:text-white tracking-tight text-black'>Featured Projects</h1>

        <div className="mt-20 flex flex-col gap-[15px]">
          

          <div className='w-full mx-auto max-w-[600px] px-8 lg:px-12 grid grid-cols-1 xl:grid-cols-3 xl:max-w-[1600px] gap-20'>

            <Card 
            delay={6}
            data={projectData['twitter']}
            imgClick={updateModal}/>

            <Card
            delay={6}
            data={projectData['movieBattle']}
            imgClick={updateModal}/>

            <Card 
            delay={6}
            data={projectData['chess']}
            imgClick={updateModal}/>
          
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
              <a href="https://andrew-wulf-portfolio.com"
              className='align-middle hover:text-neutral-900 dark:hover:text-white hover:cursor-pointer'
              >
                andrew-wulf-portfolio.com</a>
            </div>
          </div>
          

        </div>

      </div>
    </>
  )
}

export default App
