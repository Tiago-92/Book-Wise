import Heading from '@/components/Heading'
import Button from '@/components/Button'

import initialImage from '@/../public/initial-image.png'
import Image from 'next/image'
import googleIcon from '@/../public/google-icon.svg'
import gitHubIcon from '@/../public/github-icon.svg'
import rocketIcon from '@/../public/rocket-icon.svg'

export default function Login() {
  return (
    <div className="flex items-center gap-[193px]">
      <Image
        src={initialImage}
        alt="Titulo escrito BookWise e abaixo aparece uma mulher deitada no sofá lendo um livro"
        className="bg-cover"
      />
      <section>
        <Heading title="Boas vindas!" fontSize={'2xl'} />
        <h2 className="text-gray-1# font-normal leading-[1.6rem]">
          Faça seu login ou acesse como visitante.
        </h2>
        <div className="flex flex-col gap-[1rem] mt-10">
          <Button
            title="Entrar com Google"
            icon={<Image src={googleIcon} alt="" />}
          />
          <Button
            title="Entrar com GitHub"
            icon={<Image src={gitHubIcon} alt="" />}
          />
          <Button
            title="Entrar com visitante"
            icon={<Image src={rocketIcon} alt="" />}
          />
        </div>
      </section>
    </div>
  )
}
