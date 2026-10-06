<script lang="ts">
  import { partnerBrands } from '../data/portfolio';
  import { reveal } from '../lib/reveal';
  import CompanyLogo from './CompanyLogo.svelte';
  import TechIcon from './TechIcon.svelte';

  const keyTech = ["TypeScript", "Svelte 5", "Node.js", "Nest.js", "Python", "FastAPI", "Laravel", "Docker", "RabbitMQ", "PostgreSQL", "InfluxDB", "Redis"];
</script>

<section class="py-20 px-6 sm:px-10 lg:px-16 bg-white border-b border-[var(--color-cloud-card)] relative overflow-hidden bg-blueprint-grid">
  <!-- Subtle decorative ambient circles -->
  <div class="absolute -top-16 left-1/4 w-72 h-72 bg-[#415eee]/5 rounded-full blur-2xl pointer-events-none"></div>
  <div class="absolute -bottom-16 right-1/4 w-72 h-72 bg-[#31ce01]/5 rounded-full blur-2xl pointer-events-none"></div>

  <div class="max-w-6xl mx-auto text-center relative z-10" use:reveal={{ delay: 0.1, y: 20 }}>

    <!-- Section Label -->
    <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-cloud-card)] text-[11px] font-semibold text-[var(--color-body-gray)] uppercase tracking-wider mb-8 border border-black/5">
      <span class="w-2 h-2 rounded-full bg-[var(--color-metric-blue)]"></span>
      Enterprise Partners & Core Stack
    </div>

    <!-- Company Logos Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {#each partnerBrands as partner, idx}
        <div
          use:reveal={{ delay: 0.1 + idx * 0.08, y: 15 }}
          class="flex items-center gap-4 p-5 rounded-[24px] bg-white/90 backdrop-blur-xs border border-[var(--color-cloud-card)] shadow-xs hover:border-[var(--color-metric-blue)]/30 transition-all hover:-translate-y-1 hover:shadow-md cursor-default text-left group"
        >
          <CompanyLogo name={partner.name} size={42} class="transition-transform group-hover:scale-110" />
          <div>
            <h3 class="text-sm font-bold text-[var(--color-ink)] group-hover:text-[var(--color-metric-blue)] transition-colors leading-tight">
              {partner.name}
            </h3>
            <span class="text-[11px] text-[var(--color-body-gray)] font-medium block mt-1">
              {partner.tag}
            </span>
          </div>
        </div>
      {/each}
    </div>

    <!-- Ticker / Stack Row -->
    <div use:reveal={{ delay: 0.3, y: 15 }} class="pt-6 border-t border-black/5">
      <span class="text-xs font-semibold uppercase tracking-wider text-[var(--color-body-gray)] block mb-4">
        Integrated Tech Ecosystem
      </span>

      <div class="flex flex-wrap items-center justify-center gap-2.5">
        {#each keyTech as tech}
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-cloud-card)] text-xs font-medium text-[var(--color-ink)] border border-transparent hover:border-black/10 transition-all hover:scale-105 hover:bg-white shadow-2xs">
            <TechIcon name={tech} size={15} />
            <span>{tech}</span>
          </div>
        {/each}
      </div>
    </div>

  </div>
</section>
