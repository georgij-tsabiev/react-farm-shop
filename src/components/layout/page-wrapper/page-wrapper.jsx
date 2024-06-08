import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import MainPage from "../../pages/main-page/main-page";
import "./style";

function PageWrapper({ ...prop }) {
  return (
    <>
      <Header />
      <Main>
        <MainPage {...prop} />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
