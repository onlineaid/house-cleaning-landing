import React from 'react'

type Props = {
    text: string
    align: string
    size?: string
}

const HeadingComponent = ({text, align, size= "text-4xl"}: Props) => {
  return (
    <h1 className={`${size} ${align} font-bold mb-10`}>{text}</h1>
  )
}

export default HeadingComponent