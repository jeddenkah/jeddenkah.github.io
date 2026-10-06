<script lang="ts">
  import { experiences } from '../data/portfolio';
  import { reveal } from '../lib/reveal';
</script>

<section id="experience" class="py-24 px-6 sm:px-10 lg:px-16 bg-white border-b border-[var(--color-cloud-card)]">
  <div class="max-w-5xl mx-auto">
    
    <!-- Section Label -->
    <div class="mb-14 text-center md:text-left" use:reveal={{ delay: 0.1, y: 25 }}>
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[9999px] bg-[var(--color-cloud-card)] text-xs font-semibold text-[var(--color-body-gray)] uppercase tracking-wider mb-3">
        Career Trajectory
      </div>
      <h2 class="text-3xl sm:text-5xl font-semibold text-[var(--color-ink)] tracking-[-1.5px] mb-4">
        Engineering & Industrial Experience
      </h2>
      <p class="text-lg text-[var(--color-body-gray)] max-w-2xl leading-relaxed">
        6+ years leading digitalization, fullstack software engineering, and smart manufacturing initiatives at Astra Otoparts and tech startups.
      </p>
    </div>

    <!-- Timeline Grid / Cards with generous inner padding and margins -->
    <div class="space-y-8">
      {#each experiences as exp, idx}
        <div 
          use:reveal={{ delay: 0.1 + idx * 0.08, y: 30 }}
          class="p-7 sm:p-9 md:p-10 rounded-[32px] bg-[var(--color-cloud-card)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-transparent hover:border-black/5 hover:-translate-y-1"
        >
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5">
            <div>
              <span class="inline-block text-xs font-semibold uppercase tracking-wider text-[var(--color-body-gray)] mb-1">
                {exp.company} &bull; {exp.location}
              </span>
              <h3 class="text-2xl sm:text-[26px] font-semibold text-[var(--color-ink)] tracking-tight">
                {exp.role}
              </h3>
            </div>
            
            <div class="self-start md:self-auto">
              <span class="inline-flex items-center px-4 py-1.5 rounded-[128px] bg-white text-xs font-semibold text-[var(--color-ink)] shadow-xs border border-black/5">
                {exp.period}
              </span>
            </div>
          </div>

          <!-- Description points -->
          {#if exp.description}
            <ul class="space-y-2.5 mb-6">
              {#each exp.description as desc}
                <li class="flex items-start gap-3 text-[15px] sm:text-base text-[var(--color-body-gray)] leading-relaxed">
                  <span class="w-2 h-2 rounded-full bg-[var(--color-metric-blue)] mt-2 shrink-0"></span>
                  <span>{desc}</span>
                </li>
              {/each}
            </ul>
          {/if}

          <!-- Tech stack pills -->
          <div class="flex flex-wrap gap-2 pt-4 border-t border-black/5">
            {#each exp.stack as tech}
              <span class="px-3.5 py-1.5 rounded-full bg-white/90 text-xs font-medium text-[var(--color-ink)] border border-black/5 shadow-xs transition-transform hover:scale-105">
                {tech}
              </span>
            {/each}
          </div>
        </div>
      {/each}
    </div>

  </div>
</section>
