import Footer from "@/components/base/Footer/Footer";
import Header from "@/components/base/Header/Header";
import Marquee from "@/components/base/Marqee/Marqee";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Marquee />
      <Header />
      <main className="min-h-screen flex justify-center items-center">
        Hero Section
      </main>
      <Footer />

    </>
  );
}
