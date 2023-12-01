'use client'

import Head from "next/head";
import { Fade } from "../../components/Fade";
import { SiIcon } from 'react-icons/si'
import { ImWrench } from "react-icons/im";
import { BiCheckCircle, BiSupport } from "react-icons/bi";
import { AiOutlineDropbox } from "react-icons/ai";
import { FaStamp } from "react-icons/fa";
import { BsBatteryCharging, BsHandThumbsUp } from "react-icons/bs";
import { MdOutlineTabletMac } from "react-icons/md";
import { ReactNode } from "react";

export default function Sobre() {

  type ConteudoProps = {
    // titulo: string,
    descricao: string,
    // icone: ReactNode
  }[];


  const conteudo: ConteudoProps = [
    {
      descricao: 'Em novembro de 2005 a GRS quadros abriu suas portas, inicialmente nos fundos da casa do Aldori Ramos e da Claudete Marcon Ramos na rua 8 de novembro no bairro carijós em Indaial, ele era mecânico na Teka a 20 anos e ela era costureira na Maju a 12 anos, o casal tinha um sócio, Ademar Ramos irmão do Sr. Aldori. Foi o Ademar quem teve a ideia de abrir uma gravação de quadros e o casal aceitou o desafio.',
    },

    {
      descricao: "Tínhamos um espaço limitado, trabalhávamos com modéstia e dedicação, sempre valorizando cada cliente e nos dedicando ter a melhor qualidade, na época os quadros na nossa região eram esticados de forma manual, como nosso objetivo sempre foi entregar a melhor qualidade possível, o Aldori se dedicou a estudar e encontrar uma forma melhor, foi então que ele ficou sabendo sobre o sistema de pinças, com a experiência em mecânica ele mesmo montou as próprias pinças, o que melhorou muito nossa qualidade e aumentou consideravelmente nossa lista de clientes já que fornecíamos então um produto de alta qualidade e isso mudou tudo."
    },
    {
      descricao: "A empresa então começou a invadir parte da casa, e nos vimos tendo a necessidade de expansão, então em 2010 compraram um terreno na rua 7 de setembro, onde foi construída a empresa, na época tínhamos muito espaço sobrando, já em 2011 se viu a necessidade de expandir para os fundos tomando conta de todo o terreno.",
    },
    {
      descricao: "Em 2012 por uma decisão em conjunto o Aldori e a Claudete compraram a parte do Ademar na empresa, sendo assim a sociedade foi desfeita e a empresa passa a ser apenas do casal."
    },
    {
      descricao: "Em 2013 tivemos mais uma vez a necessidade de expansão, onde a empresa hoje conta com um anexo no 2º andar."
    },
    {
      descricao: "Foi em 2013 também que a GRS decidiu automatizar a empresa, fomos pioneiros em gravação de quadros a trabalhar com sistema, criamos nosso próprio sistema que está em constante evolução para melhor atender nossos clientes, sabemos o quão rápido é o ramo têxtil e visando sempre melhorar em 2023 decidimos dar mais um passo nessa evolução e levar o acesso aos nossos clientes, assim todos os clientes tem hoje facilidade de acompanhar o processo de gravação e entrega de seus quadros, disponibilizando assim um trabalho mais ágil, assertivo e transparente."
    },
    {
      descricao: "A GRS quadros sempre foi uma empresa familiar, onde as 2 filhas Mayara Thais Ramos Prado e Janaina Tamires Ramos sempre estiverem acompanhando os passos dos pais."
    },
    {
      descricao: "Juntos estamos constantemente buscando melhorar cada processo e levar a melhor qualidade no menor tempo possível, tudo sempre para melhor lhe atender."
    },
    {
      descricao: "Nosso muito obrigado a você cliente, que confia em nós para ajudar você a produzir as melhores peças."
    }
  ]

  return (
    <>
      <Head>
        <title>GRS Quadros - Sobre</title>
      </Head>
      <div className="h-full w-full justify-center items-center flex flex-col p-4 ">
        <h1 className="text-center font-bold text-4xl p-4 mb-6">Sobre</h1>
        <div className="pb-16 justify-center items-center gap-4 flex flex-wrap max-w-[1180px] text-center">
          {conteudo.map((item, idx) => {
            return (
              <div key={idx} >
                {/* <Fade delay={300} triggerOnce> */}

                <div className="flex p-4 items-center justify-center text-red-700">
                  <p className="text-black bg-red">{item.descricao}</p>
                </div>
                {/* </Fade> */}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}