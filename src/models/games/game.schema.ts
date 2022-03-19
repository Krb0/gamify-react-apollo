export interface Game {
  id: number;
  name: string;
  rating: string;
  released: string;
  description: string;
  backgroundImage: string;
  playtime: string;
  platforms: [GamePlatform];
}

export interface GamePlatform {
  platform: {
    id: number;
    name: string;
  };
}
