import React from 'react'
import { useParams } from 'react-router-dom'

const SearchResoult = () => {
    const params =useParams();
    const id=params.id.replace(/\D/g, "");
  return (
    <div>SearchResoult</div>
  )
}

export default SearchResoult