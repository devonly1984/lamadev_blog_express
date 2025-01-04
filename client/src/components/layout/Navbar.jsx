import { useState } from "react";
import { XIcon, MenuIcon } from "lucide-react";
import MenuLinks from "../shared/MenuLinks";
import Image from "../shared/Image";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <section className="w-full h-16 md:h-20 flex items-center justify-between">
      {/**Logo */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="/logo.png" alt="Lama Logo" w={32} h={32} />
        <span>LamaBlog</span>
      </Link>
      {/**Mobile */}
      <div className="md:hidden flex ">
        <div
          className="cursor-pointer text-2xl "
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <XIcon /> : <MenuIcon />}

          <MenuLinks isMobile={true} open={open} />
        </div>
      </div>

      {/**Desktop */}
      <MenuLinks isMobile={false} />
    </section>
  );
};
export default Navbar;