import {DataSnapshot} from "@angular/fire/compat/database/interfaces";

export class Country {

  /**
   * ISO 3166 - alpha 2
   */
  id?: string;
  logo?: string;
  name?: string;
  route?: string;

  constructor(payload: DataSnapshot) {
    const {key: id} = payload, {logo, name, route} = payload.val();
    Object.assign(this, {id, name, logo: `assets/img/${logo}`, route});
  }

}
