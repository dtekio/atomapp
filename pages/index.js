import React from "react";
import { Grid, Button, Divider} from "semantic-ui-react";
import PriceGroup from "./components/prices";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function Home() {
  return (
    <>
      <section id="header">
        <Grid>
          <Grid.Row>
            <Grid.Column width={8} class="starter-desc">
              <h1>Save time - Save grade!</h1>
              <h5>Лучший способ выучить физику с нуля за короткий срок!</h5>
              <a href="#prices">
                <Button secondary>Начать изучение</Button>
              </a>
            </Grid.Column>
            <Grid.Column width={8} class="starter-img">
              <div class="pendulum starter-img"></div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </section>

      <Divider horizontal>Выбор ценовой категории</Divider>

      <section id="prices">
        <PriceGroup />
      </section>
    </>
  );
}
