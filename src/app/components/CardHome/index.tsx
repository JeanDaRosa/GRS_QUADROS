"use client"
import Image from "next/image";
import { Fade } from "../Fade";


interface CardHomeProps {
  imagem: string;
  texto: string;
  subtexto: string;
  alinhamento: 'esquerda' | 'direita'
}

export default function CardHome({ imagem, texto, subtexto, alinhamento }: CardHomeProps) {
  const TextArea = (
    <div className="flex flex-1 flex-col justify-start text-left">
      <h2 className='text-2xl font-bold text-gray-700'>{texto}</h2>
      <p className="mt-4 text-gray-600">{subtexto}</p>
    </div>
  )

  const ImageArea = (
    <div className="flex flex-1">
      <Image style={{
        filter: 'blur(0.5px)'
      }} className="rounded-lg w-120 sm:h-60 xs:h-20 h-80"
        layout="lazy"
        width='500'
        height='500'
        src={imagem} alt={texto} />
    </div>
  )


  return (
    <Fade delay={300} triggerOnce>
      <div className='flex flex-wrap flex-col md:flex-row max-w-6xl gap-4 p-6 mt-4 mb-4'>
        {
          alinhamento == 'esquerda' ? [ImageArea, TextArea] : [TextArea, ImageArea]
        }
      </div>
    </Fade>
  )
}