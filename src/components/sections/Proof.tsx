import { Button } from '@/components/ui/button'
import { Section } from '@/components/common/Section'
import { Reveal } from '@/components/motion/Reveal'
import { useT } from '@/i18n/LocaleProvider'

/**
 * Deliberately one sentence.
 *
 * PLACEHOLDER : à fournir par Luc — études de cas, logos clients, témoignages.
 * Pour chaque étude : le client (avec autorisation écrite d'être nommé), le
 * problème, ce qui a été bâti, un résultat mesuré. Rien d'inventé ici, jamais.
 * Tant qu'il n'y a rien de réel, une phrase honnête vaut mieux qu'un mur de
 * logos empruntés.
 */
export function Proof() {
  const t = useT()

  return (
    <Section id="realisations">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold tracking-[0.14em] text-[var(--color-indigo-brand)] uppercase">
          {t.proof.eyebrow}
        </p>
        <h2 className="mt-4 text-3xl text-[var(--color-ink)] md:text-4xl">{t.proof.title}</h2>
        <p className="mx-auto mt-5 max-w-[52ch] text-lg leading-relaxed text-[var(--color-slate-muted)]">
          {t.proof.lead}
        </p>
        <Button asChild variant="outline" className="mt-8">
          <a href="#contact">{t.proof.askCta}</a>
        </Button>
      </Reveal>
    </Section>
  )
}
