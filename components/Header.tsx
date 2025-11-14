import Link from "next/link";

export default function Header() {
  const linkStyling = "p-1 m-2 text-xl hover:underline";
  return (
    <nav className="flex justify-between items-center p-4">
      <ul className="flex space-x-4">   
        <li>
          <Link href={"/"} className={linkStyling}>Home</Link>
        </li>
        <li>
          <Link href={"/about"} className={linkStyling}>About</Link>
        </li>
      </ul>
    </nav>
  );
}
