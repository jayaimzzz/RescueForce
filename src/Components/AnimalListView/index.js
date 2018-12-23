import React, { Fragment } from "react";

import AnimalList from "../AnimalList";
import { AnimalFilter } from "./AnimalFilter";

import { CAT, DOG, EXOTIC } from '../../Constants';

export const AnimalListView = (props) => {
  const type = props.type;

  return (
    <Fragment>
      <AnimalFilter />
      <AnimalList />
    </Fragment>
  );
};
