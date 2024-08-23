import { ILink, IPost } from "./interfaces";
import hikeImage from "./assets/hike.jpg";
import stirFryImage from "./assets/stir-fry.jpg";

export const links: ILink[] = [
  {
    id: "a",
    label: "Home",
    href: "#",
  },
  {
    id: "b",
    label: "Explore",
    href: "#",
  },
  {
    id: "c",
    label: "Notifications ",
    href: "#",
  },
  {
    id: "d",
    label: "Messages",
    href: "#",
  },
];

export const posts: IPost[] = [
  {
    author: {
      id: "1",
      name: "Sarah Miller",
      username: "sarahmiller",
    },
    id: "1",
    content:
      "Excited to share my latest recipe for a delicious and healthy vegetarian stir-fry! Let me know if you try it out. ",
    image: stirFryImage,
    timestamp: new Date("2024-07-13").getTime(),
  },
  {
    author: {
      id: "2",
      name: "John Doe",
      username: "johndoe",
    },
    id: "2",
    content: "Just finished an amazing hike in the mountains. The views were breathtaking!",
    image: hikeImage,
    timestamp: new Date("2024-07-16").getTime(),
  },
];
