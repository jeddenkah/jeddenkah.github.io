<script lang="ts">
  import { education, certifications, organizations, techSkills } from '../data/portfolio';
  import { reveal } from '../lib/reveal';
  import CompanyLogo from './CompanyLogo.svelte';
  import TechIcon from './TechIcon.svelte';
</script>

<section id="skills" class="py-24 px-6 sm:px-10 lg:px-16 bg-white border-b border-[var(--color-cloud-card)] relative overflow-hidden bg-dot-matrix">
  <!-- Ambient background glow -->
  <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-[#ebf0f8]/60 to-transparent blur-3xl pointer-events-none"></div>

  <div class="max-w-6xl mx-auto space-y-20 relative z-10">

    <!-- Tech Stack Matrix -->
    <div>
      <div class="text-center max-w-2xl mx-auto mb-14" use:reveal={{ delay: 0.1, y: 25 }}>
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[9999px] bg-[var(--color-cloud-card)] text-xs font-semibold text-[var(--color-body-gray)] uppercase tracking-wider mb-3 shadow-xs border border-black/5">
          <span class="w-2 h-2 rounded-full bg-[var(--color-metric-blue)]"></span>
          Fullstack & Industrial Ecosystem
        </div>
        <h2 class="text-3xl sm:text-5xl font-semibold text-[var(--color-ink)] tracking-[-1.5px] mb-4">
          Technical Skills & Stack
        </h2>
        <p class="text-base sm:text-lg text-[var(--color-body-gray)] leading-relaxed">
          Comprehensive capabilities spanning low-latency industrial communication, distributed backends, and responsive modern frontends.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- AI/ML Knowledge -->
        <div
          use:reveal={{ delay: 0.05, y: 25 }}
          class="p-7 rounded-[28px] bg-white/90 backdrop-blur-xs border border-[var(--color-cloud-card)] hover:border-[#b9a6ff]/40 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
        >
          <div class="flex items-center gap-2.5 mb-5">
            <span class="w-3.5 h-3.5 rounded-full bg-[#b9a6ff]"></span>
            <h3 class="text-lg font-semibold text-[var(--color-ink)]">AI/ML Knowledge & Agents</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            {#each techSkills.aiMl as item}
              <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-cloud-card)] text-xs font-medium text-[var(--color-ink)] shadow-2xs transition-all hover:scale-105 hover:bg-white border border-transparent hover:border-black/5">
                <TechIcon name={item} size={14} />
                {item}
              </span>
            {/each}
          </div>
        </div>

        <!-- Backend -->
        <div
          use:reveal={{ delay: 0.1, y: 25 }}
          class="p-7 rounded-[28px] bg-white/90 backdrop-blur-xs border border-[var(--color-cloud-card)] hover:border-[var(--color-metric-blue)]/30 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
        >
          <div class="flex items-center gap-2.5 mb-5">
            <span class="w-3.5 h-3.5 rounded-full bg-[var(--color-metric-blue)]"></span>
            <h3 class="text-lg font-semibold text-[var(--color-ink)]">Backend & Microservices</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            {#each techSkills.backend as item}
              <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-cloud-card)] text-xs font-medium text-[var(--color-ink)] shadow-2xs transition-all hover:scale-105 hover:bg-white border border-transparent hover:border-black/5">
                <TechIcon name={item} size={14} />
                {item}
              </span>
            {/each}
          </div>
        </div>

        <!-- Frontend -->
        <div
          use:reveal={{ delay: 0.2, y: 25 }}
          class="p-7 rounded-[28px] bg-white/90 backdrop-blur-xs border border-[var(--color-cloud-card)] hover:border-[var(--color-coral-signal)]/40 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
        >
          <div class="flex items-center gap-2.5 mb-5">
            <span class="w-3.5 h-3.5 rounded-full bg-[var(--color-coral-signal)]"></span>
            <h3 class="text-lg font-semibold text-[var(--color-ink)]">Frontend & Mobile/Web</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            {#each techSkills.frontend as item}
              <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-cloud-card)] text-xs font-medium text-[var(--color-ink)] shadow-2xs transition-all hover:scale-105 hover:bg-white border border-transparent hover:border-black/5">
                <TechIcon name={item} size={14} />
                {item}
              </span>
            {/each}
          </div>
        </div>

        <!-- Languages -->
        <div
          use:reveal={{ delay: 0.3, y: 25 }}
          class="p-7 rounded-[28px] bg-white/90 backdrop-blur-xs border border-[var(--color-cloud-card)] hover:border-[var(--color-signal-gold)]/40 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
        >
          <div class="flex items-center gap-2.5 mb-5">
            <span class="w-3.5 h-3.5 rounded-full bg-[var(--color-signal-gold)]"></span>
            <h3 class="text-lg font-semibold text-[var(--color-ink)]">Core Languages</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            {#each techSkills.languages as item}
              <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-cloud-card)] text-xs font-medium text-[var(--color-ink)] shadow-2xs transition-all hover:scale-105 hover:bg-white border border-transparent hover:border-black/5">
                <TechIcon name={item} size={14} />
                {item}
              </span>
            {/each}
          </div>
        </div>

        <!-- Databases -->
        <div
          use:reveal={{ delay: 0.4, y: 25 }}
          class="p-7 rounded-[28px] bg-white/90 backdrop-blur-xs border border-[var(--color-cloud-card)] hover:border-[var(--color-recovery-green)]/40 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
        >
          <div class="flex items-center gap-2.5 mb-5">
            <span class="w-3.5 h-3.5 rounded-full bg-[var(--color-recovery-green)]"></span>
            <h3 class="text-lg font-semibold text-[var(--color-ink)]">Databases & Cache</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            {#each techSkills.databases as item}
              <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-cloud-card)] text-xs font-medium text-[var(--color-ink)] shadow-2xs transition-all hover:scale-105 hover:bg-white border border-transparent hover:border-black/5">
                <TechIcon name={item} size={14} />
                {item}
              </span>
            {/each}
          </div>
        </div>

        <!-- DevOps & IoT -->
        <div
          use:reveal={{ delay: 0.5, y: 25 }}
          class="p-7 rounded-[28px] bg-white/90 backdrop-blur-xs border border-[var(--color-cloud-card)] hover:border-[var(--color-sleep-lilac)]/40 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
        >
          <div class="flex items-center gap-2.5 mb-5">
            <span class="w-3.5 h-3.5 rounded-full bg-[var(--color-sleep-lilac)]"></span>
            <h3 class="text-lg font-semibold text-[var(--color-ink)]">DevOps, Industrial IoT & OT</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            {#each techSkills.devopsIoT as item}
              <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-cloud-card)] text-xs font-medium text-[var(--color-ink)] shadow-2xs transition-all hover:scale-105 hover:bg-white border border-transparent hover:border-black/5">
                <TechIcon name={item} size={14} />
                {item}
              </span>
            {/each}
          </div>
        </div>
      </div>
    </div>

    <!-- Education & Certifications Row -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10 border-t border-[var(--color-cloud-card)]">

      <!-- Education Card -->
      <div
        use:reveal={{ delay: 0.2, y: 30 }}
        class="p-8 sm:p-10 rounded-[36px] bg-white/90 backdrop-blur-md flex flex-col justify-between border border-[var(--color-cloud-card)] hover:border-black/10 transition-all duration-300 hover:shadow-md"
      >
        <div>
          <div class="flex items-start justify-between gap-4 mb-4">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-[var(--color-body-gray)]">Education</span>
              <h3 class="text-2xl sm:text-3xl font-semibold text-[var(--color-ink)] mt-1 mb-1">
                {education.institution}
              </h3>
            </div>
            <CompanyLogo name={education.institution} size={48} class="shadow-sm" />
          </div>

          <div class="flex items-center gap-3 mb-4">
            <span class="text-base font-medium text-[var(--color-ink)]">{education.degree}</span>
            <span class="text-xs px-3 py-1 rounded-full bg-[var(--color-cloud-card)] font-bold text-[var(--color-recovery-green)] border border-black/5 shadow-2xs">
              GPA {education.gpa}
            </span>
          </div>
          <p class="text-xs text-[var(--color-body-gray)] mb-6">{education.period} &bull; {education.location}</p>

          <div class="p-5 rounded-[24px] bg-[var(--color-cloud-card)]/60 border border-black/5 mb-6 shadow-2xs">
            <span class="text-xs font-semibold text-[var(--color-ink)] block mb-1.5">Undergraduate Thesis / Final Project:</span>
            <p class="text-xs text-[var(--color-body-gray)] leading-relaxed mb-3.5">
              {education.thesis.title}
            </p>
            <div class="flex flex-wrap gap-1.5">
              {#each education.thesis.stack as st}
                <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white text-[10px] font-semibold text-[var(--color-ink)] shadow-2xs">
                  <TechIcon name={st} size={11} />
                  {st}
                </span>
              {/each}
            </div>
          </div>
        </div>

        <div>
          <span class="text-xs font-semibold uppercase tracking-wider text-[var(--color-body-gray)] block mb-3">Honors & Competitions</span>
          <ul class="space-y-2">
            {#each education.highlights as h}
              <li class="flex items-center gap-2.5 text-xs text-[var(--color-body-gray)]">
                <svg class="w-4 h-4 text-[var(--color-signal-gold)] fill-current shrink-0" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>{h}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>

      <!-- Certifications & Leadership -->
      <div class="space-y-8">
        <!-- Certifications -->
        <div
          use:reveal={{ delay: 0.3, y: 30 }}
          class="p-8 sm:p-9 rounded-[36px] bg-white/90 backdrop-blur-md border border-[var(--color-cloud-card)] hover:border-black/10 transition-all duration-300 hover:shadow-md"
        >
          <span class="text-xs font-bold uppercase tracking-wider text-[var(--color-body-gray)] block mb-5">
            Professional Certifications
          </span>
          <div class="space-y-3.5">
            {#each certifications as cert}
              <div class="p-4 rounded-[20px] bg-[var(--color-cloud-card)]/50 border border-black/5 flex items-center justify-between shadow-2xs transition-all hover:scale-[1.01] hover:bg-white">
                <div class="flex items-center gap-3.5">
                  <CompanyLogo name={cert.issuer} size={36} class="shadow-2xs" />
                  <div>
                    <h4 class="text-sm font-semibold text-[var(--color-ink)]">{cert.name}</h4>
                    <span class="text-xs text-[var(--color-body-gray)]">{cert.issuer} &bull; {cert.category}</span>
                  </div>
                </div>
                <span class="text-xs font-bold text-[var(--color-ink)] px-3 py-1 rounded-full bg-white border border-black/5">
                  {cert.year}
                </span>
              </div>
            {/each}
          </div>
        </div>

        <!-- Leadership & Organizations -->
        <div
          use:reveal={{ delay: 0.4, y: 30 }}
          class="p-8 sm:p-9 rounded-[36px] bg-white/90 backdrop-blur-md border border-[var(--color-cloud-card)] hover:border-black/10 transition-all duration-300 hover:shadow-md"
        >
          <span class="text-xs font-bold uppercase tracking-wider text-[var(--color-body-gray)] block mb-5">
            Organizational Leadership
          </span>
          <div class="space-y-3.5">
            {#each organizations as org}
              <div class="p-4 rounded-[20px] bg-[var(--color-cloud-card)]/50 border border-black/5 shadow-2xs transition-all hover:scale-[1.01] hover:bg-white">
                <div class="flex items-center justify-between mb-1">
                  <h4 class="text-sm font-semibold text-[var(--color-ink)]">{org.role}</h4>
                  <span class="text-[11px] text-[var(--color-body-gray)]">{org.period}</span>
                </div>
                <p class="text-xs font-semibold text-[var(--color-metric-blue)] mb-1">{org.organization}</p>
                <p class="text-xs text-[var(--color-body-gray)] leading-relaxed">{org.description}</p>
              </div>
            {/each}
          </div>
        </div>
      </div>

    </div>

  </div>
</section>
