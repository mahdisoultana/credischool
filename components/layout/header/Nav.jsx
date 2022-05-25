import Logo from "./logo.jsx";
import useNav from "../../../hooks/useNav.js";

function Nav() {
  const { setIsOpen, isOpen } = useNav();

  return (
    <nav className="md:flex block justify-between items-center px-4   mt-4 ">
      <div className="flex items-center justify-between">
        <Logo />
        <button
          className="spanTag md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          X
        </button>
      </div>
      {isOpen && (
        <>
          <ul className="md:flex block justify-between items-center bg-blue-light md:pt-0 pt-2 md:mt-0 mt-4 md:bg-transparent">
            <li className="mx-6 text text-blue-xdark">Home</li>
            <li className="mx-6 text">Education</li>
            <li className="mx-6 text">Compus</li>
            <li className="mx-6   text ">About</li>
          </ul>
          <hr className="md:hidden" />
          <ul className="md:flex block justify-between items-center bg-blue-light p-4 md:p-0 md:bg-transparent">
            <li className="mr-6 text   text-blue-xdark">Login</li>
            <li>
              <button className="btn bg-red-dark  p-3 px-9 shadow-btn inline-block">
                Register
              </button>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
}

export default Nav;
