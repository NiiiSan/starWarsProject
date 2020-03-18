export class Vehicle {
  id: number;
  name: string;
  speed: number;
  ftl: boolean;
  image: string;
  constructor(id?: number, name?: string, speed?: number, ftl?: boolean, image?: string) {
    this.id = id;
    this.name = name;
    this.speed = speed;
    this.ftl = ftl;
    this.image = image;
  }
}
