import { useState } from "react";
import { XIcon, MenuIcon } from "lucide-react";
import MenuLinks from "../shared/MenuLinks";
const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <section className="w-full h-16 md:h-20 flex items-center justify-between">
      {/**Logo */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <img src="/logo.png" className="size-8" />
        <span>LamaBlog</span>
      </div>
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