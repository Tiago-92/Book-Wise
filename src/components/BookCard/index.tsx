import Image from 'next/image'

import histoyBook from '@/../images/historias-extraordinarias.png'
import { Star } from '@/../public/icons/'

export default function BookCard() {
  return (
    <div className="flex gap-[1.25rem] w-[20.25rem] h-[8.12rem] rounded-lg px-[1rem] py-[1.25rem] bg-gray-7#">
      <Image
        src={histoyBook}
        width={64}
        height={94}
        alt="Livro O Fim da Eternidade"
      />
      <div className="flex flex-col">
        <cite className="text-base font-bold text-gray-1#">
          O Fim da Eternidade
        </cite>
        <span className="text-sm text-gray-4#">Isaac Asimov</span>

        <div className="flex gap-[0.2rem] mt-[2.12rem]">
          <Star className="text-purple-1#" />
          <Star className="text-purple-1#" />
          <Star className="text-purple-1#" />
          <Star className="text-purple-1#" />
          <Star className="text-purple-1#" />
        </div>
      </div>
    </div>
  )
}
