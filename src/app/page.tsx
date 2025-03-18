import { NavigationBar, HomePage, KnowMeMore } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      <main className="flex-1">
        <HomePage />
        <KnowMeMore />
      </main>
    </div>
  );
}
