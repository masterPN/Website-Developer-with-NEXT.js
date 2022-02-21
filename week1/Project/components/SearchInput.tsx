import React from "react"
import Image from "next/image"

const SearchInput = () => {
    return <div className="search-input-wrapper">
        <Image src='/search.png' width={16} height={16} />
        <input placeholder='Search...' className='search-input' />
    </div>
}

export default SearchInput