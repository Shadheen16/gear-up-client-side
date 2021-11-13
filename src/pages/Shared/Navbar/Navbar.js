import { Fragment, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Logo from '../Logo/Logo';
import useAuth from '../../../Hooks/useAuth'
import { ViewGridIcon} from '@heroicons/react/solid'
import './Navbar.css'

const navigation = [
  { name: 'HOME', link: '/', current: false },
  { name: 'ALL PRODUCTS', link: '/all-products', current: false },
  { name: 'DASHBOARD', link: '/dashboard', current: false },
  { name: 'REGISTER', link: '/register', current: false },

];


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const { user, logOut } = useAuth();
  const [whiteNav, setWhiteNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setWhiteNav(true);
      } else {
        setWhiteNav(false);
      }
    })
    // return () => {
    //   window.removeEventListener("scroll")
    // }
  }
    , [])
  return (
    <Disclosure as="nav" className={`${whiteNav ? "sm:mt-0 fixed top-0 w-full  z-50  mr-auto rounded-sm bg-clr-nav text-gray-400 tracking-wider antialiased-subpixel border-b-2 border-white ring-2 ring-white ring-opacity-50 md:px-10  transform transition-all duration-500 ease-in shadow-md sm:w-[100%] sm:left-[0%]" : "absolute top-0 w-full sm:left-[5%] z-50 sm:w-[90%] mr-auto rounded-sm bg-clr-nav border-b-2 border-clr-secondary text-gray-400 tracking-wider antialiased-subpixel sm:mt-10 md:px-10  transform transition-all duration-500 ease-in"}`}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
              <div className="mx-auto sm:mx-0 sm:mr-auto">
                <Logo />
              </div>
              <div className="flex ">
                <div className="hidden sm:inline-flex sm:items-center ">
                  <div className="flex space-x-4 md:space-x-10 mr-10 lg:space-x-20 ">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.link}
                        activeClassName="active"
                        className="text-[2vh] hover:text-clr-secondary transform transition duration-300 ease-out"
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {
                  user?.email && <button
                    type="button"
                    className="bg-red-400 lg:hidden p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>

                  </button>
                }

                {/* Profile dropdown */}


                <div className="flex"> <p className="mr-2 text-white font-bold hidden lg:block">
                </p><Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="grid grid-cols-2 gap-1 p-1 rounded-full place-items-center hover:text-secondary active:scale-90 transform transition-all duration-300 ease-in-out">
                        <div><ViewGridIcon className="text-gray-500 h-6 w-6 my-auto"></ViewGridIcon></div>
                        <div>{
                          user.email && <img
                            className="h-8 w-8 rounded-full"
                            src={user.photoURL}
                            alt=""
                          />
                        }</div>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute  right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item className="">
                          <button className="hover:text-secondary text-center">
                            <Link className='block w-full px-4 py-2 text-sm text-gray-700 ' to="/my-account">
                              My Account
                            </Link>
                          </button>
                        </Menu.Item>
                        <Menu.Item>
                          <button>
                            <Link className='block w-full px-4 py-2 text-sm text-gray-700 hover:text-secondary' to="/register">
                              Create Account
                            </Link>
                          </button>

                        </Menu.Item>
                        <Menu.Item>
                          {
                            user?.email ? <button
                              onClick={logOut}
                              className='block w-full px-4 py-2 text-sm text-gray-700 hover:text-secondary'
                            >
                              Sign out
                            </button> : <Link to="/login">
                              <button
                                className='block w-full px-4 py-2 text-sm text-gray-700 hover:text-secondary'
                              >
                                Login
                              </button>
                            </Link>
                          }
                        </Menu.Item>

                      </Menu.Items>
                    </Transition>
                  </Menu></div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-500 hover:translate-x-2 transition-all duration-300 ease-out hover:text-gray-700',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
