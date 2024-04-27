
import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Main from "@/components/Main/Main";
import Footer from "@/components/Footer/Footer";
import AllEvents from "@/components/AllEvents/AllEvents";

export default function Home() {
  return (
    <main >
      <div className="main">
        <Header />
        <Main />
        <Footer />
      </div>
      {/* <AllEvents /> */}
    </main>
  );
}
