// import React from 'react'
// import { Link } from 'react-router-dom'
// export function NavBar() {
//   return (
//     <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
//       <div className="flex items-center flex-shrink-0 text-white mr-6">
//         <svg
//           className="fill-current h-8 w-8 mr-2"
//           width="54"
//           height="54"
//           viewBox="0 0 54 54"
//           xmlns="http://www.w3.org/2000/svg">
//           <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
//         </svg>
//         <span className="font-semibold text-xl tracking-tight">My Work</span>
//       </div>
//       <div className="block lg:hidden">
//         <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
//           <svg
//             className="fill-current h-3 w-3"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg">
//             <title>Menu</title>
//             <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//           </svg>
//         </button>
//       </div>
//       <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
//         <div className="text-sm lg:flex-grow">
//           <Link
//             to="/"
//             className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
//             Home
//           </Link>
//           <Link
//             to="/products"
//             className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
//             Products
//           </Link>
//           <Link
//             to="/Admin"
//             className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
//             Admin
//           </Link>
//         </div>
//       </div>
//     </nav>
//   )
// }

// import { Navbar } from 'flowbite-react'

// export default function NavBar() {
//   return (
//     <Navbar fluid rounded>
//       <Navbar.Brand as={Link} href="https://flowbite-react.com">
//         <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
//         <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
//           Flowbite React
//         </span>
//       </Navbar.Brand>
//       <Navbar.Toggle />
//       <Navbar.Collapse>
//         <Navbar.Link href="/" active>
//           Home
//         </Navbar.Link>
//         <Navbar.Link as={Link} href="/products">
//           Products
//         </Navbar.Link>
//         <Navbar.Link href="/products">Products</Navbar.Link>
//         <Navbar.Link href="/Admin">Admin</Navbar.Link>
//       </Navbar.Collapse>
//     </Navbar>
//   )
// }
import React from 'react'
import { Navbar, MobileNav, Typography, Button, IconButton, Card } from '@material-tailwind/react'

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
        <a href="/Products" className="flex items-center">
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
          <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium">
            Arco
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              {/* <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                <span>Log In</span>
              </Button> */}
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
      <div className="mx-auto max-w-screen-md py-12">
        <Card className="mb-12 overflow-hidden">
          <img
            alt="nature"
            className="h-[32rem] w-full object-cover object-center"
            src="https://static.vecteezy.com/system/resources/thumbnails/004/865/921/small/programmer-people-concept-use-laptop-and-programming-code-program-icon-spreading-with-modern-flat-style-free-vector.jpg"
          />
        </Card>
        {/* <Typography variant="h2" color="blue-gray" className="mb-2">
          What is Arco?
        </Typography>
        <Typography color="gray" className="font-normal">
          Discuss your project idea and requirements with our business expert. We would analyze and
          derive technical factors to align it with your purpose and scope of your project. This
          will be critical in framing the technological framework, resource engagement, cost
          parameters, and delivery timelines to best compliment your perspective and idea of the
          solution.
        </Typography> */}
      </div>
    </div>
  )
}
