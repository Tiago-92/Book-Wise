import { Binoculars, ChartLineUp, SignOut, User } from '@/../public/icons'
import Image from 'next/image'

import Link from 'next/link'

import bgSidebar from '@/../images/sidebar-background.png'
import logo from '@/../images/logo.png'

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center relative mt-[1.25rem] ml-[1.25rem] w-[14.5rem] h-full">
      <Image
        className="rounded-lg"
        src={bgSidebar}
        alt="Imagem de fundo da sidebar"
      />
      <section className="absolute top-0 mt-10">
        <Image
          src={logo}
          alt="logo com um ícone de um livro e um coração,ao lado está escrito BookWise"
        />
        <div className="flex flex-col gap-[1rem] mt-16">
          <Link
            className="
              flex gap-[0.75rem] items-center pl-[0.75rem] text-base text-gray-4# hover:text-gray-1# 
              hover:font-bold hover:border-l-gray-1# hover:border-l-4
            "
            href="/"
          >
            <ChartLineUp className="text-gray-4#" />
            Início
          </Link>
          <Link
            className="
              flex gap-[0.75rem] items-center pl-[0.75rem] text-base text-gray-4# hover:text-gray-1# 
              hover:font-bold hover:border-l-gray-1# hover:border-l-4
            "
            href="/"
          >
            <Binoculars />
            Explorar
          </Link>
          <Link
            className="
              flex gap-[0.75rem] items-center pl-[0.75rem] text-base text-gray-4# hover:text-gray-1# 
              hover:font-bold hover:border-l-gray-1# hover:border-l-4
            "
            href="/"
          >
            <User />
            Perfil
          </Link>
        </div>
      </section>

      <footer className="absolute bottom-0 mb-[1.5rem]">
        <Link
          className="flex gap-[0.75rem] items-center text-base text-gray-2#"
          href="/"
        >
          Fazer login
          <SignOut className="text-green-1#" />
        </Link>
      </footer>
    </div>
  )
}
