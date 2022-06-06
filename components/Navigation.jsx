import React, {useContext} from 'react';
import Link from 'next/link';
import { Search } from 'react-bootstrap-icons'
import { Container, NavDropdown, Navbar } from 'react-bootstrap';

const categories = [
  {name: 'Tech', slug: 'tech'},
  {name: 'Art', slug: 'art'}
];

const Navigation = () => {
	return (
		<div className="container px-28 mx-auto">
			
			<nav className="flex flex-row justify-between py-10 items-center relative">
				<Navbar>
					<Container>
						<NavDropdown title="EXPLORE" id="collasible-nav-dropdown">
						{categories.map((category) => (
							<NavDropdown.Item key={category.slug} href={`/${category.slug}`} className='hover:bg-slate-600' >
								{category.name}
							</NavDropdown.Item>
						))}
						</NavDropdown>
						<NavDropdown title="SHOP" id="collasible-nav-dropdown">
							<NavDropdown.Item href='coming-soon' className='hover:bg-slate-600'>COMING SOON!</NavDropdown.Item>
						</NavDropdown>
						
					</Container>
				</Navbar>
				<span className='h-fit w-fit mx-auto absolute inset-x-1/2 flex justify-center'>
					<Link href='/'>
						<img src="logo.png" alt="logo" className='h-12' />
					</Link>
				</span>
				<div className='px-10'>
					<Search color='white' />
				</div>
			</nav>
		</div>
		
	)
}

export default Navigation