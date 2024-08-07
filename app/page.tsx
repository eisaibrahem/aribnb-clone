import Image from "next/image";
import Banner from "./components/Banner";
import Explore from "./components/Explore";
import Live from "./components/Live";
import GreatestOutdoor from "./components/GreatestOutdoor";
import Footer from "./components/Footer";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col  justify-between ">
        <Banner />
        <Explore />
        <Live />
        <GreatestOutdoor
          img="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          title="The Greatest Outdoor"
          description="Wishlists curated by Airbnb."
          linkText="Get Inspired"
        />
      </main>
      <Footer />
    </>
  );
}
