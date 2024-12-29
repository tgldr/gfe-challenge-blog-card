import { Noto_Sans } from "next/font/google";
import Card from "@/components/Card";

const notoSans = Noto_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={notoSans.className}>
      <div className="min-h-screen">
        <div className="flex justify-center pt-[120px]">
          <Card
            title="Top 5 Living Room Inspirations"
            description="Curated vibrants colors for your living, make it pop & calm in the same time."
            image="https://images.unsplash.com/photo-1615529182904-14819c35db37"
            tags={["Interior"]}
          />
        </div>
      </div>
    </main >
  );
}
