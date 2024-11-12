// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-blue-100 text-purple-900 min-h-screen p-8">
      <main className="flex flex-col gap-8 items-center">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-4xl text-blue-800 font-bold">Welcome to My DJ Mixtape Website</h1>
        <p className="text-purple-700">Explore the latest mixtapes, stream, download, and more!</p>
      </main>
      <footer className="bg-purple-500 text-white py-4 text-center">
        <p>&copy; 2024 DJ Mixtapes. All rights reserved.</p>
      </footer>
    </div>
  );
}
