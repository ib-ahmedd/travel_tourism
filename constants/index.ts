import { CardPropType, ReviewCardProps } from "@types";

export const navLinksArray: { title: string; path: string }[] = [
  { title: "HOME", path: "/" },
  { title: "ROOMS", path: "/rooms" },
  { title: "AMENITIES", path: "/amenities" },
  { title: "CONTACT", path: "/contact" },
];

export const amenitiesArray: CardPropType[] = [
  {
    image: "/images/home/amenities/swimming-pool.jpg",
    imageDesc: "swimming pool",
    title: "An Infinite-edge Pool",
    desc: "Experience the joy of swimming in our infinity-edge pool that gives you a nice picturesque view.",
  },
  {
    image: "/images/home/amenities/spa.jpg",
    imageDesc: "spa",
    title: "An Iconic Spa",
    desc: "Set forth on an exquisite wellness journey to refresh, re-energize and rejuvenate at our iconic spa.",
  },
  {
    image: "/images/home/amenities/rooms.jpg",
    imageDesc: "rooms",
    title: "In-house Restaurants",
    desc: "We have three in-house restaurants offering different cuisines that you can choose from.",
  },
];

export const reviewsArray: ReviewCardProps[] = [
  {
    review:
      '"Proin nulla mauris et volutpat adipiscing suspendisse vehicula blandit sagittis orci etiam morbi elit etiam semper eu lacus pretium hac nisl leo amet ullamcorper."',
    image: "/images/home/reviews/img-1.jpg",
    user: "EMILY HUNT",
  },
  {
    review:
      '"Proin nulla mauris et volutpat adipiscing suspendisse vehicula blandit sagittis orci etiam morbi elit etiam semper eu lacus pretium hac nisl leo amet ullamcorper."',
    image: "/images/home/reviews/img-2.jpg",
    user: "MORGAN JONATHAN",
  },
  {
    review:
      '"Proin nulla mauris et volutpat adipiscing suspendisse vehicula blandit sagittis orci etiam morbi elit etiam semper eu lacus pretium hac nisl leo amet ullamcorper."',
    image: "/images/home/reviews/img-3.jpg",
    user: "JULIE ROBINSON",
  },
  {
    review:
      '"Proin nulla mauris et volutpat adipiscing suspendisse vehicula blandit sagittis orci etiam morbi elit etiam semper eu lacus pretium hac nisl leo amet ullamcorper."',
    image: "/images/home/reviews/img-4.jpg",
    user: "JAMES BROOK",
  },
];

export const footerMenuArray = [
  "About Us",
  "Reviews",
  "Get Directions",
  "Nearby Visits",
  "Contact Us",
];

export const footerHelpArray = [
  "Guest Support",
  "Guest Feedback",
  "FAQs",
  "Offers",
  "Location",
];
