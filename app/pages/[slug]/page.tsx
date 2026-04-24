import { notFound, permanentRedirect } from "next/navigation";

type Params = {
  slug: string;
};

const LEGACY_MAP: Record<string, string> = {
  "stropy.html": "/stropy",
  "galeria.html": "/galeria",
  "cenova-ponuka.html": "/cenova-ponuka",
  "kontakt.html": "/kontakt",
};

export default async function LegacyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const resolved = await params;
  const destination = LEGACY_MAP[resolved.slug];

  if (!destination) {
    notFound();
  }

  permanentRedirect(destination);
}
