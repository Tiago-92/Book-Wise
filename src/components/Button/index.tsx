import { ReactElement } from 'react'

interface ButtonProps {
  title: string
  icon?: ReactElement
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
export default function Button({ title, icon, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex h-[4.5rem] w-[23.25rem] pl-6 items-center gap-5 text-lg text-gray-2# font-bold 
      bg-gray-6# hover:bg-gray-5# transition-duration-300ms rounded-lg"
    >
      {icon && <>{icon}</>}
      {title}
    </button>
  )
}
