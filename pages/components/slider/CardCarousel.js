import {
  CarouselProvider,
  Slider,
} from "pure-react-carousel";
import { Icon } from "semantic-ui-react";
import React from "react";
import CustomCardSlide from "./CustomCardSlide";
import CustomDotGroup from "./CustomDotGroup";

const CardCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={0.8}
    totalSlides={3}
    style={{ width: "700px", margin: "auto" }}
  >
    

    <Slider>
      <CustomCardSlide
        image="https://place-hold.it/1200x800&text=Econom&fontsize=32"
        index={0}
        header="Эконом"
        meta="Полный доступ ко всем материалам; Полный доступ к пробникам с решением; 4990тг"
      />
      <CustomCardSlide
        header="Стандарт"
        image="https://place-hold.it/1200x800&text=Standart&fontsize=32"
        index={1}
        meta="Полный доступ ко всем материалам; Полный доступ к пробникам с решением; Полный доступ к легким и трудным заданиям; 7490тг"
      />
      <CustomCardSlide
        header="Премиум"
        image="https://place-hold.it/1200x800&text=Premium&fontsize=32"
        index={2}
        meta="Полный доступ ко всем материалам; Полный доступ к пробникам с решением; Полный доступ к легким и трудным заданиям; Построение целей и задач; Консультация с экспертом; 9990тг"
      />
      
    </Slider>

    <CustomDotGroup slides={3} />
  </CarouselProvider>
);

export default CardCarousel;
