import Image from 'next/image'
import profile from '../../../images/profile.png'
import { Star } from '../../../public/icons'

export default function CommentSimple() {
  return (
    <div className="bg-gray-7# rounded-lg h-[11.12rem] p-6">
      <section className="flex justify-between">
        <div className="flex gap-[1rem]">
          <Image
            src={profile}
            alt=""
            width={40}
            height={40}
            className="border border-green-1# rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-base font-bold text-gray-1#">
              Brandon Botosh
            </span>
            <span className="text-sm text-gray-4#">Há 2 dias</span>
          </div>
        </div>

        <div className="flex gap-[0.2rem]">
          <Star className="text-purple-1# w-4 h-4" />
          <Star className="text-purple-1# w-4 h-4" />
          <Star className="text-purple-1# w-4 h-4" />
          <Star className="text-purple-1# w-4 h-4" />
          <Star className="text-purple-1# w-4 h-4" />
        </div>
      </section>

      <section className="mt-5">
        <p className="text-sm text-gray-3#">
          Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
          Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta
          eget nec vitae sit vulputate eget
        </p>
      </section>
    </div>
  )
}
