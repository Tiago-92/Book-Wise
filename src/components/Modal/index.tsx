'use client'

import { useState } from 'react'
import { X } from '../../../public/icons'
import BookDetail from '../BookDetail'
import CommentSimple from '../CommentSimple'

interface ModalProps {
  openModal?: () => void
}

export default function Modal({ openModal }: ModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(true)

  function handleCloseModal() {
    setIsModalOpen(false)
  }

  if (!isModalOpen) {
    return null
  }

  return (
    <div
      className="w-[41.25rem] h-full pt-6 px-12 bg-gray-8# border border-gray-1#"
      onClick={openModal}
    >
      <section className="flex justify-end">
        <button className="mb-[1rem]" onClick={handleCloseModal}>
          <X className="w-6 h-6 text-gray-4#" />
        </button>
      </section>
      <BookDetail />

      <section className="mt-[2.88rem] mb-[1.38rem]">
        <div className="flex justify-between">
          <span className="text-sm text-gray-2#">Avaliação</span>
          <button className="text-base text-purple-1# font-bold">
            Avaliar
          </button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <CommentSimple />
        <CommentSimple />
        <CommentSimple />
      </section>
    </div>
  )
}
