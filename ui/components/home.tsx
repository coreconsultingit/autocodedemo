
import { twMerge } from 'tailwind-merge';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-xl opacity-50"></div>
        <div className="relative bg-slate-800/90 backdrop-blur-sm p-12 rounded-2xl border border-purple-500/30 shadow-2xl">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent tracking-tight">
            AUT-12
          </h1>
          <p className="mt-6 text-slate-300 text-lg max-w-2xl">
            I want to simplify the home page display and just want current jira number and description on home page
          </p>
        </div>
      </div>
    </div>
  );
}