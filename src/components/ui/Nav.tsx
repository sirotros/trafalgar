import Logo from "../base/Logo";
import Link from "next/link";
import { useRouter } from "next/router";
const Nav = () => {
    const {asPath} = useRouter()
  return (
    <nav className="mt-[62px] flex items-center justify-between">
      <Logo variant="dark" />
      <ul>
        <Link href="/" className={`ml-10 ${asPath == "/" ? "text-black font-bold" : "text-gray-500"}`}>Home</Link>
        <Link href="/" className={`ml-10 ${asPath == "/find-a-doctor" ? "text-black font-bold" : "text-gray-500"}`}>Find a doctor</Link>
        <Link href="/" className={`ml-10 ${asPath == "/apps" ? "text-black font-bold" : "text-gray-500"}`}>Apps</Link>
        <Link href="/" className={`ml-10 ${asPath == "/testimonials" ? "text-black font-bold" : "text-gray-500"}`}>Testimonials</Link>
        <Link href="/" className={`ml-10 ${asPath == "/about-us" ? "text-black font-bold" : "text-gray-500"}`}>About us</Link>
      </ul>
    </nav>
  );
};
export default Nav;
