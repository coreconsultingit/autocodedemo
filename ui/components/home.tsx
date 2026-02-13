
import { twMerge } from 'tailwind-merge';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-xl opacity-50"></div>
        <div className="relative bg-slate-800/90 backdrop-blur-sm p-12 rounded-2xl border border-purple-500/30 shadow-2xl">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent tracking-tight">
            AUT-11
          </h1>
          <div className="mt-4 flex items-center gap-2 text-slate-400 text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Powered by AI</span>
          </div>
        </div>
      </div>
    </div>
  );
}