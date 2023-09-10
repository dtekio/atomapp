import React from "react";
import { Container, Icon, Divider } from "semantic-ui-react";
import Head from "next/head";
import NavBar from "../components/Navbar";

const Layout = (props) => {
  return (
    <div>
      <Container>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.5.0/semantic.min.css"
          ></link>
          <link rel="stylesheet" href="/styles/global.css" />
          <title>Atom App</title>
          <link rel="icon" href="favicon.ico" />
        </Head>
        <NavBar />

        {props.children}

      </Container>
        <footer>
          <div>
            <Icon size='big' link name="instagram" />
            <Icon size='big' link name="whatsapp" />
            <Icon size='big' link name="linkedin" />
            <Divider />
            <p>© Copyright 2023 AtomApp - Все права защищены. </p>
            <p class='copyright-links'><a>Политика конфиденциальности</a></p>
          </div>
        </footer>
    </div>
  );
};
export default Layout;
