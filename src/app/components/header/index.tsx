'use client'

import React, { useEffect, useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";


type LinksType = {
  type: 'mobile' | 'desktop'
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openedNovos, setOpenedNovos] = useState(false);
  const [openedSemiNovos, setOpenedSemiNovos] = useState(false);

  function disableDropDowns() {
    setOpenedNovos(false);
    setOpenedSemiNovos(false);
    setIsOpen(!isOpen);
  }

  const Links = ({ type }: LinksType) => {
    const style = type == "desktop" ? "text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-lg font-medium cursor-pointer"
      : "text-gray-900 hover:text-red-600 block px-3 py-2 rounded-md text-lg font-medium"
    return (
      <ul className={'flex break-normal whitespace-nowrap ' + (type == 'desktop' ? 'flex-row' : 'flex-col')}>
        <Link href="/">
          <li className={style} onClick={() => { setIsOpen(!isOpen); disableDropDowns(); }}>
            Início
          </li>
        </Link>
        {/* <li>
          <button onClick={() => {
            setOpenedNovos(!openedNovos);
            setOpenedSemiNovos(false);
          }}
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            className={style + ' flex items-center'}>Novos
            <svg className="ml-1 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
          <div id="dropdownNavbar" className={(openedNovos ? '' : 'hidden ') + 'absolute z-10 w-44 font-normal ounded divide-y shadow bg-white divide-gray-600 border-[#2e2e30] border-[1px]'}>
            <ul className="py-1 text-sm text-gray-900" aria-labelledby="dropdownLargeButton">
              <Link href="/novos/iphones">
                <li onClick={disableDropDowns}>
                  <a href="#" className="block py-2 px-4 hover:text-red-600">Iphones</a>
                </li>
              </Link>
              <Link href="/novos/macbooks">
                <li onClick={disableDropDowns}>
                  <a href="#" className="block py-2 px-4 hover:text-red-600">Macbooks</a>
                </li>
              </Link>
              <Link href="/novos/ipads">
                <li onClick={disableDropDowns}>
                  <a href="#" className="block py-2 px-4 hover:text-red-600">Ipads</a>
                </li>
              </Link>
              <Link href="/novos/apple-watch">
                <li onClick={disableDropDowns}>
                  <a href="#" className="block py-2 px-4 hover:text-red-600">Apple Watch</a>
                </li>
              </Link>
              <Link href="/novos/acessorios">
                <li onClick={disableDropDowns}>
                  <a href="#" className="block py-2 px-4 hover:text-red-600">Acessórios</a>
                </li>
              </Link>
            </ul>
          </div>
        </li> */}
        {/* <li>
          <button onClick={() => {
            setOpenedSemiNovos(!openedSemiNovos);
            setOpenedNovos(false);
          }}
            id="dropdownNavbarSemiNovos"
            data-dropdown-toggle="dropdownSemiNovos"
            className={style + ' flex items-center'}>Semi-Novos
            <svg className="ml-1 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
          <div id="dropdownSemiNovos" className={(openedSemiNovos ? '' : 'hidden ') + 'absolute z-10 w-44 font-normal rounded divide-y shadow bg-white divide-gray-600 border-[#2e2e30] border-[1px]'}>
            <ul className="py-1 text-sm text-gray-900" aria-labelledby="dropdownLargeButton">
              <Link href="/semi-novos/iphones">
                <li onClick={disableDropDowns}>
                  <a href="#" className="block py-2 px-4 hover:text-red-600">Iphones</a>
                </li>
              </Link>

            </ul>
          </div>
        </li> */}

        <Link href="/Galeria" >
          <li className={style} onClick={() => { setIsOpen(!isOpen); disableDropDowns(); }}>
            Galeria
          </li>
        </Link>

        <Link href="/sobre">
          <li className={style} onClick={() => { setIsOpen(!isOpen); disableDropDowns(); }}>
            Sobre
          </li>
        </Link>

        <Link href="/perguntas-frequentes">
          <li className={style} onClick={() => { setIsOpen(!isOpen); disableDropDowns(); }}>
            Perguntas Frequentes
          </li>
        </Link>

        <Link href="https://api.whatsapp.com/send?phone=5547992326445">
          <li className={style} onClick={() => { setIsOpen(!isOpen); disableDropDowns(); }}>
            Contato
          </li>
        </Link>

        <div className="invisible md:visible">
          <Link href="/upgrade" >
            <li className={style} onClick={() => { setIsOpen(!isOpen); disableDropDowns(); }}>
              <span className="bg-lime-600 text-white text-center py-4 px-10 m-3 rounded-md font-bold shadow-md hover:opacity-70 hover:cursor-pointer" >
                login
              </span>
            </li>
          </Link>
        </div>
      </ul>
    )
  }

  const MenuDesktop = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        <div className="flex-shrink-0 px-4 cursor-pointer">
          <Link href="/">
            <div className="flex gap-2 items-center justify-center">
              <Image src="/logo_grs.png" alt="logo" height="100" width="150" />
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Links type="desktop" />
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    )
  }

  const MenuMobile = () => {

    return (
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {() => (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Links type="mobile" />
            </div>
          </div>
        )}
      </Transition>
    )
  }



  return (
    <div>
      <nav className="bg-white p-4">
        <MenuDesktop />
        <MenuMobile />
      </nav>
    </div>
  );
}

export default Header;
