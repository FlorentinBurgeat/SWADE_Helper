import { Guid } from "guid-typescript";


export default class Party {
    public name!: string;
    public id!: string;
    constructor(party: Partial<Party>) {
      this.name = party.name ?? 'Sans titre';
      this.id = party.id ? party.id : Guid.create().toString();
    }
  }