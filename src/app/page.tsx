import { ChartLineUp, CaretRight } from '@/../public/icons/'

import BookCard from '@/components/BookCard'
import CommentCard from '@/components/CommentCard'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex ml-24">
      <div>
        <h1 className="flex gap-[0.75rem] mt-[4.5rem] text-[1.5rem] font-bold text-gray-1#">
          <ChartLineUp className="text-green-1# w-8 h-8" />
          Início
        </h1>

        <section className="mt-[2.5rem] mb-[1rem]">
          <h2 className="text-sm mb-[0.75rem] text-gray-1#">
            Avaliações mais recentes
          </h2>
          <div className="flex flex-col gap-[0.75rem]">
            <CommentCard />
            <CommentCard />
            <CommentCard />
          </div>
        </section>
      </div>

      <section className="flex flex-col gap-[0.75rem] w-full mt-[9.38rem] ml-[4rem]">
        <div className="flex justify-between">
          <span className="text-sm text-gray-1#">Livros populares</span>
          <Link
            className="flex items-center gap-[0.5rem] text-sm text-purple-1#"
            href="/"
          >
            Ver todos
            <CaretRight />
          </Link>
        </div>
        <BookCard />
        <BookCard />
        <BookCard />
      </section>
    </main>
  )
}
