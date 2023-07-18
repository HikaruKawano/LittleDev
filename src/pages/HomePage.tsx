import React from "react";
import NavBar from "../components/organisme/navBar";
import Contents from "../components/organisme/content";
import Footer from "../components/organisme/footer";
import Home from "../components/organisme/home";

const HomePage: React.FC = () => {
  return(
    <>
      <div className="container">
        <NavBar></NavBar>
        <section>
          <Home />
          <Contents/>
        </section>
        <Footer />

      </div>
      
    </>
  );
};

export default HomePage;
