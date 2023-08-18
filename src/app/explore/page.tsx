import Sidebar from '@/components/Sidebar'
import { Binoculars, MagnifyingGlass } from '@/../public/icons'
import Tag from '@/components/Tag'
import BookCard from '@/components/BookCard'

export default function Explore() {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex flex-col w-full mr-24 ml-[5.94rem]">
        <header className="flex justify-between  mt-[4.5rem]">
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

        <section className="w-full mt-[3.44rem] flex gap-[1rem]">
          <Tag title="Tudo" />
          <Tag title="Computação" />
          <Tag title="Educação" />
          <Tag title="Fantasia" />
          <Tag title="Ficção científica" />
          <Tag title="Horror" />
          <Tag title="HQ's" />
          <Tag title="Suspense" />
        </section>

        <section>
          <BookCard />
        </section>
      </div>
    </div>
  )
}
