"use client"; // Required when using hooks in Next.js

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();

  function handleLogin() {
    // You can add authentication logic here
    console.log("Logging in...");

    // Redirect to the dashboard
    router.push('/dashboard');
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-2xl font-bold">Login Page</h1>

      {/* Button to navigate to dashboard */}
      <button 
        onClick={handleLogin} 
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Login
      </button>

      {/* Alternative: Use a Link instead of a button */}
      <Link 
        href="/dashboard"
        className="mt-4 text-blue-500 hover:underline"
      >
        Go to Dashboard
      </Link>
    </main>
  );
}
