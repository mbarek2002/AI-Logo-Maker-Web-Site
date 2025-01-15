import Lookup from '@/app/_data/Lookup'
import Prompt from '@/app/_data/Prompt'
import { Loader2Icon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import HeadingDescription from './HeadingDescription'

const LogoIdea = ({formData,onHandleInputChange}) => {

  const [ideas,setIdeas] = useState()
  const [loading,setLoading] = useState(false)
  const [selectedOption,setSelectedOption] = useState()

  useEffect(()=>{
    generateLogoDesignIdea();
  },[])

  const generateLogoDesignIdea= async ()=>{
    setLoading(true)
    const PROMPT = Prompt.DESIGN_IDEA_PROMPT
    .replace('{logoType',formData?.design.title)
    .replace('{logoTitle',formData?.title)


    const result = await axios.post('/api/ai-design-ideas',{
      prompt:PROMPT
    })

    console.log(result.data)
    setIdeas(result.data.ideas)
    setLoading(false)

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

    </div>
  )
}

export default LogoIdea