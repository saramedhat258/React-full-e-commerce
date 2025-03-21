/* eslint-disable react/prop-types */

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
function MobileFilter({ categories, prices, setSelectedCat, setSelectedPrice }) {

    return (
        <>
            <section className="lg:hidden flex justify-between mx-auto my-5">
                <Menu as="div" className="relative inline-block text-left">
                    <div className="">
                        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            Category
                            <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                        </MenuButton>
                    </div>

                    <MenuItems transition className="absolute z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                        <div className="py-1">
                            {
                                categories.map((cat, index) => (
                                    <MenuItem key={index}>
                                        <a
                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                            onClick={() => setSelectedCat(cat.name)}
                                        >
                                            {cat.name}
                                        </a>
                                    </MenuItem>
                                ))
                            }
                        </div>
                    </MenuItems>
                </Menu>

                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            Price
                            <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                        </MenuButton>
                    </div>

                    <MenuItems transition className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                        <div className="py-1">
                            {
                                prices.map((p,index) => (
                                    <MenuItem key={index}>
                                        <a
                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                            onClick={()=>setSelectedPrice(p)}
                                        >
                                            {p}
                                        </a>
                                    </MenuItem>
                                ))
                            }
                        </div>
                    </MenuItems>
                </Menu>
            </section>
        </>
    )
}

export default MobileFilter