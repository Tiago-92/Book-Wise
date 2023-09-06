import Image from 'next/image'
import habits from '../../../images/habitos.png'
import { Star, BookmarkSimple, BookOpen } from '../../../public/icons'

export default function BookDetail() {
  return (
    <div className="w-[35.25rem] h-[25.88rem] bg-gray-7# rounded-[10px] pt-6 px-8">
      <section className="flex gap-8 border-b-[1px] border-b-gray-6# pb-10 ">
        <Image src={habits} alt="" width={171.651} height={242} />
        <div className="relative">
          <h1 className="text-lg text-gray-1#">
            14 Hábitos de Desenvolvedores Altamente Produtivos
          </h1>
          <span className="text-base text-gray-3#">Zeno Rocha</span>
          <div className="absolute bottom-0">
            <div className="flex gap-[0.2rem]">
              <Star className="text-purple-1# w-5 h-5" />
              <Star className="text-purple-1# w-5 h-5" />
              <Star className="text-purple-1# w-5 h-5" />
              <Star className="text-purple-1# w-5 h-5" />
              <Star className="text-purple-1# w-5 h-5" />
            </div>
            <span className="text-sm text-gray-4#">3 avaliações</span>
          </div>
        </div>
      </section>

      <section className="flex gap-16">
        <div className="flex mt-6 gap-[1rem] items-center">
          <BookmarkSimple className="text-green-1# w-6 h-6" />
          <div className="flex flex-col">
            <span className="text-sm text-gray-3#">Categoria</span>
            <span className="text-base text-gray-2# font-bold">
              Computação, educação
            </span>
          </div>
        </div>
        <div className="flex mt-6 gap-[1rem] items-center">
          <BookOpen className="text-green-1# w-6 h-6" />
          <div className="flex flex-col">
            <span className="text-sm text-gray-3#">Páginas</span>
            <span className="text-base text-gray-2# font-bold">160</span>
          </div>
        </div>
      </section>
    </div>
  )
}
