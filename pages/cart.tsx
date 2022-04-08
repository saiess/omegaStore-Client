import React, {useState} from 'react';
import Image from "next/image";
import NavGlobal from "../src/layouts/navMenu/NavGlobal";
import MenuGlobal from "../src/layouts/navMenu/MenuGlobal";

const Cart = () => {
    const [active, setActive] = useState(false);
    return (
        <>
            <NavGlobal active={active} setActive={setActive}/>
            <div className="w-full h-screen flex justify-center bg-opacity-90 overflow-y-auto">
                <div
                    className="w-4/5 shadow-xl min-h-3/5 mt-28 lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 bg-white overflow-y-hidden rounded-lg">
                    <p className="lg:text-4xl text-3xl font-black leading-10 text-gray-800 dark:text-white pt-3">Cart</p>
                    <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
                        <div className="md:w-4/12 2xl:w-1/4 w-full">
                            <Image
                                src="/te.webp"
                                alt=""
                                width="100%"
                                height="100%"
                                className="rounded-lg"/>
                        </div>
                        <div className="md:pl-3 md:w-6/12 2xl:w-3/5 flex flex-col justify-center">
                            <div className="flex items-center justify-between w-full pb-3">
                                <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                                    NFT Name
                                </p>
                            </div>
                            <p className="text-xs leading-3 text-gray-600 dark:text-white pt-2">Seller: Redoune</p>
                            <p className="text-xs leading-3 text-gray-600 dark:text-white py-4">Collectioon: Black</p>
                            <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white">Category: chms</p>

                        </div>
                        <div className="flex w-72 items-center">
                            <div className="flex h-full w-full flex-col items-center">
                                <div className="flex-1">
                                    <button
                                        className="transform rounded-md bg-green-700 py-2 px-2 font-medium text-base text-white shadow transition hover:translate-y-0.5 hover:bg-gray-900 hover:shadow-lg">
                                        Collect
                                    </button>
                                    <button
                                        className="transform ml-2 rounded-md bg-red-700 py-2 px-2 font-medium text-base text-white shadow transition hover:translate-y-0.5 hover:bg-gray-900 hover:shadow-lg">Remove
                                    </button>
                                </div>
                                <p className="text-base leading-none text-gray-800">
                                  Price:  <span className="font-semibold">700 ETH</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MenuGlobal active={active} setActive={setActive}/>
        </>
    );
};

export default Cart;
