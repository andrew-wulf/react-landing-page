import { useEffect, useState } from "react";
import { Bs0Circle, Bs0CircleFill, BsCircle, BsCircleFill } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight, FaCircle, FaRegCircle, FaRegDotCircle } from "react-icons/fa";
import { GoDot, GoDotFill } from "react-icons/go";
import { MdOutlineCircle } from "react-icons/md";

export function Gallery (props) {


    const [index, setIndex] = useState(0);

    const [imgTrack, setImgTrack] = useState([]);


    useEffect(() => {
        if (props.imgs.length > 1) {
            setImgTrack([props.imgs[props.imgs.length - 1], props.imgs[0], props.imgs[1]])
        }
    }, [props.imgs])



    let timeOut = null;

    useEffect(() => {
        timeOut = 
            props.autoPlay && 
            setTimeout(() => {
                indexChange(1);
            }, props.delay * 1000);

            return () => {
                clearTimeout(timeOut);
            }});


    useEffect(() => {
        if (!props.autoPlay) {
            clearTimeout(timeOut)
        }
    }, [props.autoPlay, timeOut])

    let imgs = props.imgs;
  
    const indexChange = (direction) => {
      let i = index + direction;
  
      if (i > imgs.length - 1) {
        i = 0;
      }
      if (i < 0) {
        i = imgs.length - 1;
      }

        setIndex(i);
    }
  

  
    return (
        <div>
            <div>
                <img src={imgs[index]} draggable='false' className="rounded-t-lg"/>  
         
            </div>


            <div className="mt-2 relative h-5 hidden xs:block">

                <div className="flex flex-row absolute gap-2 sm:gap-6 left-1/2 -translate-x-1/2">
                    <div onClick={(e) => {e.stopPropagation(); indexChange(-1); clearTimeout(timeOut)}} 
                        className="w-8 h-8 rounded-full content-center shadow-[inset_0_0_0_0.1rem_rgb(234,234,234)] text-gray-700 hover:text-black hover:bg-gray-100">
                        <FaChevronLeft className="place-self-center"/>
                    </div>
                    <div onClick={(e) => {e.stopPropagation(); indexChange(1); clearTimeout(timeOut)}} 
                        className="w-8 h-8 rounded-full content-center shadow-[inset_0_0_0_0.1rem_rgb(234,234,234)] text-gray-700 hover:text-black hover:bg-gray-100">
                        <FaChevronRight className="place-self-center"/>
                    </div>
                </div>


                <div className="flex flex-row absolute right-4 gap-1 sm:gap-2 pt-2">
                    {
                        imgs.map((img, i) => {
                            if (i === index) {
                                return (
                                    <div key={i} className='text-gray-800 hover:text-gray-500 text-lg' onClick={() => {setIndex(i)}}>
                                        <div className="w-[0.85rem] h-[0.85rem] rounded-full content-center 
                                        shadow-[inset_0_0_0_0.12rem_rgb(45,45,45)]"/>
                                    </div>
                                )    
                            }
                            else {
                                return (
                                    <div key={i} className='text-gray-200 hover:text-gray-500 text-lg' onClick={() => {setIndex(i)}}>
                                        <div className="w-[0.85rem] h-[0.85rem] rounded-full content-center 
                                        shadow-[inset_0_0_0_0.12rem_rgb(215,215,215)] hover:shadow-[inset_0_0_0_0.12rem_rgb(90,90,90)]
                                        
                                        "/>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>

        </div>

    )
}