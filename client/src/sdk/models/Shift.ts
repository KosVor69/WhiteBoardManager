/* tslint:disable */
import {
  Timeline
} from '../index';

declare var Object: any;
export interface ShiftInterface {
  "name": string;
  "nextShift"?: string;
  "isEnable"?: boolean;
  "id"?: any;
  "lineId"?: any;
  timelines?: Timeline[];
}

export class Shift implements ShiftInterface {
  "name": string;
  "nextShift": string;
  "isEnable": boolean;
  "id": any;
  "lineId": any;
  timelines: Timeline[];
  constructor(data?: ShiftInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Shift`.
   */
  public static getModelName() {
    return "Shift";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Shift for dynamic purposes.
  **/
  public static factory(data: ShiftInterface): Shift{
    return new Shift(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Shift',
      plural: 'shift',
      path: 'shift',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "nextShift": {
          name: 'nextShift',
          type: 'string'
        },
        "isEnable": {
          name: 'isEnable',
          type: 'boolean',
          default: true
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "lineId": {
          name: 'lineId',
          type: 'any'
        },
      },
      relations: {
        timelines: {
          name: 'timelines',
          type: 'Timeline[]',
          model: 'Timeline',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'shiftId'
        },
      }
    }
  }
}
