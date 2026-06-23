import { JsonLd } from "@/components/JsonLd";
import { LandingPage } from "@/components/LandingPage";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <JsonLd />
      <LandingPage />
    </main>
  );
}
