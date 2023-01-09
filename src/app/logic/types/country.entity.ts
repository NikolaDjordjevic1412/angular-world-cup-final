import {DataSnapshot} from "@angular/fire/compat/database/interfaces";

export class Country {

  /**
   * ISO 3166 - alpha 2
   */
  id?: string;
  ord: number = 0;
  logo?: string;
  route?: string;

  constructor(payload: DataSnapshot) {
    const {key: id} = payload, {src, index: ord, route} = payload.val();
    // TODO@nik: Cleanup this once the database is fixed
    if (route === "none") {
      throw new Error('Invalid')
    }
    Object.assign(this, {id, ord, logo: `assets/img/${src}`, route});
  }

}
