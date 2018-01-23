/* tslint:disable */
import {
  Line
} from '../index';

declare var Object: any;
export interface CustomerInterface {
  "name": string;
  "id"?: any;
  lines?: Line[];
}

export class Customer implements CustomerInterface {
  "name": string;
  "id": any;
  lines: Line[];
  constructor(data?: CustomerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Customer`.
   */
  public static getModelName() {
    return "Customer";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Customer for dynamic purposes.
  **/
  public static factory(data: CustomerInterface): Customer{
    return new Customer(data);
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
      name: 'Customer',
      plural: 'customer',
      path: 'customer',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        lines: {
          name: 'lines',
          type: 'Line[]',
          model: 'Line',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'customerId'
        },
      }
    }
  }
}
