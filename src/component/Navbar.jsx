import coding from "../assets/coding-html-svgrepo-com.svg";

export default function Navbar() {
  return (
    <div className="fixed z-50 bg-dark-100 w-full top-0 left-0 px-8 py-2 lg:px-20 xl:px-36">
      <div className="flex justify-between items-center text-white">
        <img src={coding} className="App-logo w-12 rounded-full" alt="logo" />
        <ul className="flex md:flex text-xl">
          <li className="p-4">
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li className="p-4">
            <a href="#skills" className="hover:underline">
              Skills
            </a>
          </li>
          <li className="p-4">
            <a href="#project" className="hover:underline">
              Project
            </a>
          </li>
        </ul>
        <a
          href="/newresume.pdf"
          rel="noreferrer"
          target="_blank"
          className=" bg-teal-500 rounded-full px-4 py-1  border-teal-800  border-4 text-xl"
        >
          Curriculum
        </a>
      </div>
    </div>
  );
}
