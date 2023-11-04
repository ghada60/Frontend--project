import React from 'react'

import { Navbar, MobileNav, Typography, IconButton } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
export default function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false))
  }, [])

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="/" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="/ProductsDetails" className="flex items-center">
          Products
        </a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="/Admin" className="flex items-center">
          Adimn
        </a>
      </Typography>
    </ul>
  )

  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-hidden">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography as="a" variant="small" color="blue-gray" className="p-1 font-meduim">
            Arco
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Link to={`LogIn/`}>
                <button
                  // onClick={() => dispatch(setProduct(product))}
                  className="mt-1 text-lg font-medium text-white-900">
                  Log In
                </button>
              </Link>
            </div>
            <div className="flex items-center gap-x-1">
              <Link to={`Cart/`}>
                <button className="mt-1 text-lg font-medium text-white-900">Cart</button>
              </Link>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}>
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1"></div>
        </MobileNav>
      </Navbar>
      <div className="mx-auto max-w-screen-md py-12"></div>
    </div>
  )
}
