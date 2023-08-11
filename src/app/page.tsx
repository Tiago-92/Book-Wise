import { ChartLineUp, CaretRight } from '@/../public/icons/'

import BookCard from '@/components/BookCard'
import CommentCard from '@/components/CommentCard'
import DetailsProfile from '@/components/DetailsProfile'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row md:ml-24 ml-[1.5rem]">
      <section>
        <h1 className="flex gap-[0.75rem] mt-[4.5rem] text-[1.5rem] font-bold text-gray-1#">
          <ChartLineUp className="text-green-1# w-8 h-8" />
          Início
        </h1>

        <div className="mt-[2.5rem] mb-[1rem] w-[380px] md:w-full">
          <h2 className="text-sm mb-[0.75rem] text-gray-1#">
            Avaliações mais recentes
          </h2>
          <div className="w-[320px] flex gap-[0.75rem] overflow-x-auto md:flex-col md:w-full">
            <CommentCard />
            <CommentCard />
            <CommentCard />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[0.75rem] mt-[1rem] md:mt-[9.38rem] ml-[0.5rem] md:ml-[4rem] ">
        <div className="flex flex-col md:flex md:flex-row md:justify-between">
          <span className="text-sm text-gray-1#">Livros populares</span>
          <Link
            className="flex items-center gap-[0.5rem] text-sm text-purple-1#"
            href="/"
          >
            Ver todos
            <CaretRight />
          </Link>
        </div>
        <div className="w-[320px] flex overflow-x-auto md:flex-col gap-[1rem]">
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
        {/* <DetailsProfile /> */}
      </section>
    </main>
  )
}
