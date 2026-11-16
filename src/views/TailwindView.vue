<script setup>
import HeaderTailwind from '@/components/HeaderTailwind.vue'
import FooterTailwind from '@/components/FooterTailwind.vue'
import TableTailwind from '@/components/TableTailwind.vue'
import FormTailwind from '@/components/FormTailwind.vue'
</script>

<template>
  <div class="grid min-h-svh grid-rows-[auto_1fr_auto]">
    <HeaderTailwind></HeaderTailwind>
    <main
      class="mx-auto flex h-fit w-full max-w-[80ch] flex-col items-center gap-8 overflow-x-hidden px-[5%] py-12 sm:px-12"
    >
      <h1 class="text-4xl tracking-tight">Tailwind</h1>
      <section class="bg-card-surface border-border-line w-full rounded-2xl border p-8 shadow-(--shadow-card) sm:p-12">
        <h2 class="mb-2 text-xl tracking-tight"><b>Om ramverket</b></h2>
        <p>
          Tailwind CSS är ett modernt och populärt utility-first CSS-ramverk skapat av Adam Wathan som bygger på små
          hjälpklasser istället för färdiga komponenter. Detta gör det smidigt att bygga skräddarsydda och responsiva
          gränssnitt direkt i HTML-koden utan att behöva skriva traditionell CSS eller lämna sina komponenter/filer.
          Detta underlättar utvecklingen genom att ge full kontroll över varje detalj utan att man behöver kämpa emot
          fördefinierade stilar. Den fullständiga dokumentationen finns tillgänglig på
          <a href="https://tailwindcss.com/" class="text-blue-600">Tailwindcss.com</a>.
        </p>
      </section>
      <section class="bg-card-surface border-border-line w-full rounded-2xl border p-8 shadow-(--shadow-card) sm:p-12">
        <h2 class="mb-2 text-lg tracking-tight"><b>Utvärdering av ramverket</b></h2>
        <p class="mt-3"><b>Fördelar:</b></p>
        <ul class="flex list-disc flex-col gap-2 pl-4">
          <li>
            Oerhört flexibelt och anpassningsbart och ramverket sätter inga gränser på designer utan fokuserar istället
            på att underlätta kodningen. I princip alla CSS-egenskaper finns tillgängliga med olika klassnamn så att man
            kan skapa webbplatser med egen design utan att lämna komponent- eller HTML-filen.
          </li>
          <li>
            Väldokumenterad funktionalitet vilket gör att om man redan kan CSS-syntaxen går det blixtsnabbt att lära sig
            Tailwind. På följande adress
            <a href="https://tailwindcss.com/docs/styling-with-utility-classes" class="text-blue-600"
              >Tailwindcss.com</a
            >
            finns en lista med de flesta CSS-egenskaperna man behöver och vilken Tailwind-klass egenskapen tillhör.
          </li>
          <li>
            Enkelt att skriva över Tailwind-klassernas egenskaper med egen CSS-kod och det är enkelt att både skapa och
            ändra variabler samt att sedan använda dem på sin webbplats.
          </li>
        </ul>
        <p class="mt-3"><b>Nackdelar:</b></p>
        <ul class="flex list-disc flex-col gap-2 pl-4">
          <li>
            Inte lika snabbt att skapa komponenter som exempelvis knappar jämfört med ett komponentbaserat ramverk då
            man själv måste sätta exempelvis färg och padding på knappen.
          </li>
          <li>
            Svårare för en nybörjare utan någon CSS-erfarenhet då man i princip behöver skriva ren CSS bara att syntaxen
            är i klassnamn istället för vanliga CSS-egenskaper. Detta skiljer sig gentemot exempelvis Bulma där man
            endast behöver veta ordet "button" för att designa en knapp.
          </li>
        </ul>
        <p class="mt-3">
          <b>Slutsats:</b><br />
          Tailwind är ett utmärkt ramverk för en utvecklare som vill snabba upp designprocessen inom webbutveckling och
          för de som är trötta på att byta fram och tillbaka mellan olika filer under kodningen. Ramverket kommer med en
          brantare inlärningskurva än komponentbaserade ramverk men erbjuder istället en mycket större frihet att
          designa webbplatsen själv.
        </p>
      </section>
      <TableTailwind></TableTailwind>
      <FormTailwind></FormTailwind>
    </main>
    <FooterTailwind></FooterTailwind>
  </div>
</template>

<style scoped></style>
