import React from 'react';

const Header = () => {
    return (
        <header className="w-full flex flex-col items-center justify-between py-6 bg-main-image bg-cover bg-center bg-no-repeat min-h-screen rounded-md">
            <div className="flex flex-col gap-[0.5em] items-center h-[100px]">
                <h1 className="text-6xl font-bold">Iranian Era</h1>
                <h3 className="text-2xl">A journey through Iran's ups and downs history</h3>
                <p className="text-base">From the distant past to the present day</p>
            </div>
        </header>
    );
};

export default Header;
