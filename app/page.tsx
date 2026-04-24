import { HomePage } from "@/components/home-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Profesionálne napínacie stropy v Banskej Bystrici",
  description:
    "Napínacie stropy na mieru v Banskej Bystrici a okolí. Saténové, lesklé, matné aj translucentné riešenia s rýchlou realizáciou.",
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
