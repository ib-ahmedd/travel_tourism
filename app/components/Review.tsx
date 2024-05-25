import { reviewsArray } from "@constants";
import ReviewCard from "./ReviewCard";

function Review() {
  return (
    <section className="general_parent">
      <div className="general_width flex flex-col gap-8 md:items-center">
        <h2>What Our Guests Say</h2>
        <p className="text-text-gray" data-aos="fade-right">
          We take pride in serving our guests with the best experience. Read
          what they say.
        </p>
        <div className="flex flex-col md:flex-row flex-wrap justify-between">
          {reviewsArray.map((item) => (
            <ReviewCard key={item.user} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Review;
