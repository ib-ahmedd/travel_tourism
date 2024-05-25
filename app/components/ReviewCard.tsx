import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReviewCardProps } from "@types";

function ReviewCard({ review, image, user }: ReviewCardProps) {
  return (
    <article
      className="flex flex-col gap-4 md:gap-8 w-full md:w-[47%] my-8"
      data-aos="fade-left"
    >
      <div className="flex ">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
      <p className="font-semibold text-text-gray">{review}</p>
      <div className="flex items-center gap-4">
        <img src={image} alt={user} className="w-10 h-10 rounded-full" />
        <h4 className="font-bold text-text-gray">{user}</h4>
      </div>
    </article>
  );
}

export default ReviewCard;
