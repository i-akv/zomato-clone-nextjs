import {FiChevronRight} from 'react-icons/fi'

const LocalityCard = (props: any) => {
    const style = {
        card: "grid grid-cols-12 hover:shadow-lg hover:scale-105 duration-500 justify-right items-center p-3 border-[1px] rounded-lg cursor-pointer"
    }
  return (
    <div className={style.card}>
        <div className="col-span-11">

            <p className="text-[1.2rem]">{props.title}</p>
            <p className="text-sm">{props.numPlaces} Places</p>
        </div>
        <FiChevronRight />
    </div>
  )
}

export default LocalityCard