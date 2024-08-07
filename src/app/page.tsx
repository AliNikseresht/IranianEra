import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-main-image bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col justify-evenly items-center h-[200px]">
        <h1 className="text-6xl font-bold">عصر ایران</h1>
        <h3 className="text-2xl">سفری در تاریخ پر فراز و نشیب ایران</h3>
        <p className="text-base">از گذشته‌های دور تا به امروز</p>
      </div>
    </main>
  );
}
