import { Card } from "@components";
import { CardContainerProps } from "@types";

function CardContainer({
  heading,
  paragraph,
  cardArray,
  buttonText,
}: CardContainerProps) {
  return (
    <section className="general_parent">
      <div className="general_width flex flex-col gap-8">
        <h2>{heading}</h2>
        <div className="flex justify-between items-center">
          <p className="w-full md:w-4/6 lg:w-1/2 text-text-gray">{paragraph}</p>
          <button className="generic_button">{buttonText}</button>
        </div>

        <div className="flex justify-between flex-wrap">
          {cardArray.map((item) => (
            <Card
              key={item.title}
              {...item}
              cardWidth="w-full md:w-[32%]"
              imageWidth="w-fit md:w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardContainer;
