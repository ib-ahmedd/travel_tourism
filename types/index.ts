export interface CardPropType {
  image: string;
  imageDesc: string;
  title: string;
  desc: string;
  cardWidth?: string;
  imageWidth?: string;
  delay?: string;
}

export interface ReviewCardProps {
  review: string;
  image: string;
  user: string;
}

export interface CardContainerProps {
  heading: string;
  paragraph: string;
  cardArray: CardPropType[];
  buttonText: string;
}
