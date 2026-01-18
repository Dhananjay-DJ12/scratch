"use client";

import Image from "next/image";
import { memo } from "react";

import { navElements } from "@/constants";
import { ActiveElement, NavbarProps } from "@/types/type";

import { Button } from "./ui/button";
import ShapesMenu from "./ShapesMenu";
import ActiveUsers from "./users/ActiveUsers";
import { NewThread } from "./comments/NewThread";

import logo from "../public/assets/LOGOO.png";

const Navbar = ({
  activeElement,
  imageInputRef,
  handleImageUpload,
  handleActiveElement,
}: NavbarProps) => {
  const isActive = (value: string | Array<ActiveElement>) =>
    (activeElement && activeElement.value === value) ||
    (Array.isArray(value) &&
      value.some((val) => val?.value === activeElement?.value));

  return (
    <nav className='md1:grid md1:grid-cols-3 select-none md1:items-stretch md1:bg-transparent 
    text-white md1:mb-[10px] sm1:bg-primary-black sm1:flex sm1:items-center sm1:justify-between 
    sm1:gap-4 max-sm1:flex max-sm1:justify-center'>
      <div className='md1:justify-self-start md1:bg-primary-black md1:flex md:w-[220px] lg:w-[250px]
      md1:items-center pl-5 sm:bg-transparent max-sm1:hidden' style={{ borderBottomRightRadius: '20px' }}>
        <Image
          src={logo}
          alt='SCR@TCH'
          width={120}
          height={40}
        />
      </div>
      
      <div className="md1:justify-self-center md1:bg-primary-black md1:px-[20px] md2:px-[40px] lg:px-[70px]
      sm1:bg-transparent"
      style={{ borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
        <ul className='flex flex-row'>
          {navElements.map((item: ActiveElement | any) => (
            <li
              key={item.name}
              onClick={() => {
                if (Array.isArray(item.value)) return;
                handleActiveElement(item);
              }}
              className={`group flex items-center justify-center px-2.5 py-5
              ${isActive(item.value) ? "bg-primary-green" : "hover:bg-primary-grey-200"}`}>
              {/* If value is an array means it's a nav element with sub options i.e., dropdown */}
              {Array.isArray(item.value) ? (
                <ShapesMenu
                  item={item}
                  activeElement={activeElement}
                  imageInputRef={imageInputRef}
                  handleActiveElement={handleActiveElement}
                  handleImageUpload={handleImageUpload}
                />
              ) : item?.value === "comments" ? (
                // If value is comments, trigger the NewThread component
                <NewThread>
                  <Button className='relative h-5 w-5 object-contain'>
                    <Image
                      src={item.icon}
                      alt={item.name}
                      fill
                      className={isActive(item.value) ? "invert" : ""}
                    />
                  </Button>
                </NewThread>
              ) : (
                <Button className='relative h-5 w-5 object-contain'>
                  <Image
                    src={item.icon}
                    alt={item.name}
                    fill
                    className={isActive(item.value) ? "invert" : ""}
                  />
                </Button>
              )}
            </li>
          ))}
        </ul>
      </div>

      
      
      <div className="md1:justify-self-end md:w-[220px] lg:w-[250px] md1:flex md1:items-center md1:justify-end 
      md1:bg-primary-black px-5 sm1:bg-transparent max-sm1:hidden" style={{ borderBottomLeftRadius: '20px' }}>
        <ActiveUsers />
      </div>
      
    </nav>
  );
};

export default memo(
  Navbar,
  (prevProps, nextProps) => prevProps.activeElement === nextProps.activeElement
);
