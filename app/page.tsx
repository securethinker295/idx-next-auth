import AuthStatus from './components/AuthStatus';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="w-full max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold mb-8">GitHub Authentication</h1>
        <AuthStatus />
      </div>
    </main>
  );
}