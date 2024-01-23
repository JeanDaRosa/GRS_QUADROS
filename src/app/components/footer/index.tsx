'use client'

import Image from "next/image";
import Link from "next/link";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { BsFacebook, BsInstagram, BsPhone, BsEnvelope } from "react-icons/bs";

export default function Footer() {

  return (
    <footer className="p-4 bg-gray-100 sm:p-6 border-t-2">
      <div className="md:flex md:justify-between max-w-[1280px]  m-auto px-12">
        <div className="mb-6 md:mb-0">
          <a href="#" className="flex items-center">
            <Image alt="Image Logo" src="/logo_grs.png" width="150" height="150" />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Achei Meu Apple</span> */}
          </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-600">Navegação</h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-1">
                <Link legacyBehavior href="/">
                  <a className="hover:underline ">Início</a>
                </Link>
              </li>
              <li className="mb-1">
                <Link legacyBehavior href="/sobre">
                  <a className="hover:underline ">Sobre</a>
                </Link>
              </li>
              <li className="mb-1">
                <Link legacyBehavior href="/perguntas-frequentes">
                  <a className="hover:underline ">Perguntas Frequentes</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-600">Contato</h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-1">
                <a href="tel:(47) 3333-3717" className="hover:underline flex gap-2 items-center"><BsPhone className="h-4 w-4 text-red-600" />(47) 3333-3717</a>
              </li>
              <li className="mb-1">
                <a href="tel:(47) 3333-3717" className="hover:underline flex gap-2 items-center"><BsPhone className="h-4 w-4 text-red-600" />(47) 3306-7682</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-600">Financeiro</h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="break-all">
                <a href="mailto:financeiro@grsquadros.com.br" className="hover:underline flex gap-2 items-center">
                  <BsEnvelope className="h-4 w-4 text-red-600" />financeiro@grsquadros.com.br</a>
              </li>
              <li className="break-all">
                <a href="mailto:claudete@grsquadros.com.br" className="hover:underline flex gap-2 items-center">
                  <BsEnvelope className="h-4 w-4 text-red-600" />claudete@grsquadros.com.br</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-600">Desenvolvimento</h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="break-all">
                <a href="mailto:mayara@grsquadros.com.br" className="hover:underline flex gap-2 items-center">
                  <BsEnvelope className="h-4 w-4 text-red-600" />mayara@grsquadros.com.br</a>
              </li>
              <li className="break-all">
                <a href="mailto:janaina@grsquadros.com.br" className="hover:underline flex gap-2 items-center">
                  <BsEnvelope className="h-4 w-4 text-red-600" />janaina@grsquadros.com.br</a>
              </li>
              <li className="break-all">
                <a href="mailto:jessica@grsquadros.com.br" className="hover:underline flex gap-2 items-center">
                  <BsEnvelope className="h-4 w-4 text-red-600" />jessica@grsquadros.com.br</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-600">Redes</h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-1">
                <a href="https://www.facebook.com/GrsQuadros" className="flex gap-2 items-center"><BsFacebook className="h-4 w-4 text-red-600" /> Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com/grs_quadros/" className="flex gap-2 items-center"><BsInstagram className="h-4 w-4 text-red-600" /> Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <FloatingWhatsApp
        phoneNumber="554733333717"
        // phoneNumber="4792326445" 
        accountName="GRS Quadros"
        avatar="/logo_grs.png"
        darkMode
        chatMessage="Olá, como podemos te ajudar ?"
        placeholder="Escreva aqui"
        statusMessage="Entre em contato abaixo"
      />
    </footer>
  )
}