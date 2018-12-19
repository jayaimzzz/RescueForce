import React from "react";
import { AnimalCard } from "../AnimalCard";

const tempDevelopementData = ["one", "two", "three", "four"];

export const AnimalList = () => {
  return tempDevelopementData.map(animal => <AnimalCard animal={animal} />);
};
