import React from "react";
import { Container, Icon, Divider } from "semantic-ui-react";
import NavBar from "../components/Navbar";
import Head from "next/head";
import "../public/styles/global.css";

export default function Document({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Atom App</title>
      </Head>
      <Container>
        <NavBar />
        <Component {...pageProps} />
      </Container>
      <footer>
        <div>
          <Icon size="big" link name="instagram" />
          <Icon size="big" link name="whatsapp" />
          <Icon size="big" link name="linkedin" />
          <Divider />
          <p>© Copyright 2023 AtomApp - Все права защищены. </p>
          <p>
            <a>Политика конфиденциальности</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
