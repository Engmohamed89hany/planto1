import React from 'react'
import ClientCard from './Client'
import Heading from '../Heading/Heading'

export default function Clients() {
  return (
    <div className = "w-4/5 mx-auto mt-16">
        <Heading text = "What Our Clients Say"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ClientCard/>
            <ClientCard/>
            <ClientCard/>
        </div>
    </div>
  )
}

