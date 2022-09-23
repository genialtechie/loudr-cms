import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Search } from 'react-bootstrap-icons'
import { Container, NavDropdown, Navbar } from 'react-bootstrap'
import { getCategories } from '../services'
import SearchModal from './SearchModal'
import Image from 'next/image'
import Logo from '../public/logo.png'

const Navigation = () => {
  const [categories, setCategories] = useState([])
  const [show, setShow] = useState(false)

  useEffect(() => {
    getCategories().then((categories) => setCategories(categories))
  })
  return (
    <div className="container mx-auto px-16 lg:px-28">
      <Head>
        <title>Loudr</title>
        <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
      </Head>
      <span className=" mt-20 flex h-fit w-full flex-row justify-center hover:cursor-pointer">
        <Link href="/">
          <Image src={Logo} alt="logo" width={40} height={60} />
        </Link>
      </span>
      <nav className="mt-12 mb-8 flex flex-row items-center justify-between rounded-lg py-2 shadow-lg lg:my-8">
        <Navbar>
          <Container>
            <NavDropdown title="EXPLORE" id="collasible-nav-dropdown">
              {categories.map((category) => (
                <NavDropdown.Item
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="hover:bg-slate-600"
                >
                  {category.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown title="SHOP" id="collasible-nav-dropdown">
              <NavDropdown.Item
                href="coming-soon"
                className="hover:bg-slate-600"
              >
                COMING SOON!
              </NavDropdown.Item>
            </NavDropdown>
          </Container>
        </Navbar>

        <div className="px-10">
          <Search
            className="a cursor-pointer"
            color="white"
            onClick={() => setShow(true)}
          />
        </div>
      </nav>
      <SearchModal show={show} hide={() => setShow(false)} />
    </div>
  )
}

export default Navigation
