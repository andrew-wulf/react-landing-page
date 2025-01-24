import { useState } from "react"
import { Gallery } from "./Gallery"
import { FiGithub } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";


export function Card(props) {

    const [autoPlay, setAutoplay] = useState(false);

    return (
        <div className="w-full mx-auto">
            <div
                className="group mx-auto flex flex-col rounded-lg w-full border-gray-300 border shadow-sm shadow-gray-200
                bg-gray-50 
                dark:bg-[rgb(10,12,30)] dark:border-[rgb(34,41,71)] dark:shadow-none 
                text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-gray-50 sm:shrink-0 sm:grow sm:basis-0
                " 

                onMouseEnter={() => {setAutoplay(true)}}
                onMouseLeave={() => {setAutoplay(false)}}
                >
                <a href="#!">
                
                <div className="w-full mx-auto">
                    <Gallery imgs={props.data.imgs} autoPlay={autoPlay} delay={props.delay} imgClick={props.imgClick}/>
                </div>

                </a>
                <div className="pl-6 pr-6 pt-4 pb-2 border-b-2 border-neutral-100 dark:border-[rgb(34,41,71)] dark:border-b">
                    <h5 className="mb-2 text-lg font-medium leading-3">{props.data.title}</h5>
                    <p className="text-sm text-gray-600 dark:text-[rgb(139,151,173)] font-normal min-h-16 mt-4">
                        {props.data.desc}
                    </p>
                    
                    
                    <div className="mt-2 mb-3 flex flex-wrap gap-y-3 gap-x-4 xl:min-h-12 3xl:min-h-0">
                        {
                            props.data.tech.map((name, i) => {
                        
                                return (
                                    <div className="inline-flex items-center rounded-md border font-semibold
                                    focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                    bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-200 px-2 py-0 text-xs h-5" key={i}>
                                        {name}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>




                <div
                    className="mt-auto py-3 text-center text-surface-75 grid grid-rows-2 gap-3 xl:grid-cols-2 xl:grid-rows-1 w-40 sm:w-60 xl:w-80 mx-auto">
                    {/* <a className=" text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-md text-gray-700 hover:cursor-pointer hover:underline hover:text-blue-700">View on Github</a>
                    <a className=" text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-md text-gray-700 hover:cursor-pointer hover:underline hover:text-blue-700">Project Site</a> */}
                    
                    <a className="
                    w-40 sm:w-60 xl:w-28 h-8 p-2 flex flex-row gap-2 rounded-md 
                    bg-gray-50 border border-gray-800 hover:bg-gray-200 hover:text-gray-900 text-gray-800 
                    dark:text-gray-200 dark:bg-transparent dark:border-[rgb(34,41,71)] dark:hover:text-white dark:hover:bg-[rgb(6,8,26)] dark:hover:border-gray-600
                    font-semibold text-sm place-items-center justify-center place-self-center hover:cursor-pointer"
                    
                    href={props.data.repo}
                    >
                        <div className="">
                            <FiGithub />
                        </div>
                        <p>Source</p>
                    </a>

                    <a className="
                    w-40 sm:w-60 xl:w-28 h-8 p-2 flex flex-row gap-2 rounded-md 
                    bg-gray-800 hover:bg-gray-700 text-white dark:bg-gray-200 dark:text-black dark:hover:bg-[rgb(191,194,206)]
                    font-semibold text-sm place-items-center justify-center place-self-center hover:cursor-pointer"
                    
                    href={props.data.site}
                    >
                        <div className="">
                            <CiGlobe />
                        </div>
                        <p>Website</p>
                    </a>
                </div>
            </div>
        </div>
    )
}