import Banner from "@/components/home-banner/Banner";
import Navbar from "@/components/navbar/Navbar";
import PopularProduct from "@/components/popular-product/PopularProduct";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Banner></Banner>

      <PopularProduct></PopularProduct>
    </main>
  );
}
