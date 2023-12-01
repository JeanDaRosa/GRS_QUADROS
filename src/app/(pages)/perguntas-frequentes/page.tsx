'use client'
import React from "react";
import { Fade } from "../../components/Fade";

export default function PerguntasFrequentes() {
  const faqs = [
    {
      question: "Há quanto tempo a GRS Quadros está no mercado?",
      answer: "A GRS Quadros está atuando no mercado há 12 anos, proporcionando serviços de esticagem, gravação de quadros, desenvolvimento de artes e impressão de fotolitos."
    }, {
      question: "Quais serviços a GRS Quadros oferece?",
      answer: "Oferecemos esticagem e gravação de quadros, além do desenvolvimento de artes e impressão de fotolitos."
    }, {
      question: "Como posso entrar em contato com a GRS Quadros?",
      answer: "Você pode nos contatar por telefone (47) 3333-3717 ou visitar nossa empresa pessoalmente. Estamos ansiosos para recebê-lo!"
    },
    {
      question: "A GRS Quadros desenvolve apenas quadros personalizados?",
      answer: "Além de quadros personalizados, oferecemos serviços de esticagem e gravação, bem como o desenvolvimento de artes e impressão de fotolitos."
    },
    {
      question: "Qual é o prazo de entrega para os serviços da GRS Quadros?",
      answer: "O prazo de entrega pode variar dependendo do serviço e da quantidade solicitada. Recomendamos entrar em contato para obter informações mais precisas sobre o prazo de entrega.",
    }
  ]
  return (
    <>
      <div className="h-full w-full justify-center items-center flex flex-col p-4 bg-gray-200">
        <h1 className="text-center font-bold text-4xl p-4 mb-6">Perguntas Frequentes</h1>
        <div className="flex flex-col pb-4 justify-center w-full gap-4 max-w-[1180px]">

          <Fade delay={300} triggerOnce>
            {faqs.map((faq, index) => {
              return (
                <div key={index} className="p-2">
                  <p className="leading-6 text-white"><strong>{faq.question}</strong></p>
                  <p className="leading-6 text-zinc-200">{faq.answer}</p>
                </div>
              )
            })}
          </Fade>
        </div>
      </div>
    </>
  )
}