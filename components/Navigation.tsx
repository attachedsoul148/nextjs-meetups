import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <div className="navbar">
      <div>
        <h1>NextJS/React</h1>
      </div>
      <div className="navbar-links">
        <Link href={'/'}>Meetups List</Link>
        <Link href={'/new-meetups'}>Add New Meetup </Link>
      </div>
    </div>
  )
}

export default Navigation
