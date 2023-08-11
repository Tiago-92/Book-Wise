import Image from 'next/image'

import profileImage from '@/../images/profile.png'
import { BookOpen, Books, UserList, BookmarkSimple } from '@/../public/icons'

export default function DetailsProfile() {
  return (
    <div className="w-[19.35rem] h-[34.69rem] flex flex-col items-center">
      <section className="flex flex-col items-center">
        <Image
          className="border-2 border-purple-1# rounded-full"
          src={profileImage}
          width={72}
          height={72}
          alt="foto de perfil do usuário"
        />
        <span className="text-xl text-gray-1# font-bold mt-[1.25rem]">
          Cristofer Rosser
        </span>
        <span className="text-sm text-gray-4#">membro desde 2021</span>

        <div className="w-8 border border-b-4 my-8 border-purple-1#" />

        <div className="flex flex-col" />
      </section>

      <section className="flex flex-col">
        <div className="flex flex-col gap-[2.5rem]">
          <div className="flex">
            <BookOpen className="w-8 h-8 text-green-1#" />
            <div className="flex flex-col ml-[1.25rem]">
              <span className="text-base font-bold text-gray-2#">3853</span>
              <span className="text-sm text-gray-3#">Páginas lidas</span>
            </div>
          </div>
          <div className="flex">
            <Books className="w-8 h-8 text-green-1#" />
            <div className="flex flex-col ml-[1.25rem]">
              <span className="text-base font-bold text-gray-2#">10</span>
              <span className="text-base text-gray-3#">Livros avaliados</span>
            </div>
          </div>
          <div className="flex">
            <UserList className="w-8 h-8 text-green-1#" />
            <div className="flex flex-col ml-[1.25rem]">
              <span className="text-base font-bold text-gray-2#">8</span>
              <span className="text-base text-gray-3#">Autores lidos</span>
            </div>
          </div>
          <div className="flex">
            <BookmarkSimple className="w-8 h-8 text-green-1#" />
            <div className="flex flex-col ml-[1.25rem]">
              <span className="text-base font-bold text-gray-2#">
                Computação
              </span>
              <span className="text-base text-gray-3#">
                Categoria mais lida
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
