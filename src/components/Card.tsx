import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

// Define the props type for the Card component
interface CardProps {
    name: string;
    title: string;
    img: StaticImageData;
}

const Card: React.FC<CardProps> = ({ name, title, img }) => (
    <div className="w-[18rem] h-[30rem] max-w-sm flex flex-col justify-between items-center gap-0 p-[1em]">
        <Image className="w-[70%] h-[70%] object-cover rounded-full shadow-lg" src={img} alt={`${name} image`} />
        <h5 className=" text-xl font-medium text-gray-900 ">{name}</h5>
        <span className="text-sm text-gray-500 ">{title}</span>
        <div className="flex justify-end w-full">
            <Link href="#"
                className="inline-flex items-center px-[2em] py-2 text-sm font-medium text-center text-white bg-accent rounded-md hover:bg-accent-dark duration-200">More</Link>
        </div>
    </div>
);

export default Card;
