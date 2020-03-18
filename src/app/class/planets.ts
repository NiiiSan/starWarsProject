export class Planet {
  id: number;
  name: string;
  hasOxygen: boolean;
  image: string;
  constructor(id?: number, name?: string, hasOxygen?: boolean, image?: string) {
    this.id = id;
    this.name = name;
    this.hasOxygen = hasOxygen;
    this.image = image;
  }
}
