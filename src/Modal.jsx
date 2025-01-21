import { Card } from "./Card";

export function Modal(props) {

    console.log(props.show)
    if (props.show && props.data) {

        console.log('visible!')

      return (
        <div onClick={props.onClose} className="fixed top-0 left-0 w-full h-full bg-gray-700/40 dark:bg-gray-700/30 z-10">
          <section onClick={(e) => {e.stopPropagation(); }} className="fixed w-3/4 max-w-[1000px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 group">

              <Card delay={6} data={props.data}/>
  
          </section>
        </div>
      );
    }
  }