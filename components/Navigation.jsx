import React, {useContext} from 'react';
import Link from 'next/link';

const categories = [
  {name: 'Tech', slug: 'tech'},
  {name: 'Art', slug: 'art'}
];

const Navigation = () => {
	return (
		<div className="container mx-auto flex flex-col">
			<div className='container mx-auto flex justify-center'>
				<Link href='/'>
					<img src="logo.png" alt="logo" />
				</Link>
			</div>
			<nav className="flex flex-row justify-around px-10 pb-10 items-center">
					{categories.map((category) => (
						<Link key={category.slug} href={`/${category.slug}`} >
							{category.name}
						</Link>
					))}
			</nav>
		</div>
		
	)
}

export default Navigation