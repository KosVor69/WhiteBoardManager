/* tslint:disable */

declare var Object: any;
export interface TimelineInterface {
  "from"?: string;
  "to"?: string;
  "plan": number;
  "target": number;
  "produced"?: number;
  "description"?: string;
  "fpy"?: number;
  "model"?: string;
  "id"?: any;
  "shiftId"?: any;
}

export class Timeline implements TimelineInterface {
  "from": string;
  "to": string;
  "plan": number;
  "target": number;
  "produced": number;
  "description": string;
  "fpy": number;
  "model": string;
  "id": any;
  "shiftId": any;
  constructor(data?: TimelineInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Timeline`.
   */
  public static getModelName() {
    return "Timeline";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Timeline for dynamic purposes.
  **/
  public static factory(data: TimelineInterface): Timeline{
    return new Timeline(data);
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
      name: 'Timeline',
      plural: 'timeline',
      path: 'timeline',
      idName: 'id',
      properties: {
        "from": {
          name: 'from',
          type: 'string'
        },
        "to": {
          name: 'to',
          type: 'string'
        },
        "plan": {
          name: 'plan',
          type: 'number'
        },
        "target": {
          name: 'target',
          type: 'number',
          default: 0
        },
        "produced": {
          name: 'produced',
          type: 'number',
          default: 0
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "fpy": {
          name: 'fpy',
          type: 'number',
          default: 0
        },
        "model": {
          name: 'model',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "shiftId": {
          name: 'shiftId',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
