import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Form() {
  return (
    <section className="form general_parent py-20">
      <div className="general_width flex flex-col md:flex-row gap-12 md:gap-0">
        <div className="right flex-1 flex flex-col gap-8">
          <span>
            <h2>Reception Office</h2>
            <p>
              2855 Nelsonville Rd, Boston, Massachusetts
              <br className="hidden md:block" /> (MA), 40107
            </p>
          </span>
          <span>
            <h2>Reception Hours</h2>
            <p>7:30 AM - 11:00 PM</p>
          </span>
          <span>
            <h2>Contact</h2>
            <p>
              +1-123 456 7890
              <br />
              contact@info.com
            </p>
          </span>
          <span>
            <h2>Follow us</h2>
            <div className="flex gap-8">
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </span>
        </div>

        <form className="left flex-1 flex flex-col gap-4">
          <div>
            <label htmlFor="name">
              Name <span>*</span>
            </label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="subject">
              Subject <span>*</span>
            </label>
            <input type="text" name="subject" id="subject" />
          </div>
          <div>
            <label htmlFor="message">
              Message<span>*</span>
            </label>
            <textarea name="message" id="message" />
          </div>
          <button className="generic_button">SUBMIT</button>
        </form>
      </div>
    </section>
  );
}

export default Form;
