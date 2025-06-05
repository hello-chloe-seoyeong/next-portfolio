import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <menu className="flex gap-5">
          <li>
            <Link href={"/about"}>ABOUT</Link>
          </li>
          <li>
            <Link href={"/projects"}>PROJECTS</Link>
          </li>
          <li>
            <Link href={"/skills"}>SKILLS</Link>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Header;
