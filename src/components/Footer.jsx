import Link from "next/link";
import React from "react";
import { MdMailOutline } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-secondary-color py-6 px-20  bottom-0 left-0">
      <div className="hidden md:flex justify-between">
        <div className="flex justify-center items-center">
          <h2 className="text-white text-2xl font-semibold">Bereg Tv-Selo</h2>
        </div>
        <div className="">
          <h2 className="text-lg text-white font-semibold">Швидка Навігація</h2>
          <br />
          <ul className="text-white text-xs grid grid-cols-2 gap-2">
            <li>
              <Link href={"/about"}>Про Нас</Link>
            </li>
            <li>
              <Link href={"/taryf"}>Тарифи</Link>
            </li>
            <li>
              <Link href={"/contacts"}>Контакти</Link>
            </li>
            <li>
              <Link href={"/documents"}>Документи(договори)</Link>
            </li>
          </ul>
        </div>
        <Link
          href={"mailto:beregtvselo@gmail.com"}
          className="w-[495px] h-[128px] bg-prime-color rounded-lg grid grid-cols-1 content-center hover:skew-y-3 duration-150 cursor-pointer"
        >
          <h2 className="justify-self-center text-lg">Наша Електронна пошта</h2>
          <div className="flex justify-self-center">
            <h2 className="flex justify-between justify-self-center mr-4">
              beregtvselo@gmail.com
            </h2>
            <MdMailOutline size={"24"} />
          </div>
        </Link>
      </div>
      <div className="text-white block justify-between mt-3 md:flex">
        <h2 className=" my-1">Bereg Tv 2025 All Rights Reserved</h2>
        <h2 className=" my-1">Terms & Conditions Privacy</h2>
        <div>
          <ul className="text-gray-300 flex gap-6  my-1">
            <li>
              <Link href={"/"}>
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <RiInstagramFill />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <FaTiktok />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <FaYoutube />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
