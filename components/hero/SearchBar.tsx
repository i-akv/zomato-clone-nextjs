import {CiLocationOn, CiSearch} from 'react-icons/ci'

const SearchBar = () => {
  return (
    <div className='flex items-center justify-start bg-white mx-5 text-[2rem] gap-2 p-2 rounded-lg w-[80vw]'>
        <CiLocationOn />
        <select name="area" id="area" className='border-r-2 outline-none'>
            <option value="area-a">area-a</option>
            <option value="area-b">area-b</option>
            <option value="area-c">area-c</option>
            <option value="area-e">area-e</option>
            <option value="area-f">area-f</option>
        </select>
        <CiSearch/>
        <input type="text" className='text-sm w-full outline-none' placeholder="Search for restaurant, cuisine or a dish" />
    </div>
  )
}

export default SearchBar