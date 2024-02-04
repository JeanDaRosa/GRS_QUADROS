'use client'
import React from "react";
import { Fade } from "../../components/Fade";

export default function PerguntasFrequentes() {
  const faqs = [
    {
      question: "Há quanto tempo a GRS Quadros está no mercado?",
      answer: "A GRS Quadros está atuando no mercado desde 2005, proporcionando serviços de esticagem, gravação de quadros, desenvolvimento de artes e impressão de fotolitos."
    }, {
      question: "Quais serviços a GRS Quadros oferece?",
      answer: "Oferecemos esticagem e gravação de quadros, além do desenvolvimento de artes e impressão de fotolitos."
    }, {
      question: "Como posso entrar em contato com a GRS Quadros?",
      answer: "Você pode nos contatar pelos telefones (47) 3333-3717 ou  (47) 3306-7682 ou visitar nossa empresa pessoalmente. Estamos ansiosos para recebê-lo!"
    }, {
      question: "A GRS atende pelo WhatsApp?",
      answer: "Sim, pelo número (47) 3333-3717"
    },
    {
      question: "A GRS Quadros desenvolve apenas quadros personalizados?",
      answer: "Sim, todos os quadros que nossos clientes enviam para o estoque antes de mais nada são desgravados, assim mantemos a agilidade na gravação e jamais é passado um quadro com sua estampa para outro cliente, bem como as artes que nem mesmo é divulgada ou exposta para que nada atrapalhe o lançamento de suas coleções."
    },
    {
      question: "Qual é o prazo de entrega para os serviços da GRS Quadros?",
      answer: "Nosso prazo normal é de 2 dias úteis após estar tudo certo com a arte e os quadros estarem na empresa, sabemos que a agilidade é um ponto importante no ramo têxtil, e prezamos para que nossos cliente recebam os quadros o quanto antes, mas a nossa prioridade é a qualidade, por isso as vezes o prazo pode acabar se estendendo um pouco, por exemplo se um quadro não passar na inspeção de qualidade, ele será refeito antes de ser entregue e assim acaba atrasando, não se preocupe, você poderá acompanhar o andamento de seus quadros pela área do cliente.",
    },
    {
      question: "Posso fazer um cancelamento de gravação pelo WattsApp ou e-mail?",
      answer: "Não, no caso de cancelamentos ou alteração depois de aprovada a gravação pedimos que  nos liguem, pois tanto as mensagens de WhatsApp quanto os e- mails são vistos por ordem de recebimento, então até chegarmos na sua solicitação o quadro já pode ter sido emulsionado ou até mesmo gravado.",
    },
    {
      question: "Até que momento posso cancelar uma gravação sem ter custos?",
      answer: "Até o quadro ser emulsionado, depois deste processo faltaria apenas a revelação do mesmo, sendo assim o material necessário para a gravação já teria sido usado e o processo restante seria pequeno, por isso pedimos que nos liguem no caso de necessidade, neste momento informaremos em que processo o quadro está.",
    },
    {
      question: "O que é a área do cliente?",
      answer: "Pensando sempre na agilidade para nossos clientes, desenvolvemos um sistema que leva em tempo real as informações de como estão as suas gravações, você pode consultar se um quadro já entrou em produção, se já foi gravado ou está pronto.",
    },
    {
      question: "Como posso ter acesso a área do cliente?",
      answer: "Todos os nossos clientes cadastrados tem a liberdade de solicitar seu login e senha para ter acesso ao sistema, entre em contato com Mayara ou Janaina e peça o seu.",
    }
  ]
  return (
    <>
      <div className="h-full w-full justify-center items-center flex flex-col p-4 bg-gray-200">
        <h1 className="text-center font-bold text-4xl p-4 mb-6 text-gray-800">Perguntas Frequentes</h1>
        <div className="flex flex-col pb-4 justify-center w-full gap-4 max-w-[1180px]">

          <Fade delay={300} triggerOnce>
            {faqs.map((faq, index) => {
              return (
                <div key={index} className="p-2">
                  <p className="leading-6 text-gray-800"><strong>{faq.question}</strong></p>
                  <p className="leading-6 text-zinc-600">{faq.answer}</p>
                </div>
              )
            })}
          </Fade>
        </div>
      </div>
    </>
  )
}
