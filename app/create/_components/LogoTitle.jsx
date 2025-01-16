"use client"
import React, { useEffect, useState } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import { useSearchParams } from 'next/navigation'

const LogoTitle = ({ onHandleInputChange, formData }) => {

    const searchParam = useSearchParams()
    const [title, setTitle] = useState(searchParam?.get('title') ?? '')



    return (
        <div className='my-10'>
            <HeadingDescription
                title={Lookup.LogoTitle}
                description={Lookup.LogoTitleDesc}
            />

            <input type='text' placeholder={Lookup.InputTitlePlaceholder}
                className='p-4 border rounded-lg mt-5 w-full '
                defaultValue={title}
                value={formData?.title}
                onChange={(e) => onHandleInputChange(e.target.value)}
            />
        </div>
    )
}

export default LogoTitle