import Link from 'next/link';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold" style={{ color: 'var(--color-primary)' }}>Koydo PTE Academic</h1>
      <p className="mt-4 text-lg text-gray-600 text-center max-w-xl">Pearson Test of English Academic — smart, adaptive exam preparation.</p>
      <div className="mt-8 flex gap-4">
        <Link href="/dashboard" className="rounded-xl px-6 py-3 text-white font-semibold" style={{ backgroundColor: 'var(--color-primary)' }}>Dashboard</Link>
        <Link href="/practice" className="rounded-xl border-2 px-6 py-3 font-semibold" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}>Practice</Link>
      </div>
      <p className="mt-12 text-xs text-gray-400 max-w-md text-center">PTE Academic™ is a registered trademark of Pearson. Koydo is not affiliated with or endorsed by Pearson.</p>
    </main>
  );
}
