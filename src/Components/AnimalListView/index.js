import React, { Fragment } from "react";

import { AnimalList } from "./AnimalList";
import { AnimalFilter } from "./AnimalFilter";

export const AnimalListView = () => {
  return (
    <Fragment>
      <AnimalFilter />
      <AnimalList />
    </Fragment>
  );
};
