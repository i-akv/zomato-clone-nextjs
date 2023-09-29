import {CiLocationOn, CiSearch} from 'react-icons/ci'

const SearchBar = () => {
  return (
    <div className='flex items-center justify-start bg-white gap-2 p-2 rounded-lg w-[80vw] lg:w-[60vw]'>
        <CiLocationOn className='text-[2rem]' />
        <select name="area" id="area" className='border-r-2 outline-none w-[40%] text-[.7rem] md:text-[1.2rem] pr-2 mr-1'>
            <option value="RK Puram">RK Puram</option>
            <option value="Hariom Nagar">Hariom Nagar</option>
            <option value="Atul Vihar">Atul Vihar</option>
            <option value="Mohammadpur">Mohammadpur</option>
            <option value="Aligarh">Aligarh</option>
            <option value="Dwarka">Dwarka</option>
        </select>
        <CiSearch  className='text-[2rem]'/>
        <input type="text" className='text-sm w-[80%] outline-none ml-1' placeholder="Search for restaurant, cuisine or a dish" />
    </div>
  )
}

export default SearchBar