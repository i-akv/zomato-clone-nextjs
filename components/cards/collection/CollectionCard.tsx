import Image from "next/image"
import {AiFillCaretRight} from 'react-icons/ai'

const CollectionCard = (props: any) => {
  return (
    <div className='rounded-lg border-[1px] overflow-hidden hover:scale-105 duration-500 cursor-pointer hover:shadow-xl'>
        <Image src={props.img} alt="#" height={0} width={0} className="h-[15rem] w-[20rem]" />
        <div className="p-3">

        <p className="title text-[.9rem] md:text-lg bold capitalize whitespace-nowrap">{props.title}</p>
        <p className="subtitle text-[.75rem] md:text-sm capitalize flex items-center gap-1">{props.subtitle} <AiFillCaretRight/></p>
        </div>
    </div>
  )
}

export default CollectionCard
