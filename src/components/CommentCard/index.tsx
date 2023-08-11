'use client'

import Image from 'next/image'

import theHobbit from '../../../images/o-hobbit.png'
import profile from '../../../images/profile.png'
import { Star } from '@phosphor-icons/react'

export default function CommentCard() {
  return (
    <div className="w-[230px] h-[13rem] md:w-[38rem] md:h-[17.5rem] bg-gray-7# px-6 py-6 rounded-lg md:flex md:flex-col">
      <header className="flex flex-col md:flex-row md:justify-between ">
        <div className="flex gap-[1rem]">
          <Image className="w-[40px] h-[40px]" src={profile} alt="" />
          <div className="flex flex-col">
            <span className="text-base text-gray-1# font-normal">
              Tiago Amaral
            </span>
            <span className="text-sm text-gray-4#">Hoje</span>
          </div>
        </div>
        <div className="mt-[1rem] flex gap-1">
          <Star className="text-gray-1#" width={16} height={16} />
          <Star className="text-gray-1#" width={16} height={16} />
          <Star className="text-gray-1#" width={16} height={16} />
          <Star className="text-gray-1#" width={16} height={16} />
          <Star className="text-gray-1#" width={16} height={16} />
        </div>
      </header>
      <section className="flex mt-4 gap-5">
        <div className="w-[175px] md:w-[108px] md:h-[152px]">
          <Image src={theHobbit} alt="capa do livro ??" />
        </div>
        <div className="flex flex-col w-[27rem]">
          <cite className="text-base text-gray-1#">O Hobiit</cite>
          <span className="text-sm text-gray-4#">J.R.R. Tolkien</span>
          <p className="hidden text-sm text-gray-3# mt-[1.25rem] md:block">
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh...{' '}
            <a className="text-purple-1#" href="/">
              ver mais
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
