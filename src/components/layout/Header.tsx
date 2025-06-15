// import Link from "next/link";

const Header = () => {
  return (
    <header className="p-3 text-center fixed top-0 w-full">
      <h1 className="text-sm font-bold">
        CH.LO<span className="text-muted-foreground">E</span>
      </h1>
      {/* <nav>
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
      </nav> */}
    </header>
  );
};

export default Header;
