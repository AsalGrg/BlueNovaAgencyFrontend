import React from 'react'

const Button = ({ text, type = "primary" }) => {


    return (
        <button className={`rounded-xl cursor-pointer para text-secondary ${type === 'primary' ? '!font-semibold drop-shadow-accent bg-primary' : '!font-semibold bg-primary/12 backdrop-blur-3xl'}
        md:px-[24px] px-[12px]  md:py-[20px] py-[12px]
        `}>{text}</button>
    )
}

export default Button