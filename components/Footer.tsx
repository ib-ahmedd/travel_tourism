import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="w-full">
      <section className="hero h-[70vh] md:h-[80vh] text-white relative flex justify-center items-center bg-footer-bg bg-cover bg-no-repeat bg-bottom">
        <div className="w-full h-full absolute bg-gray-700 opacity-60" />
        <div className="xl:w-1/2 lg:w-4/5 md:w-5/6 w-full px-4 md:px-0 z-10 text-center flex flex-col gap-12 md:gap-20">
          <div className="flex flex-col gap-4">
            <h2 className="text-white md:text-4xl lg:text-5xl">
              Plan an Unforgettable Experience in Mykonos Today!
            </h2>
            <p>
              We can help you fit your stay and experience within your allotted
              budget.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p>BOOK YOUR STAY NOW</p>
            <span className="text-3xl md:text-5xl font-medium">
              <FontAwesomeIcon icon={faPhone} />
              +1-123 456 7890
            </span>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
