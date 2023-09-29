import React from 'react'

const CountrySelect = () => {
  return (
    <select name="country" id="country-select" className='p-2 border-[1px] rounded-md border-black text-black'>
        <option value="india">India</option>
        <option value="usa">USA</option>
        <option value="argentina">Argentina</option>
        <option value="srilanda">Sri Landa</option>
    </select>
  )
}

export default CountrySelect