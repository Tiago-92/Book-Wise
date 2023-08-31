'use client'

import Button from '@/components/Button'

import initialImage from '@/../public/initial-image.png'
import Image from 'next/image'
import googleIcon from '@/../public/google-icon.svg'
import gitHubIcon from '@/../public/github-icon.svg'
import rocketIcon from '@/../public/rocket-icon.svg'
import bookWiseIcon from '@/../public/book-wise-icon.svg'

export default function Login() {
  return (
    <main className="max-h-full">
      <div className="lg:flex items-center gap-[14.12rem] mt-[1.25rem] mx-[1.25rem]">
        <section className="flex items-center justify-center relative">
          <Image
            className="max-lg:hidden object-cover rounded-xl max-h-[670px]"
            src={initialImage}
            alt="Mulher deitada em um sofá lendo um livro"
          />
          <h1 className="flex items-center gap-[0.75rem] text-4xl mt-16 text-gray-1# absolute">
            <Image src={bookWiseIcon} alt="" />
            BookWise
          </h1>
        </section>
        <section className="flex flex-col items-center justify-center mt-[7.5rem] lg:items-start">
          <h2 className="text-2xl text-gray-1# font-bold">Boas Vindas!</h2>
          <h3 className="text-base text-gray-1# font-normal">
            Faça seu login ou acesse como visitante.
          </h3>

          <div className="flex flex-col gap-2 mt-10">
            <Button
              title="Entrar com Google"
              icon={<Image src={googleIcon} alt="" />}
            />
            <Button
              title="Entrar com GitHub"
              icon={<Image src={gitHubIcon} alt="" />}
            />
            <Button
              title="Acessar como visitante"
              icon={<Image src={rocketIcon} alt="" />}
            />
          </div>
        </section>
      </div>
    </main>
  )
}
