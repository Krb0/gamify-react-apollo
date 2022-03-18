import { Platform } from "../platforms/platform.schema";

export interface Game {
  id: number;
  name: string;
  rating: number;
  released: string;
  description: string;
  backgroundImage: string;
  playtime: string;
  platforms: [Platform];
}
