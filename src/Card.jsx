import { useState } from "react"
import { Gallery } from "./Gallery"
import { FiGithub } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";


export function Card(props) {

    const [autoPlay, setAutoplay] = useState(false);

    return (
        <div className="w-full mx-auto">
            <div
                className="mx-auto flex flex-col rounded-lg w-full border-gray-300 border shadow-sm shadow-gray-200
                bg-gray-50 hover:bg-gray-50 hover:border-blue-200 hover:shadow-md hover:shadow-blue-100 hover:cursor-pointer 
                text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0" 

                onMouseEnter={() => {setAutoplay(true)}}
                onMouseLeave={() => {setAutoplay(false)}}
                >
                <a href="#!">
                
                <div className="w-full mx-auto">
                    <Gallery imgs={props.imgs} autoPlay={autoPlay} delay={props.delay}/>
                </div>

                </a>
                <div className="pl-6 pr-6 pt-7 pb-2">
                    <h5 className="mb-2 text-lg font-medium leading-3">{props.title}</h5>
                    <p className="text-sm text-gray-600 font-normal min-h-16">
                        {props.desc}
                    </p>
                </div>
                <div
                    className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300 grid grid-cols-2">
                    {/* <a className=" text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-md text-gray-700 hover:cursor-pointer hover:underline hover:text-blue-700">View on Github</a>
                    <a className=" text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-md text-gray-700 hover:cursor-pointer hover:underline hover:text-blue-700">Project Site</a> */}
                    
                    <div className="w-24 h-7 p-2 flex flex-row gap-2 rounded-md bg-gray-800 hover:bg-gray-700 text-white font-semibold text-sm place-items-center place-self-center">
                        <div className="">
                            <FiGithub />
                        </div>
                        <p>Source</p>
                    </div>

                    <div className="w-24 h-7 p-2 flex flex-row gap-2 rounded-md bg-gray-800 hover:bg-gray-700 text-white font-semibold text-sm place-items-center place-self-center">
                        <div className="">
                            <CiGlobe />
                        </div>
                        <p>Website</p>
                    </div>
                </div>
            </div>
        </div>
    )
}