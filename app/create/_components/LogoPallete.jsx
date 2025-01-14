"use client"
import React, { useState } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import Colors from '@/app/_data/Colors'

const LogoPallete = ({onHandleInputChange  , formData}) => {

  const [selectedOption, setSelectedOption] = useState(formData?.palette)

  return (
    <div className='my-10'>
      <HeadingDescription
        title={Lookup.LogoColorPaletteTitle}
        description={Lookup.LogoColorPaletteDesc}
      />

      <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-5'>
        {
          Colors.map((palette, index) => (
            <div className={`flex cursor-pointer ${selectedOption == palette.name && 'border-2 rounded-lg border-primary'}`} key={index} >
              {
                palette?.colors.map((color, index) => (
                  <div className="h-24 w-full"
                    key={index}
                    style={{ backgroundColor: color }}
                    onClick={() => { setSelectedOption(palette.name) 

                      onHandleInputChange(palette.name)
                    }}
                  >

                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default LogoPallete