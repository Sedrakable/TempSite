import React, { FC } from "react";

import {
  IHero,
  IServices,
  IValues,
  IWorkBlock,
  ICustomImage,
} from "../../data.d";
import { Hero } from "../reuse/Hero/Hero";
import { Values } from "./home/Values/Values";
import { Services } from "./home/Services/Services";
import { WorkSlider } from "./blocks/WorkSlider/WorkSlider";
import { ImageGrid } from "./blocks/ImageGrid/ImageGrid";
import { ContactBlock } from "./blocks/ContactBlock/ContactBlock";

export interface HomePageProps {
  hero: IHero;
  work: IWorkBlock;
  services: IServices;
  values: IValues;
  images: ICustomImage[];
}

export const HomePage: FC<HomePageProps> = (props) => {
  return (
    props && (
      <>
        <Hero {...props?.hero} />
        <WorkSlider {...props?.work} />
        <Services {...props.services} />
        <Values {...props.values} />
        <ImageGrid customImages={props.images} randomize maxImages={8} />
        <ContactBlock title="Contact" />
      </>
    )
  );
};
