import Link from "next/link";
import { appConfig } from "@/app.config";

export default function Home() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 py-24 text-center">
      <span className="text-6xl" aria-hidden>
        {appConfig.emoji}
      </span>
      <h1 className="text-5xl font-bold tracking-tight">{appConfig.name}</h1>
      <p className="max-w-xl text-lg text-black/70">{appConfig.description}</p>
      <p className="max-w-xl text-black/60">
        Avaliações anônimas, métricas de entrega e um ranking claro mostram
        quem realmente carrega a equipe, e quem só ocupa uma cadeira.
      </p>
      <Link
        href="/dashboard"
        className="rounded-full bg-accent px-6 py-3 font-medium text-white shadow-sm transition hover:opacity-90"
      >
        Quero acesso antecipado →
      </Link>
    </section>
  );
}
