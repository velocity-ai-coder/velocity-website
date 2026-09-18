import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-velocity-navy to-velocity-blue flex items-center justify-center text-white">
      <div className="text-center px-4">
        <h1 className="text-5xl font-extrabold mb-4">Velocity.in</h1>
        <p className="text-white/70 text-xl mb-8">India's largest flexible financing platform</p>
        <Link
          href="/financing"
          className="bg-white text-velocity-navy font-bold px-8 py-4 rounded-xl text-lg hover:bg-yellow-300 transition-colors"
        >
          Explore Financing →
        </Link>
      </div>
    </main>
  );
}
