import React from 'react'
import Button from './Button'

const List = ["All", "live", "Gaming", "Sports", "Cricket", "Sitcom", "Music", "Football", "Chandigarh", "Mychannel",];

const ButtonList = () => {
  return (
    <div className='flex ml-10'>
    {
      List.map((name, index) => {
        return(
          <Button key={index} name={name}/>
        )
          })
    }
    </div>
   
  )
}

export default ButtonList