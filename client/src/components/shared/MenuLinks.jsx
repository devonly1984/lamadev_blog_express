import { Link } from "react-router-dom";
import { menuLinks } from "../../constants/constants";
import { desktop, mobile } from "../../constants/styles";
import { SignedOut } from "@clerk/clerk-react";
const MenuLinks = ({ isMobile, open }) => {
  return (
    <div
      className={`${isMobile ? mobile : desktop} ${
        isMobile && open ? "-right-[0]" : "-right-[100%]"
      }`}
    >
      {menuLinks.map((menuLink) => {
        if (menuLink.title === "Login") {
          return (
            <SignedOut key={menuLink.title}>
              <Link to="/login">
                <button
                  key={menuLink.title}
                  className="py-2 px-4 rounded-3xl bg-blue-800 text-white"
                >
                  Login
                </button>
              </Link>
            </SignedOut>
          );
        }
        return (
          <Link to={menuLink.href} key={menuLink.title}>
            {menuLink.title}
          </Link>
        );
      })}
    </div>
  );
};
export default MenuLinks;
