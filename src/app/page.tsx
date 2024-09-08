import Header from "@/components/ui/home/HomeHeader";
import Section from "@/components/ui/home/HomeSection";



export default function Home() {
  return (
    <main className="w-full flex h-full flex-col items-center justify-between p-2">
      <Header />
      <Section />
    </main>
  );
}
