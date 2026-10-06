<script lang="ts">
  import { experiences } from '../data/portfolio';
  import { reveal } from '../lib/reveal';
  import CompanyLogo from './CompanyLogo.svelte';
  import TechIcon from './TechIcon.svelte';
</script>

<section id="experience" class="py-24 px-6 sm:px-10 lg:px-16 bg-white border-b border-[var(--color-cloud-card)] relative overflow-hidden bg-dot-matrix">
  <!-- Subtle atmosphere glow -->
  <div class="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[var(--color-metric-blue)]/5 to-transparent blur-3xl pointer-events-none"></div>

  <div class="max-w-5xl mx-auto relative z-10">

    <!-- Section Label -->
    <div class="mb-14 text-center md:text-left" use:reveal={{ delay: 0.1, y: 25 }}>
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[9999px] bg-[var(--color-cloud-card)] text-xs font-semibold text-[var(--color-body-gray)] uppercase tracking-wider mb-3 shadow-xs border border-black/5">
        <span class="w-2 h-2 rounded-full bg-[var(--color-metric-blue)] animate-pulse"></span>
        Career Trajectory
      </div>
      <h2 class="text-3xl sm:text-5xl font-semibold text-[var(--color-ink)] tracking-[-1.5px] mb-4">
        Engineering & Industrial Experience
      </h2>
      <p class="text-lg text-[var(--color-body-gray)] max-w-2xl leading-relaxed">
        6+ years leading digitalization, fullstack software engineering, and smart manufacturing initiatives at Astra Otoparts and tech startups.
      </p>
    </div>

    <!-- Timeline Grid / Cards -->
    <div class="space-y-8">
      {#each experiences as exp, idx}
        <div
          use:reveal={{ delay: 0.1 + idx * 0.08, y: 30 }}
          class="p-7 sm:p-9 md:p-10 rounded-[32px] bg-white/80 backdrop-blur-md border border-[var(--color-cloud-card)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[var(--color-metric-blue)]/20 hover:-translate-y-1.5 group"
        >
          <div class="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-7">
            <div class="flex items-start gap-5">
              <CompanyLogo name={exp.company} size={48} class="mt-1 shadow-sm transition-transform group-hover:scale-110" />
              <div>
                <span class="inline-block text-xs font-bold uppercase tracking-wider text-[var(--color-body-gray)] mb-1.5">
                  {exp.company} &bull; {exp.location}
                </span>
                <h3 class="text-2xl sm:text-[28px] font-semibold text-[var(--color-ink)] tracking-tight group-hover:text-[var(--color-metric-blue)] transition-colors">
                  {exp.role}
                </h3>
              </div>
            </div>

            <div class="self-start md:self-auto shrink-0">
              <span class="inline-flex items-center px-4 py-2 rounded-[128px] bg-[var(--color-cloud-card)] text-xs font-bold text-[var(--color-ink)] border border-black/5 shadow-xs">
                {exp.period}
              </span>
            </div>
          </div>

          <!-- Description points -->
          {#if exp.description}
            <ul class="space-y-3 mb-8">
              {#each exp.description as desc}
                <li class="flex items-start gap-3.5 text-[15px] sm:text-base text-[var(--color-body-gray)] leading-relaxed">
                  <div class="w-5 h-5 rounded-full bg-[var(--color-metric-blue)]/10 flex items-center justify-center mt-0.5 shrink-0">
                    <div class="w-1.5 h-1.5 rounded-full bg-[var(--color-metric-blue)]"></div>
                  </div>
                  <span>{desc}</span>
                </li>
              {/each}
            </ul>
          {/if}

          <!-- Tech stack pills -->
          <div class="flex flex-wrap gap-2.5 pt-6 border-t border-black/5">
            {#each exp.stack as tech}
              <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-xs font-semibold text-[var(--color-ink)] border border-[var(--color-cloud-card)] shadow-2xs transition-all hover:scale-105 hover:border-[var(--color-metric-blue)]/30 hover:shadow-sm">
                <TechIcon name={tech} size={14} />
                {tech}
              </span>
            {/each}
          </div>
        </div>
      {/each}
    </div>

  </div>
</section>
