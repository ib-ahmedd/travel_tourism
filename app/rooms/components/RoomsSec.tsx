import { Card } from "@components";
import { roomsArray } from "@constants";

function RoomsSec() {
  return (
    <section className="general_parent py-20">
      <div className="general_width flex flex-col gap-4">
        <h2>Come & Stay With Us</h2>
        <div className="mb-12 flex flex-col md:flex-row justify-between gap-4 md:gap-0 md:items-center">
          <p className="text-text-gray w-full md:w-4/6 lg:w-1/2">
            Pick any of our hotel rooms to experience the delightful decor,
            complemented with modern amenities for a comfortable stay.
          </p>
          <button className="generic_button">VIEW ALL</button>
        </div>

        <div className="flex justify-between flex-wrap">
          {roomsArray.map((item) => (
            <Card key={item.title} {...item} cardWidth="w-full md:w-[48%]" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoomsSec;
