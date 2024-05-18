import Link from "next/link";

export default function Button({ href, children }) {
  return (
    <Link href={href} passHref>
      <button className="w-full bg-gradient-to-r from-neutral-100/60 to-black/25
            bg-transparent p-2 outline-none border-neutral-100/60 border-[1px]
            rounded-xl hover:border-blue-400 focus:border-blue-400
            focus:from-blue-400/60 text-neutral-100 placeholder:text-neutral-100/70">{children}</button>
    </Link>
  );
}
