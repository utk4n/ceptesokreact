import React from 'react'
import { useSelector } from 'react-redux'
const MyFavourites = () => {

    const favs = useSelector(state => state.favs)
console.log(favs);
  return (
    <div>MyFavourites</div>
  )
}

export default MyFavourites