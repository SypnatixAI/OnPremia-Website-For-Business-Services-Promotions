import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Section } from '@/components/common/Section'
import { CtaArrow } from '@/components/common/CtaArrow'
import { Reveal } from '@/components/motion/Reveal'
import { useT } from '@/i18n/LocaleProvider'
import { bookingHref, CONTACT_ENDPOINT, CONTACT_EMAIL, hasValue } from '@/lib/site'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactCta() {
  const t = useT()
  const [status, setStatus] = useState<Status>('idle')

  const schema = z.object({
    name: z.string().min(1, { message: t.contact.form.errors.nameRequired }),
    email: z.string().email({ message: t.contact.form.errors.emailInvalid }),
    message: z.string().min(10, { message: t.contact.form.errors.messageShort }),
  })

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', message: '' },
  })

  async function onSubmit(values: z.infer<typeof schema>) {
    setStatus('submitting')

    // No endpoint configured yet: hand the message to the visitor's mail client
    // prefilled, rather than dropping it. Set CONTACT_ENDPOINT in lib/site.ts
    // to switch to a background POST.
    if (!hasValue(CONTACT_ENDPOINT)) {
      const subject = encodeURIComponent(`${t.contact.form.title} — ${values.name}`)
      const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`)
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
      form.reset()
      setStatus('success')
      return
    }

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="contact" tone="feature">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.14em] text-indigo-300 uppercase">
            {t.contact.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl text-white md:text-4xl lg:text-[2.75rem]">
            {t.contact.title}
          </h2>
          <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-slate-300">
            {t.contact.lead}
          </p>

          <Button asChild size="lg" className="group mt-8 bg-white text-[var(--color-feature)] hover:bg-slate-100">
            <a href={bookingHref()}>
              {t.contact.ctaPrimary}
              <CtaArrow />
            </a>
          </Button>

          <p className="mt-5 text-sm text-slate-400">{t.contact.micro}</p>
        </Reveal>

        <Reveal>
          <div className="rounded-lg border border-white/12 bg-white/[0.04] p-6 md:p-8">
            <h3 className="font-display text-xl text-white">{t.contact.form.title}</h3>
            <p className="mt-1.5 text-sm text-slate-400">{t.contact.form.description}</p>

            {status === 'success' ? (
              <div className="mt-6 flex items-start gap-3 rounded-md border border-indigo-400/30 bg-indigo-400/10 p-4">
                <CheckCircle2
                  aria-hidden
                  strokeWidth={2}
                  className="mt-0.5 size-5 shrink-0 text-indigo-300"
                />
                <p className="text-sm text-slate-200">{t.contact.form.success}</p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-200">{t.contact.form.name}</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder={t.contact.form.namePlaceholder}
                            autoComplete="name"
                            className="border-white/15 bg-white/5 text-white placeholder:text-slate-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-200">{t.contact.form.email}</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder={t.contact.form.emailPlaceholder}
                            autoComplete="email"
                            className="border-white/15 bg-white/5 text-white placeholder:text-slate-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-200">{t.contact.form.message}</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={4}
                            placeholder={t.contact.form.messagePlaceholder}
                            className="border-white/15 bg-white/5 text-white placeholder:text-slate-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {status === 'error' ? (
                    <p className="text-sm text-red-300">{t.contact.form.error}</p>
                  ) : null}

                  <Button type="submit" className="w-full" disabled={status === 'submitting'}>
                    {status === 'submitting' ? t.contact.form.submitting : t.contact.form.submit}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
