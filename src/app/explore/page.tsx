import Sidebar from '@/components/Sidebar'
import { Binoculars, MagnifyingGlass } from '@/../public/icons'

export default function Explore() {
  return (
    <div className="flex w-full pr-24">
      <Sidebar />
      <header className="flex justify-between w-full mt-[4.5rem] ml-[5.94rem]">
        <h1 className="flex gap-[0.75rem] text-2xl text-gray-1# font-bold">
          <Binoculars color="#50B2C0" width={32} height={32} />
          Explorar
        </h1>
        <input
          className="w-[27.03rem] h-[3rem] text-gray-4# border border-gray-5# bg-gray-8# rounded px-5 
          py-[0.875rem] placeholder-gray-4# placeholder-text-sm"
          placeholder="Buscar livro ou autor"
        />
      </header>
    </div>
  )
}
