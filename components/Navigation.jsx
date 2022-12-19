import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, Person, Bag } from 'react-bootstrap-icons'
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
    <div className="container relative mx-auto px-16 lg:px-28">
      <span className="mx-auto mt-8 block h-fit w-fit hover:cursor-pointer lg:absolute lg:inset-x-0 lg:-top-6">
        <Link href="/">
          <Image src={Logo} alt="logo" width={40} height={50} />
        </Link>
      </span>
      <nav className="mt-8 mb-8 flex flex-row items-center justify-between rounded-lg py-2 shadow-lg lg:my-8">
        <Navbar>
          <Container>
            <NavDropdown title="EXPLORE" id="collasible-nav-dropdown">
              {categories.map((category) => (
                <NavDropdown.Item
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="hover:bg-slate-800"
                >
                  {category.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown title="SHOP" id="collasible-nav-dropdown">
              <NavDropdown.Item
                href="coming-soon"
                className="hover:bg-slate-800"
              >
                COMING SOON!
              </NavDropdown.Item>
            </NavDropdown>
          </Container>
        </Navbar>

        <div className="flex flex-row px-10">
          <Search
            className="svg-icon mx-3 cursor-pointer"
            height={20}
            width={20}
            color="currentColor"
            onClick={() => setShow(true)}
          />
          <Person
            className="svg-icon mx-3 scale-110 cursor-pointer"
            height={20}
            width={20}
            color="currentColor"
          />
          <Bag
            className="svg-icon mx-3 cursor-pointer"
            height={20}
            width={20}
            color="currentColor"
          />
        </div>
      </nav>
      <SearchModal show={show} hide={() => setShow(false)} />
    </div>
  )
}

export default Navigation
