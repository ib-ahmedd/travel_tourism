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

export const roomsArray: CardPropType[] = [
  {
    image: "/images/rooms/rooms-sec/room-1.jpg",
    imageDesc: "hotel room",
    title: "Double Deluxe Room",
    desc: "Our double deluxe rooms are complemented with modern and luxurious amenities for a wonderful stay.",
  },
  {
    image: "/images/rooms/rooms-sec/room-2.jpg",
    imageDesc: "hotel room",
    title: "Double Club Room",
    desc: "We offer 15 club rooms designed with a vibrant touch to enhance your spirits for a happening holiday.",
  },
  {
    image: "/images/rooms/rooms-sec/room-3.jpg",
    imageDesc: "hotel room",
    title: "Standard Suite",
    desc: "If you are looking for a room that gives you both space and luxury at a reasonable price, this is the one for you.",
  },
  {
    image: "/images/rooms/rooms-sec/room-4.jpg",
    imageDesc: "hotel room",
    title: "Executive Suite",
    desc: "Experience luxury in style in our executive suites. These rooms also give you a beautiful view of the city.",
  },
  {
    image: "/images/rooms/rooms-sec/room-5.jpg",
    imageDesc: "hotel room",
    title: "Grand Suite",
    desc: "This is the second-highest ranked room in our hotel that offers luxury with the most advanced amenities.",
  },
  {
    image: "/images/rooms/rooms-sec/room-6.jpg",
    imageDesc: "hotel room",
    title: "Presidential Suite",
    desc: "Wish to live like a king? Here’s the top presidential suite where you can spend the best days of your life.",
  },
];
