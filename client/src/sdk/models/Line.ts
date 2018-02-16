/* tslint:disable */
import {
  Shift,
  Family,
  TimeClean
} from '../index';

declare var Object: any;
export interface LineInterface {
  "name": string;
  "isEnableClean": boolean;
  "isAutofill": boolean;
  "currentShift"?: string;
  "messageClean"?: string;
  "sound"?: string;
  "targetFPY"?: number;
  "times"?: Array<any>;
  "id"?: any;
  "customerId"?: any;
  shifts?: Shift[];
  models?: Family[];
  timeCleans?: TimeClean[];
}

export class Line implements LineInterface {
  "name": string;
  "isEnableClean": boolean;
  "isAutofill": boolean;
  "currentShift": string;
  "messageClean": string;
  "sound": string;
  "targetFPY": number;
  "times": Array<any>;
  "id": any;
  "customerId": any;
  shifts: Shift[];
  models: Family[];
  timeCleans: TimeClean[];
  constructor(data?: LineInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Line`.
   */
  public static getModelName() {
    return "Line";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Line for dynamic purposes.
  **/
  public static factory(data: LineInterface): Line{
    return new Line(data);
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
      name: 'Line',
      plural: 'line',
      path: 'line',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "isEnableClean": {
          name: 'isEnableClean',
          type: 'boolean',
          default: false
        },
        "isAutofill": {
          name: 'isAutofill',
          type: 'boolean',
          default: false
        },
        "currentShift": {
          name: 'currentShift',
          type: 'string'
        },
        "messageClean": {
          name: 'messageClean',
          type: 'string'
        },
        "sound": {
          name: 'sound',
          type: 'string'
        },
        "targetFPY": {
          name: 'targetFPY',
          type: 'number'
        },
        "times": {
          name: 'times',
          type: 'Array&lt;any&gt;'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "customerId": {
          name: 'customerId',
          type: 'any'
        },
      },
      relations: {
        shifts: {
          name: 'shifts',
          type: 'Shift[]',
          model: 'Shift',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'lineId'
        },
        models: {
          name: 'models',
          type: 'Family[]',
          model: 'Family',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'lineId'
        },
        timeCleans: {
          name: 'timeCleans',
          type: 'TimeClean[]',
          model: 'TimeClean',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'lineId'
        },
      }
    }
  }
}
