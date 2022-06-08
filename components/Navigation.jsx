import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { Search } from 'react-bootstrap-icons'
import { Container, NavDropdown, Navbar } from 'react-bootstrap';
import { getCategories } from '../services';
import SearchModal from './SearchModal';

const Navigation = () => {
	const [categories, setCategories] = useState([]);
	const [show, setShow] = useState(false);

	useEffect(() => {
		getCategories().then(categories => setCategories(categories))
	}, )
	return (
		<div className="container px-16 lg:px-28 mx-auto">
			<nav className="shadow-lg rounded-lg flex flex-row justify-between py-2 mt-20 mb-8 lg:my-8 items-center relative">
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
				<span className='h-fit w-fit mx-auto absolute inset-x-1/2 -top-14 lg:top-3 flex justify-center'>
					<Link href='/'>
						<img src="logo.png" alt="logo" className='h-12' />
					</Link>
				</span>
				<div className='px-10'>
					<Search color='white' onClick={() => setShow(true)}/>
				</div>
			</nav>
			<SearchModal show={show} hide={() => setShow(false)} />
		</div>
		
	)
}

export default Navigation