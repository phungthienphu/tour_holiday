import Image from "next/image";
import DetailPr from "./components/detail/page";
import Adventure from "./components/homepage/adventure/page";
import HomePage from "./components/homepage/page";
import Footer from "./layout/footer.m";
import ModalImage from "./utils/ModalImage/page";

export default function Home() {
  return (
    <>
      <HomePage />
      {/* <DetailPr /> */}
      <Footer />
      {/* <ModalImage /> */}
    </>
  );
}
