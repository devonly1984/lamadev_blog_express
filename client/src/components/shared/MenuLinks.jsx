import {mobileLinks} from '../../constants/constants'
import { desktop, mobile } from '../../constants/styles';
const MenuLinks = ({ isMobile,open }) => {
  return (
    <div
      className={`${isMobile ? mobile : desktop} ${
        isMobile && open ? "-right-[0]" : "-right-[100%]"
      }`}
    >
      {mobileLinks.map((menuLink) => {
        if (menuLink.title === "Login") {
          return (
            <a href="/" key={menuLink.title}>
              <button
                key={menuLink.title}
                className="py-2 px-4 rounded-3xl bg-blue-800 text-white"
              >
                Login
              </button>
            </a>
          );
        }
        return (
          <a href={menuLink.href} key={menuLink.title}>
            {menuLink.title}
          </a>
        );
      })}
    </div>
  );
};
export default MenuLinks