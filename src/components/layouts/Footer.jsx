import Link from "next/link";

export default function Footer() {
  return (
    <footer className="section container border-t">
      <p className="text-muted-foreground text-sm text-center">
        Copyright&copy;2024 / <Link className="hover:underline" href="/credits"> Credits</Link> / Developed by <Link className="hover:underline" href="https://webdevsalmann.vercel.app/"> webdevsalmann</Link> 💖
      </p>
    </footer>
  )
}
