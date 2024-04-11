import Link from "next/link";

function Logo() {
  return (
    <Link href="/dashboard" className="text-2xl font-bold">
      Study Buddy
    </Link>
  );
}

export default Logo;
