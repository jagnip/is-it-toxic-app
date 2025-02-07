export interface Plant {
  name: string;
  commonNames: string[];
  scientificName: string;
  family: string | null;
  link: string;
  toxicTo: string[];
  imageUrl: string | null;
  toxicPrinciples: string | null;
  clinicalSigns: string | null;
}

export interface Plants {
  [key: string]: Plant;
}
