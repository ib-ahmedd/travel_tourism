import { CardPropType } from "@types";
import Link from "next/link";

function Card({
  image,
  imageDesc,
  title,
  desc,
  cardWidth,
  imageWidth,
  delay,
}: CardPropType) {
  return (
    <article className={`flex flex-col ${cardWidth} mb-8`}>
      <img
        src={image}
        alt={imageDesc}
        className={`${imageWidth ? imageWidth : "w-full"} self-center`}
        data-aos="fade-up"
        data-aos-delay={`${delay}`}
      />
      <div className="w-4/5 flex flex-col gap-2 mt-8">
        <h3 className="flex">{title}</h3>
        <p className="text-text-gray">{desc}</p>
        <Link
          href=""
          className="w-fit text-sm font-medium border-b-2 my-2 border-semi-black pb-1"
        >
          READ MORE
        </Link>
      </div>
    </article>
  );
}

export default Card;
