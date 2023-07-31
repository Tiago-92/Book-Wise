'use client'

import Image from 'next/image'

import theHobbit from '../../../images/o-hobbit.png'
import profile from '../../../images/profile.png'
import { Star } from '@phosphor-icons/react'

export default function EvaluationCard() {
  return (
    <div className="w-[38rem] h-[17.5rem] bg-gray-7# px-6 py-6 rounded-lg">
      <header className="flex justify-between">
        <div className="flex gap-[1rem]">
          <Image className="w-[40px] h-[40px]" src={profile} alt="" />
          <div className="flex flex-col">
            <span className="text-base text-gray-1# font-normal">
              Tiago Amaral
            </span>
            <span className="text-sm text-gray-4#">Hoje</span>
          </div>
        </div>
        <div className="flex gap-1">
          <Star className="text-gray-1#" width={16} height={16} />
          <Star className="text-gray-1#" width={16} height={16} />
          <Star className="text-gray-1#" width={16} height={16} />
          <Star className="text-gray-1#" width={16} height={16} />
          <Star className="text-gray-1#" width={16} height={16} />
        </div>
      </header>
      <section className="flex mt-8 gap-5">
        <div>
          <Image
            src={theHobbit}
            alt="capa do livro ??"
            width={108}
            height={152}
          />
        </div>
        <div className="flex flex-col w-[27rem]">
          <cite className="text-base text-gray-1#">O Hobiit</cite>
          <span className="text-sm text-gray-4#">J.R.R. Tolkien</span>
          <p className="text-sm text-gray-3# mt-[1.25rem]">
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
