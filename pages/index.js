import React from "react";
import { Grid, Button, Divider } from "semantic-ui-react";
import ComparisonChart from "../components/ComparisonChart";

export default function Home() {
  return (
    <>
      <section id="header">
        <Grid>
          <Grid.Row>
              <Grid.Column width={10} >
              <div style={{ margin: '16rem 1rem 16rem 5rem' }}>
                <h1>Save time - Save grade!</h1>
                <h5>Лучший способ выучить физику с нуля за короткий срок!</h5>
                <a href="#prices">
                  <Button secondary>Начать изучение</Button>
                </a>
              </div>
              </Grid.Column>
              <Grid.Column width={6} className="starterImg">
                <div className="pendulum"></div>
              </Grid.Column>
          </Grid.Row>
        </Grid>
      </section>

      <Divider horizontal>Выбор ценовой категории</Divider>

      <section id="prices">
        <ComparisonChart />
      </section>
    </>
  );
}
