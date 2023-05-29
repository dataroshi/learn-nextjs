import styles from './page.module.css'
import Link from "next/link";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'home meta',
    description: 'this is my homepage meta',
};

export default function Home() {
  return (
    <main>
      <h1>Hello world!</h1>
        <Link href="/about">to about</Link>
    </main>
  )
}
