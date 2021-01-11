/* tslint:disable */

import { GardenObject } from "src/app/api/models";

/* eslint-disable */
export class GardenObjectModel implements GardenObject {
  name: string;

  constructor(gardenObject: GardenObjectModel) {
    this.name = gardenObject.name;
  }
}
