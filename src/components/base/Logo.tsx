import Link from "next/link";
interface LogoType {
  variant: "dark" | "light";
}
const Logo = ({ variant }: LogoType) => {
  return (
    <Link href="/" className="flex items-center">
      <div
        className={`w-[41px] h-[41px] rounded-full font-bold text-2xl flex items-center justify-center ${
          variant === "dark" ? "text-white bg-primary" : "text-primary bg-white"
        }`}
      >
        T
      </div>
      <span className={`ml-[12px] text-2xl font-bold ${variant === "dark" ? "text-darkPrimary" : "text-white"}`}>
        Trafalgar
      </span>
    </Link>
  );
};
export default Logo;
