import React from 'react'

const Button = ({ text, type = "primary" }) => {


    return (
        <button className={`rounded-[8px] cursor-pointer param !font-semibold ${type === 'primary' ? 'bg-primary border-none' : 'bg-transparent border-2 border-primary'}text-secondary
        md:px-[32px] px-[24px]  md:py-[16px] py-[8px]
        `}>{text}</button>
    )
}

export default Button