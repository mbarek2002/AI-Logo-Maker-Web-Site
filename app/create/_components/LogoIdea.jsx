import Lookup from '@/app/_data/Lookup'
import Prompt from '@/app/_data/Prompt'
import { Loader2Icon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import HeadingDescription from './HeadingDescription'
import axios from 'axios'

const LogoIdea = ({ formData, onHandleInputChange }) => {

  const [ideas, setIdeas] = useState()
  const [loading, setLoading] = useState(false)
  const [selectedOption, setSelectedOption] = useState()

  useEffect(() => {
    generateLogoDesignIdea();
  }, [])

  const generateLogoDesignIdea = async () => {

    setLoading(true)
    const PROMPT = Prompt.DESIGN_IDEA_PROMPT
      .replace('{logoType}', formData?.design.title)
      .replace('{logoTitle}', formData?.title)
      .replace('{logoDesc}', formData?.desc)
      .replace('{logoPrompt}', formData?.design.prompt)


    const result = await axios.post('/api/ai-design-ideas', {
      prompt: PROMPT
    })

    console.log(result.data['logo_ideas'])
    setIdeas(result.data['logo_ideas'])
    setLoading(false)

    console.log(result.data['logo_ideas'])
  }

  return (
    <div className='my-10'>
      <HeadingDescription
        title={Lookup.LogoIdeaTitle}
        description={Lookup.LogoIdeaDesc}
      />

      <div className="flex items-center justify-center">
        {
          loading && <Loader2Icon className='animate-spin my-10' />
        }
      </div>
      <div className="flex flex-wrap gap-3 mt-6">
        {
          ideas && ideas.map((item, index) => (
            <h2 key={index} onClick={() => {
              setSelectedOption(item)
              onHandleInputChange(item.idea)
            }} className={`p-2 rounded-full border px-3 cursor-pointer hover:border-primary ${selectedOption == item && 'border-primary'} `}>
              {item.idea}
            </h2>

          ))
        }
        <h2 onClick={() => {
          setSelectedOption('Let AI select the best idea')
          onHandleInputChange('Let AI select the best idea')
        }} className={`p-2 rounded-full border px-3 cursor-pointer hover:border-primary ${selectedOption == 'Let AI select the best idea' && 'border-primary'} `}>
          Let AI select the best idea
        </h2>
      </div>

    </div>
  )
}

export default LogoIdea