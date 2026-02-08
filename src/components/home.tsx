
import { twMerge } from 'tailwind-merge';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-6 rounded-lg">
        <div className="bg-blue-500 text-white px-3 py-1 rounded-full inline-block">
          auto-code-deploy
        </div>
      </div>
    </div>
  );
}