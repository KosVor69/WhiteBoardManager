/* tslint:disable */

declare var Object: any;
export interface TimeCleanInterface {
  "time": string;
  "id"?: any;
  "lineId"?: any;
}

export class TimeClean implements TimeCleanInterface {
  "time": string;
  "id": any;
  "lineId": any;
  constructor(data?: TimeCleanInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TimeClean`.
   */
  public static getModelName() {
    return "TimeClean";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TimeClean for dynamic purposes.
  **/
  public static factory(data: TimeCleanInterface): TimeClean{
    return new TimeClean(data);
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
      name: 'TimeClean',
      plural: 'timeClean',
      path: 'timeClean',
      idName: 'id',
      properties: {
        "time": {
          name: 'time',
          type: 'string'
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
      }
    }
  }
}
