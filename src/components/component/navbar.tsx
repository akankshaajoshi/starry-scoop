import { Link } from "react-scroll";
import { Button } from "./../../components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "./../../components/ui/sheet";

export function Navbar() {
  return (
    <nav className="w-full fixed backdrop-blur bg-opacity-50 justify-between flex z-[100] text-white items-center h-14 px-4">
      <>
        <img src="/star.jpg" alt="Icon" className="w-[40px] rounded-[20px] h-6 mr-4 " />
        <div className="flex-1 mr-4 text-lg font-semibold">Starry Scoop</div>
      </>
      <>
        <div className="hidden flex justify-end md:flex md:gap-4 md:flex-1 md:text-base">
          <Link className="text-sm cursor-pointer font-medium" to="home" smooth={true} duration={500}>
            Home
          </Link>
          <Link className="text-sm cursor-pointer font-medium" to="about" smooth={true} duration={500}>
            About
          </Link>
          <Link className="text-sm cursor-pointer font-medium" to="project" smooth={true} duration={500}>
            Project
          </Link>
          <Link className="text-sm cursor-pointer font-medium" to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </div>

        <Sheet className="md:hidden">
          <SheetTrigger asChild className="lg:hidden">
            <Button className="rounded-full w-8 h-8 p-1.5 text-white" id="menu" size="icon">
              <MenuIcon className="h-4 w-4  " />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="p-4" side="bottom">
            <div className="flex flex-col gap-4 text-white bg-white-500 backdrop-blur bg-opacity-50">
              <Link className="text-base cursor-pointer font-medium" to="home" smooth={true} duration={500}>
                Home
              </Link>
              <Link className="text-base cursor-pointer font-medium" to="about" smooth={true} duration={500}>
                About
              </Link>
              <Link className="text-base cursor-pointer font-medium" to="project" smooth={true} duration={500}>
                Project
              </Link>
              <Link className="text-base cursor-pointer font-medium" to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </>
    </nav>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
