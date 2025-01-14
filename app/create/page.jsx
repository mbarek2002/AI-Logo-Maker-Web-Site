"use client"
import React, { useState } from 'react'
import LogoTitle from './_components/LogoTitle'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import LogoDesc from './_components/LogoDesc'
import LogoPallete from './_components/LogoPallete'
import LogoDesigns from './_components/LogoDesign'
import LogoIdea from './_components/LogoIdea'

const CreateLogo = () => {

    const [step, setStep] = useState(1)
    const [formData , setFormData]=useState([])

    const onHandleInputChange = (filed, value) => {
        setFormData(prev => ({
            ...prev,
            [filed]: value
        }))

        console.log(formData)
    }

    return (
        <div className='mt-28 p-10 border rounded-xl 2xl:mx-72 '>
            {
                step == 1 ?
                    <LogoTitle onHandleInputChange={(v) => onHandleInputChange('title',v)} formData={formData} /> : 
                    step==2?
                    <LogoDesc onHandleInputChange={(v) => onHandleInputChange('desc',v)}  formData={formData} />:
                    step==3?
                    <LogoPallete  onHandleInputChange={(v) => onHandleInputChange('palette',v)} formData={formData} />:
                    step==4?
                    <LogoDesigns onHandleInputChange={(v) => onHandleInputChange('design',v)} formData={formData} />:
                    step==5?
                    <LogoIdea onHandleInputChange={(v) => onHandleInputChange('idea',v)} formData={formData} />:
                    null
            }

            <div className='flex items-center justify-between mt-10'>
                {
                    step != 1 && <Button className="outline" onClick={()=>setStep(step-1)} > <ArrowLeft /> Previous</Button>}
                <Button onClick={()=>setStep(step+1)}><ArrowRight /> Continue</Button>
            </div>
        </div>
    )
}

export default CreateLogo