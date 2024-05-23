import { footerHelpArray, footerMenuArray } from "@constants";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

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

      <section className="general_parent py-20">
        <div className="general_width flex flex-col md:flex-row flex-wrap justify-between lg:justify-start lg:gap-8">
          <div className="footer_link_block">
            <h4 className="footer_head">Travel & Tourism</h4>
            <p className="text-text-gray">
              Gravida maecenas mi iaculis non, posuere mattis urna, ac risus sit
              porta nunc nibh dictum proin leo dolor sed bibendum mi.
            </p>
          </div>
          <div className="footer_link_block">
            <h4 className="footer_head">Hotel</h4>
            <ul className="footer_links">
              {footerMenuArray.map((item) => (
                <Link key={item} href="" className="w-fit">
                  {item}
                </Link>
              ))}
            </ul>
          </div>
          <div className="footer_link_block">
            <h4 className="footer_head">Customer Help</h4>
            <ul className="footer_links">
              {footerHelpArray.map((item) => (
                <Link key={item} href="" className="w-fit">
                  {item}
                </Link>
              ))}
            </ul>
          </div>
          <div className="footer_link_block">
            <h4 className="footer_head">Contact</h4>
            <p className="text-text-gray">
              Travel & Tourism,
              <br /> 2855 Nelsonville Rd, Boston,
              <br /> Massachusetts (MA), 40107
            </p>
            <span className="flex gap-4 my-4">
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faTwitter} />
            </span>
          </div>
        </div>
      </section>
      <section className="general_parent border-t border-[#e6e6e6]">
        <div className="general_width py-8 text-center text-text-gray text-sm">
          Copyright © {new Date().getFullYear()} Travel & Tourism | Powered by
          Travel & Tourism
        </div>
      </section>
    </footer>
  );
}

export default Footer;
