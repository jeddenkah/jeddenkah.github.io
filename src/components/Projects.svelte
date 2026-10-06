<script lang="ts">
  import { projects } from '../data/portfolio';
  import { reveal } from '../lib/reveal';
  import TechIcon from './TechIcon.svelte';
</script>

<section id="projects" class="py-24 px-6 sm:px-10 lg:px-16 bg-[#fafbfc] border-b border-[var(--color-cloud-card)] relative overflow-hidden bg-blueprint-grid">
  <!-- Subtle ambient glow -->
  <div class="absolute top-1/3 right-0 w-[550px] h-[550px] bg-gradient-to-l from-[#415eee]/5 to-transparent blur-3xl pointer-events-none"></div>

  <div class="max-w-6xl mx-auto relative z-10">

    <!-- Section Header -->
    <div class="text-center max-w-3xl mx-auto mb-16" use:reveal={{ delay: 0.1, y: 25 }}>
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[9999px] bg-white border border-[#ebf0f8] text-xs font-semibold text-[var(--color-body-gray)] uppercase tracking-wider mb-3 shadow-xs">
        <span class="w-2 h-2 rounded-full bg-[var(--color-recovery-green)]"></span>
        Key Projects & Innovations
      </div>
      <h2 class="text-3xl sm:text-5xl font-semibold text-[var(--color-ink)] tracking-[-1.5px] sm:tracking-[-1.92px] mb-4">
        Smart Factory MES & System Implementations
      </h2>
      <p class="text-lg text-[var(--color-body-gray)] leading-relaxed">
        Architected mission-critical manufacturing platforms, automated operations research, and enterprise integrations.
      </p>
    </div>

    <!-- Cloud Feature Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each projects as proj, idx}
        <div
          use:reveal={{ delay: 0.1 + idx * 0.08, y: 30 }}
          class="flex flex-col justify-between p-8 sm:p-9 rounded-[32px] bg-white/90 backdrop-blur-sm border border-[var(--color-cloud-card)] hover:border-[var(--color-metric-blue)]/30 transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.07)] hover:-translate-y-1.5 group"
        >

          <div>
            <!-- Top tag / category -->
            <div class="flex items-center justify-between gap-2 mb-5">
              <span class="text-xs font-bold uppercase tracking-wider text-[var(--color-body-gray)]">
                {proj.category}
              </span>
              <span class="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--color-cloud-card)] text-[var(--color-ink)] border border-black/5 shadow-2xs">
                {proj.year}
              </span>
            </div>

            <!-- Project Title -->
            <h3 class="text-2xl font-semibold text-[var(--color-ink)] tracking-[-0.8px] leading-tight mb-3 group-hover:text-[var(--color-metric-blue)] transition-colors">
              {proj.title}
            </h3>

            <!-- Description -->
            <p class="text-[15px] leading-relaxed text-[var(--color-body-gray)] mb-6 font-normal">
              {proj.description}
            </p>
          </div>

          <div>
            <!-- Metric Chips (if present) -->
            {#if proj.metrics && proj.metrics.length > 0}
              <div class="grid grid-cols-2 gap-2.5 mb-6 p-4 rounded-[20px] bg-[var(--color-cloud-card)]/70 border border-black/5 shadow-2xs">
                {#each proj.metrics as m}
                  <div class="flex flex-col">
                    <span class="text-[11px] text-[var(--color-body-gray)] font-medium">{m.label}</span>
                    <span class="text-base font-bold" style={`color: ${m.colorToken || '#1f2025'}`}>
                      {m.value}
                    </span>
                  </div>
                {/each}
              </div>
            {/if}

            <!-- Tech Pills with Icons -->
            <div class="flex flex-wrap gap-1.5 pt-4 border-t border-black/5">
              {#each proj.stack as tech}
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-cloud-card)] text-[11px] font-semibold text-[var(--color-ink)] border border-transparent hover:border-black/10 shadow-2xs transition-all hover:scale-105 hover:bg-white">
                  <TechIcon name={tech} size={13} />
                  {tech}
                </span>
              {/each}
            </div>
          </div>

        </div>
      {/each}
    </div>

  </div>
</section>
