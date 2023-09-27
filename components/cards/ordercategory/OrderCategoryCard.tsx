import Image from "next/image"
import './OrderCategoryCard.css'

const OrderCategoryCard = (props: any) => {
  return (
    <div className="card flex flex-col rounded-xl overflow-hidden border-[1px] hover:shadow-xl ">
        <Image src={props.img} alt="#" height={0} width={0} className="h-[10rem]" />
        <div className="p-3">

        <p className="title text-xl bold capitalize">{props.title}</p>
        <p className="subtitle text-sm capitalize">{props.subtitle}</p>
        </div>
    </div>
  )
}

export default OrderCategoryCard