import React from 'react';
import Image from 'next/image';



const Register: React.FC = () => {
    return (
      <section className="min-h-screen flex items-stretch text-white bg-gray-700">
        <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center">
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          <div className="w-full px-24 z-10">
            <h1 className="text-5xl font-bold text-left tracking-wide">
              Register
            </h1>
            <p className="text-3xl my-4">
              Capture your personal memory in unique way, anywhere.
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0">
          <div className="w-full py-6 z-20">
            <h1 className="">
              <Image
                src="/logo.svg"
                alt=""
                width="200%"
                height="50%"
                className="rounded-lg"
              />
            </h1>
            <div className="py-6 space-x-2">
              <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">
                f
              </span>
              <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">
                G+
              </span>
            </div>
            <p className="text-gray-100">or use email your account</p>
            <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
              <div className="pb-2 pt-4">
                <input
                  className="block w-full p-4 text-lg rounded-full bg-black"
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                />
              </div>

              <div className="pb-2 pt-4">
                <input
                  className="block w-full p-4 text-lg rounded-full bg-black"
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                />
              </div>

              <div className="pb-2 pt-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="block w-full p-4 text-lg rounded-full bg-black"
                />
              </div>

              <div className="pb-2 pt-4">
                <input
                  className="block w-full p-4 text-lg rounded-full bg-black"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>

              <div className="pb-2 pt-4">
                <input
                  className="block w-full p-4 text-lg rounded-full bg-black"
                  type="number"
                  name="phone"
                  placeholder="Phone"
                />
              </div>

              <div className="pb-2 pt-4">
                <input
                  className="block w-full p-4 text-lg rounded-full bg-black"
                  type="file"
                  name="file"
                  id="password"
                  placeholder="file"
                />
              </div>
              <div className="px-4 pb-2 pt-4">
                <button className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
                  sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
};

export default Register;