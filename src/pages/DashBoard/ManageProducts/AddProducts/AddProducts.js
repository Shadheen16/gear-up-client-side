import { Popover, Transition } from '@headlessui/react'
import { PlusCircleIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'
import React from 'react';
import axios from 'axios';
import { useForm, Controller } from "react-hook-form";


export default function AddProducts() {
    const { register, handleSubmit, control, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://mysterious-fjord-26460.herokuapp.com/products',data)
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    alert('added successfully');
                    reset();
                }
            })
    }
  return (
    <div className="w-full max-w-sm px-4 top-16">
      <Popover className="">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                  text-clr-primary group border-2 px-3 py-2 mx-auto rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>Add New Product</span>
              <PlusCircleIcon
                className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-green-600 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className=" z-10 w-screen max-w-sm px-4 mt-3 transform  left-1/2 sm:px-0 lg:max-w-3xl">
              <form className="grid space-y-4 max-w-lg mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <input className="py-2 px-4 border" placeholder="title" {...register("title", { required: true, maxLength: 50 })} />
                <input className="py-2 px-4 border" placeholder="decription" {...register("description", { required: true, maxLength: 500 })} />
                <input className="py-2 px-4 border" placeholder="price"  {...register("price", { required: true})} />
                <input className="py-2 px-4 border" placeholder="quantity"  {...register("quantity", { required: true})} />
                <input className="py-2 px-4 border" placeholder="image url" {...register("image_url", { required: true })} />
                <Controller
                    name="Add New Service"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => <input className="py-2 px-4 border bg-gray-600 text-white rounded-lg" type="submit" value="Add New Service" />}
                />

            </form>
                
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  )
}
