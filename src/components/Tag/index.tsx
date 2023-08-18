interface TagProps {
  title: string
}

export default function Tag({ title }: TagProps) {
  return (
    <span className="border border-x-purple-1# px-[1rem] bg-gray-8# hover:bg-purple-2# hover:border-none hover:text-gray-1# text-purple-1# text-base rounded-[999px]">
      {title}
    </span>
  )
}
