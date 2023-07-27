import { ReactElement } from 'react'

interface HeadingProps {
  title: string
  fontSize: 'base' | '2xl'
  icon?: ReactElement
}

export default function Heading({ title, fontSize, icon }: HeadingProps) {
  return (
    <h1
      className={`text-gray-1# ${
        fontSize === 'base' ? 'text-base' : fontSize === '2xl' ? 'text-2xl' : ''
      }`}
    >
      {icon && <>{icon}</>}
      {title}
    </h1>
  )
}
