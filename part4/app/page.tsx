import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <p>
        <Link href="/users">users</Link>
      </p>
    </main>
  )
}
