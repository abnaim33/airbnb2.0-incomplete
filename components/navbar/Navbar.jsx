
import React, { useEffect } from 'react'
import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'
import { useSession, signIn, signOut } from 'next-auth/react'
// import { useSession } from "next-auth/client"
const Navbar = () => {
    const { data: session, status } = useSession();

    console.log(session)

    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="
          py-4 
          border-b-[1px]
        ">

                {/* <Container> */}
                <div className='max-w-[2520px] mx-auto xl:px-20 md:px-1o sm:px-2 px-4'>
                    <div
                        className=" flex flex-row items-center  justify-between gap-3 md:gap-0
          "
                    >
                        <Logo />
                        <Search />
                        <UserMenu />

                    </div>
                </div>
                {/* </Container> */}
            </div>
        </div>
    )
}

export default Navbar