import Navbar from "./components/Navbar";
import ItemSection from "./components/ItemSection";
import Footer4Col from "./components/ui/footer-4col";

export default function SalesPortal() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-emerald-950 text-zinc-50 font-sans selection:bg-emerald-500/30">
      <Navbar />
      <main className="max-w-6xl mx-auto p-6 md:p-12">
        <ItemSection />
      </main>
      <div className="relative z-10">
        <Footer4Col />
      </div>
    </div>
  );
}
