import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MeetupType } from '../pages'

export const MeetupItem: React.FC<MeetupType> = ({ image, title, address, id }) => {
  return (
    <div className="meetupItem">
      <div className="meetupItem__image">
        <Image src={image} alt={'place'} width={800} height={512} priority={true} />
      </div>
      <div className="meetupItem__info">
        <h1>{title}</h1>
        <p>{address}</p>
        <div className="meetupItem__info-button">
          <Link href={'/' + id}>
            <button>Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
