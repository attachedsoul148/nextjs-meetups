import Image from 'next/image'
import React from 'react'
import { MeetupType } from '../pages'

const Details: React.FC<MeetupType> = ({ image, title, address , description }) => {
  return (
    <div className="details">
      <h1>{title}</h1>
      <div className="details__image">
        <Image src={image} alt="place" width={800} height={512} />
      </div>
      <h4>{address}</h4>
      <p>
        {description}
      </p>
    </div>
  )
}

export default Details
