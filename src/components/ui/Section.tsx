import React from 'react';
import cyrusImage from '../../../public/Images/cyrus.jpg';
import khosrowImage from '../../../public/Images/khosrow.jpg'
import dariushImage from '../../../public/Images/dariush.jpg'
import bahramV from '../../../public/Images/bahram-V.jpg'
import shapourII from '../../../public/Images/shapour-II.jpeg'
import mehrdadI from '../../../public/Images/mehrdad.jpg'
import hormizdIV from '../../../public/Images/hormizd-IV.jpg'
import cyrusIII from '../../../public/Images/koroush-kochak.jpg'
import shapourI from '../../../public/Images/shapur-I.jpg'
import dariushIII from '../../../public/Images/dariushIII.jpg'

import { StaticImageData } from 'next/image';
import Card from './Card';

// Define the type for card data
interface CardData {
    name: string;
    title: string;
    img: StaticImageData;
}

const Section: React.FC = () => {
    const cardsData: CardData[] = [
        { name: 'Cyrus the Great', title: 'King of the Achaemenid period', img: cyrusImage },
        { name: 'Khosrow I', title: 'King of the Sasanian Empire', img: khosrowImage },
        { name: 'Darius the Great', title: 'King of the Achaemenid period', img: dariushImage },
        { name: 'Bahram V', title: 'King of the Sasanian Empire', img: bahramV },
        { name: 'Shapur II', title: 'King of the Sasanian Empire', img: shapourII },
        { name: 'Mehrdad I', title: 'King of the Parthian Empire', img: mehrdadI },
        { name: 'Hormizd IV', title: 'King of the Sasanian Empire', img: hormizdIV },
        { name: 'Cyrus the Younger', title: 'Persian Prince', img: cyrusIII },
        { name: 'Shapur I', title: 'King of the Sasanian Empire', img: shapourI },
        { name: 'Darius III', title: 'King of the Achaemenid period', img: dariushIII },
    ];

    return (
        <div className='flex flex-col w-full px-7 items-center '>
            <div className='text-center w-[50%] mb-[4em]'>
                <h2 className='text-accent text-5xl font-bold'>
                    The best Iranian kings
                </h2>
                <h3>
                    In the ancient land of Iran, many kings have reigned over it,
                    but some of them were very popular among the people,
                    which originated from their actions and also their behavior with the people.
                </h3>
            </div>
            <div className='w-full flex justify-evenly items-center flex-wrap'>
                {cardsData.map((card, index) => (
                    <Card key={index} name={card.name} title={card.title} img={card.img} />
                ))}
            </div>
        </div>
    );
};

export default Section;
