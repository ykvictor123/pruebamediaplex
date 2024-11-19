export interface Movie {
  id: string;
  name: string;
  size: number;
  slug: string;
  resolution: number;
  status: 'Ready' | 'Processing' | 'Failed';
  thumbnail: string;
}