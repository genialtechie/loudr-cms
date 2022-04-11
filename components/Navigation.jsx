import React, {useContext} from 'react'
import Link from 'next/link'

const Navigation = () => {
  return (
    <div className='container mx-auto flex justify-center'>
      <Link href={'/'}>
        <img src="logo.png" alt="logo" />
      </Link>
      
    </div>
  )
}

export default Navigation