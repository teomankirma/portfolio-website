import { NavigationBar } from "@/components/NavigationBar";
import { HomePage } from "@/components/HomePage";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      <main className="flex-1">
        <HomePage />
      </main>
    </div>
  );
}
