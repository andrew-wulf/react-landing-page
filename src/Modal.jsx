import { Card } from "./Card";

export function Modal(props) {

    if (props.show && props.img) {

        console.log('visible!')

      return (
        <div onClick={props.onClose} className="fixed top-0 left-0 w-full h-full bg-gray-700/40 dark:bg-[rgb(6,6,16)]/80 z-10">
          <section onClick={(e) => {e.stopPropagation(); }} className="fixed w-11/12 max-w-[900px] xl:w-3/4 xl:max-w-[1200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 group">
            
            <button type="button" onClick={props.onClose} className="absolute text-3xl text-white right-10 top-5 opacity-30 hover:cursor-pointer hover:opacity-100">
                &#x2715;
            </button>

            <img src={props.img} draggable='false' className="rounded-t-lg"/> 
  
          </section>
        </div>
      );
    }
  }