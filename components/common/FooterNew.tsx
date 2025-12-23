import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const FooterNew = () => {
  return (
    <div className="w-full p-4 bg-[#0F6089] md:p-10 relative flex lg:px-15 flex-col sm:flex-row gap-7">
      <div className="footerColMainContainer flex-2 ">
        <h2 className="footerHeader">Address</h2>
        <div className="footerParaWrapper">
          <p className="footerPara lg:pr-20">
            <span>
              <MapPin size={16} className="lg:w-5 lg:h-5" />
            </span>
            Avtaran Capital Advisors Private Limited, 301, Kamla Hub, N S Road
            No. 1, JVPD Scheme, Juhu, Near Aromas Café, Vile Parle West, Mumbai
            400049 India
          </p>
          <p className="footerPara">
            <span>
              <Phone size={16} className="lg:w-5 lg:h-5" />
            </span>{" "}
            +91 9833395565
          </p>
          <p className="footerPara">
            <span>
              <Mail size={16} className="lg:w-5 lg:h-5" />
            </span>
            hck@avtaran.com
          </p>
        </div>

        <div className="flex items-center gap-4 flex-wrap md:gap-3 mt-3 xl:mt-6 flex-1">
          <a
            target="_blank"
            href="https://www.facebook.com"
            className="w-fit h-fit rounded-full"
          >
            <img
              src="/social/facebook.png"
              alt="FaceBook"
              className="w-9 h-9  lg:w-12 lg:h-12 "
            />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com"
            className="w-fit h-fit rounded-full"
          >
            <img
              src="/social/youtube.png"
              alt="Youtube"
              className="w-9 h-9  lg:w-12 lg:h-12 pointer-events-none"
            />
          </a>
          <a
            target="_blank"
            href="https://www.x.com"
            className="w-fit h-fit rounded-full"
          >
            <img
              src="/social/x.png"
              alt="X"
              className="w-9 h-9 lg:w-12 lg:h-12 "
            />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com"
            className="w-fit h-fit rounded-full"
          >
            <img
              src="/social/insta.png"
              alt="Insta"
              className="w-9 h-9  lg:w-12 lg:h-12 pointer-events-none"
            />
          </a>
        </div>
      </div>

      <div className="footerColMainContainer flex-1">
        <h2 className="footerHeader">Quick Links</h2>
        <div className="footerParaWrapper">
          <Link to={"/"} className="footerPara">
            Home
          </Link>
          <Link to={"/about"} className="footerPara">
            About
          </Link>
          <Link to={"/"} className="footerPara">
            Knowledge Center
          </Link>
          <Link to={"/career"} className="footerPara">
            Career
          </Link>
        </div>
      </div>

      <div className="footerColMainContainer">
        <h2 className="footerHeader">Business Hours</h2>
        <div className="footerParaWrapper">
          <p className="footerPara">Monday - Friday</p>
          <p className="footerPara font-bold">
            <span className="font-bold">09:00 am - 07:00 pm</span>
          </p>
          <p className="footerPara ">Saturday</p>
          <p className="footerPara font-bold">
            <span className="font-bold">09:00 am - 12:00 pm</span>
          </p>
          <p className="footerPara">Sunday</p>
          <p className="footerPara font-bold">
            <span className="font-bold">Closed</span>
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default FooterNew;
