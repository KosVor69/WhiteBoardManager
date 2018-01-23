/* tslint:disable */

declare var Object: any;
export interface FamilyInterface {
  "name": string;
  "targerFPY"?: number;
  "id"?: any;
  "lineId"?: any;
}

export class Family implements FamilyInterface {
  "name": string;
  "targerFPY": number;
  "id": any;
  "lineId": any;
  constructor(data?: FamilyInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Family`.
   */
  public static getModelName() {
    return "Family";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Family for dynamic purposes.
  **/
  public static factory(data: FamilyInterface): Family{
    return new Family(data);
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
      name: 'Family',
      plural: 'family',
      path: 'family',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "targerFPY": {
          name: 'targerFPY',
          type: 'number'
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
