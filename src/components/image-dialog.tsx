import React from 'react'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface ImageDialogProps {
  src: string
  alt: string
  caption?: string
  children?: React.ReactNode
}

export const ImageDialog = ({
  src,
  alt,
  caption,
  children,
}: ImageDialogProps) => {
  if (!src) return children || null

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || (
          <Image
            src={src}
            alt={alt}
            width={1920}
            height={1080}
            className="cursor-pointer"
          />
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[850px] max-w-[90vw] mx-auto">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl">
            {caption || alt}
          </DialogTitle>
        </DialogHeader>
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={1080}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 75vw, 850px"
          className="w-full h-auto"
          loading="lazy"
        />
      </DialogContent>
    </Dialog>
  )
}
