import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full h-12 px-8 flex items-center sticky">
      <Link href="/" className="font-head text-xl text-primary">
        CURTAINS
      </Link>
    </nav>
  );
}
