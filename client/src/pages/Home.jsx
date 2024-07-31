import React from "react";
import TourCard from "../components/TourCard";
import agroimg from "../assets/illustrations/agro1.jpg";
import Gallery from "../components/Gallery";
import CubeLoader from "../utils/loader1/CubeLoader";
import ProductDetails from "./ProductDetails";
import Footer from "../components/Footer";
import ContactUs from "./ContactUs";
import ProductCard from "../components/ProductCard";
import TourDetails from "./TourDetails";
import { IoLogoAndroid } from "react-icons/io";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <div className="bg-slate-700">
        <div className="w-full h-[30rem] home flex justify-center lg:justify-normal items-end sm:items-center bg-[#eafaeb] ">
          <div className="flex flex-col p-4 w-full ">
            <h1 className="font-bold text-4xl sm:text-7xl text-white sm:p-1">
              Welcome to our
            </h1>
            <p className="text-gray-300 text-opacity-90 text-xl sm:p-1">
              Discover the breathtaking country side
            </p>
          </div>
        </div>
        <div className="bg-[#eafaeb] flex justify-center items-center p-10">
          <ul className="flex p-2 gap-8 w-3/4 justify-center">
            <li className="list-none">
              <IoLogoAndroid className="text-5xl" />
            </li>
            <li className="list-none">
              <IoLogoAndroid className="text-5xl" />
            </li>
            <li className="list-none">
              <IoLogoAndroid className="text-5xl" />
            </li>
            <li className="list-none">
              <IoLogoAndroid className="text-5xl" />
            </li>
          </ul>
        </div>
      </div>
      <div className="p-5">
        <div className="flex flex-col md:flex-row gap-5 ">
            <img src={agroimg} className="h-96  " alt="" srcset="" />
          <div className="">
            <h1 className="font-semibold text-3xl">For Farmers</h1>
            <p className="mt-2 text-justify text-slate-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique quibusdam rerum voluptas nam ducimus! Necessitatibus
              quod voluptate unde molestias nostrum quos sapiente, error dolorem
              neque officiis. Enim a, quia commodi sint voluptate iste
              blanditiis velit sed reiciendis debitis quidem voluptates eos?
              Quod sapiente mollitia magni pariatur libero placeat impedit
              necessitatibus?
            </p>
            <Link to={'/farmer-register'}> <button className="mt-4 bg-green-600 px-10 rounded-full font-semibold text-white bg-opacity-90 hover:bg-opacity-100 py-3">Explore</button></Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-5 mt-2">
            <img src={agroimg} className="h-96  " alt="" srcset="" />
          <div className="">
            <h1 className="font-semibold text-3xl">For Farmers</h1>
            <p className="mt-2 text-justify text-slate-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique quibusdam rerum voluptas nam ducimus! Necessitatibus
              quod voluptate unde molestias nostrum quos sapiente, error dolorem
              neque officiis. Enim a, quia commodi sint voluptate iste
              blanditiis velit sed reiciendis debitis quidem voluptates eos?
              Quod sapiente mollitia magni pariatur libero placeat impedit
              necessitatibus?
            </p>
            <Link to={'corporate-register'}> <button className="mt-4 bg-green-600 px-10 rounded-full font-semibold text-white bg-opacity-90 hover:bg-opacity-100 py-3">Explore</button></Link>
          </div>
        </div>
        <div className="flex flex-col  md:flex-row gap-5 mt-2">
            <img src={agroimg} className="h-96  " alt="" srcset="" />
          <div className="">
            <h1 className="font-semibold text-3xl">For Farmers</h1>
            <p className="mt-2 text-justify text-slate-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique quibusdam rerum voluptas nam ducimus! Necessitatibus
              quod voluptate unde molestias nostrum quos sapiente, error dolorem
              neque officiis. Enim a, quia commodi sint voluptate iste
              blanditiis velit sed reiciendis debitis quidem voluptates eos?
              Quod sapiente mollitia magni pariatur libero placeat impedit
              necessitatibus?
            </p>
            <Link to={'corporate-register'}> <button className="mt-4 bg-green-600 px-10 rounded-full font-semibold text-white bg-opacity-90 hover:bg-opacity-100 py-3">Explore</button></Link>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
