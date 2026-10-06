<script lang="ts">
  import { partnerBrands } from '../data/portfolio';
  import { reveal } from '../lib/reveal';
</script>

<section class="py-20 px-6 sm:px-10 lg:px-16 bg-white border-b border-[var(--color-cloud-card)]">
  <div class="max-w-5xl mx-auto text-center" use:reveal={{ delay: 0.1, y: 20 }}>
    <h2 class="text-xs font-semibold tracking-widest text-[var(--color-body-gray)] uppercase mb-10">
      Trusted & Impacting Enterprise Environments
    </h2>
    
    <div class="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
      {#each partnerBrands as partner, idx}
        <div 
          use:reveal={{ delay: 0.1 + idx * 0.08, y: 15 }}
          class="flex flex-col items-center group cursor-default transition-transform hover:scale-105"
        >
          <span class="text-lg md:text-xl font-semibold text-[var(--color-ink)]/75 group-hover:text-[var(--color-ink)] transition-colors tracking-tight">
            {partner.name}
          </span>
          <span class="text-[11px] text-[var(--color-body-gray)] uppercase tracking-wider mt-1">
            {partner.tag}
          </span>
        </div>
      {/each}
    </div>
  </div>
</section>
