import React from 'react'
import ServiceCard from './service-card'

const ServiceCount = () => {
    return (
        <div className='w-full py-6 lg:py-24 mt-24 flex items-center justify-center flex-wrap gap-8'>
            <ServiceCard count='2T+' text='Twitter Followers' />
            <ServiceCard count='10+' text='Happy Customers' />
            <ServiceCard count='10+' text='Full-Stack Projects' />
            <ServiceCard count='50+' text='Public Projects' />
        </div>
    )
}

export default ServiceCount