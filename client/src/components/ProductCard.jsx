import React from "react";
import { Link } from "react-router-dom";
import agroimg from "../assets/illustrations/agro1.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ tour }) => {
  return (
    // <Link to={ `/details/:${tour.id}`} className='max-w-[90%] sm:max-w-sm  rounded-lg shadow hover:shadow-lg hover:scale-105 transition-all duration-300'>
    //   <div className="w-full overflow-hidden "><Link to={'/details/:id'}><img src={tour.pic} alt="" className='rounded-t-lg h-60 w-full hover:scale-105 transition-scale duration-300 ' /></Link></div>
    //   <div className="h-1/2 px-3 py-2">
    //     <div className="flex justify-between ">
    //       <div className=" flex gap-1 items-center"><IoLocationOutline size={17} style={{fill:'gold'}}  />
    //       <p>{tour.location}</p></div>
    //       <div className="flex gap-1 items-center"><FaStar size={17} style={{fill:'gold'}} />
    //       <p>{tour.rating}</p></div>
    //     </div>
    //     <h1 className='font-semibold text-xl text-[#bbad70]'>{tour.title}</h1>
    //     <div className="flex justify-between items-center">
    //       <p className='text-sm text-gray-800'><span className='text-lg font-semibold text-green-700'>${tour.amount}</span>/per person</p>
    //       <Link to={'/details/:id'} className='bg-[#009a74] bg-opacity-95 hover:bg-opacity-100 text-white text-center font-semibold px-4 py-2 rounded-md'>Book</Link>
    //     </div>
    //   </div>
    // </Link>
    <Link to={`/details/${tour.id}`} className="relative hover:scale-105 cursor-pointer bg-white  transition-all duration-300 flex w-full max-w-sm sm:max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 hover:shadow-2xl shadow-md">
      <a
        class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img className="object-cover w-full" src={tour.pic} alt="product image" />
        <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          39% OFF
        </span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">{tour.title}</h5>
        </a>
        <p className="text-sm text-gray-500 line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus nemo maiores facere ab reiciendis minus ducimus
          aperiam, tempore fugit neque?
        </p>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span class="text-2xl sm:text-3xl font-bold text-slate-900">
              ${tour.amount}
            </span>
            <span className="text-sm text-slate-900 line-through">$699</span>
          </p>
          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              5.0
            </span>
          </div>
        </div>
        <div className="flex gap-3 justify-center ">
        <Link
          to={''}
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
          Add to cart
        </Link>
        <Link
          to={''}
          className="flex items-center justify-center rounded-md bg-green-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          
          Buy now
        </Link>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
