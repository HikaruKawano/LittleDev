import React from "react";
import NavBar from "../components/organisme/navBar";
import Container from "../components/atom/container";
import Footer from "../components/organisme/footer";
import Card from "../components/atom/card";
import Title from "../components/atom/title";
import Text from "../components/atom/text";
import Image from "../components/atom/image";
import { Img1 } from "../assets";
import Colors from "../components/color/colors";
import Btn from "../components/atom/btn";
import icons from "../assets/icons/download-outline.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Download: React.FC = () => {
  
  const functionThatReturnPromise = () => new Promise(resolve => setTimeout(resolve, 3000));
  
  const notify = () => {
    toast.promise(
      functionThatReturnPromise,
      {
        pending: 'Download em andamento ...',
        success: 'Download completo',
        error: 'Promise rejected 🤯'
      }
  )
  }


  return (
    <>
      <NavBar />
      <Container
        resMargin="0"
        resAlign="center"
        resWidth="100%"
        resPadding="0"
        resJustify="center"
        height="100%"
        padding="10px 0 45px 0"
      >
        <Card
          flexDirection="row"
          margin="0 0 50px 0"
          resPadding="30px"
          resFlexDirection="column-reverse"
        >
          <Container background={Colors.background2} resHeight="100%">
            <Title margin="45px 0 0 0" textAlign="center">
              BAIXE O LITLLEDEV PARA SEU DISPOSITIVO
            </Title>
            <Text margin="10px 0 25px 0">
              Baixe agora o nosso aplicativo e comece a desfrutar de todas as
              funcionalidades que a LittleDev tem a oferecer!
            </Text>
            <Btn
              bg={Colors.verde}
              pd="10px"
              onClick={notify}
              display="flex"
              align="center"
              justify="center"
            >
              <Image
                src={icons}
                align="center"
                justify="center"
                margin=" 0 10px 0 10px"
                height="23px"
                resHeight="23px"
                resMargin="0 10px 0 10px"
                resMinWidth="auto"
                resWidth="auto"
              />
              <Text color={Colors.preto} fontSize="larger" margin=" 0 10px 0 0">
                Download
              </Text>
            </Btn>
          </Container>
          <Image src={Img1} />
        </Card>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="dark"
        />
      </Container>
      <Footer />
    </>
  );
};

export default Download;
