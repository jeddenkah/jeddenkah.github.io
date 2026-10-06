<script lang="ts">
  import { personalInfo } from '../data/portfolio';
  import { reveal } from '../lib/reveal';
</script>

<footer id="contact" class="pt-24 pb-16 px-6 sm:px-10 lg:px-16 bg-white border-t border-[var(--color-cloud-card)]">
  <div class="max-w-5xl mx-auto">
    
    <!-- Elevated CTA Card (DESIGN.md: Charcoal #1f2025 with Cloud Card #ebf0f8 text, safe margins & padding) -->
    <div 
      use:reveal={{ delay: 0.1, y: 35 }}
      class="p-8 sm:p-14 md:p-16 rounded-[40px] bg-[var(--color-charcoal)] text-[var(--color-cloud-card)] text-center relative overflow-hidden mb-20 shadow-[0_20px_50px_rgba(31,32,37,0.15)] transition-transform hover:scale-[1.01]"
    >
      
      <!-- Ambient light effect -->
      <div class="absolute -top-24 -right-24 w-80 h-80 bg-[var(--color-metric-blue)]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-24 -left-24 w-80 h-80 bg-[var(--color-recovery-green)]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative z-10 max-w-2xl mx-auto">
        <span class="inline-block text-xs uppercase tracking-widest font-semibold text-[var(--color-cloud-card)]/70 mb-4">
          Ready for New Challenges
        </span>
        
        <h2 class="text-3xl sm:text-5xl font-semibold text-white tracking-[-1.5px] leading-tight mb-6">
          Let's engineer your next digital manufacturing breakthrough.
        </h2>

        <p class="text-base sm:text-lg text-[var(--color-cloud-card)]/80 font-normal mb-10 leading-relaxed">
          Open to roles in Industrial Software Engineering, Smart Factory Architecture, System Integration, and Fullstack Development.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-4">
          <!-- Primary CTA Button (128px radius, Cloud Card text) -->
          <a 
            href={`mailto:${personalInfo.email}`}
            class="px-8 py-3.5 rounded-[128px] bg-white text-[var(--color-charcoal)] text-base font-semibold hover:bg-[var(--color-cloud-card)] transition-all shadow-md hover:scale-105 active:scale-95"
          >
            Email: {personalInfo.email}
          </a>

          <a 
            href={`tel:${personalInfo.phone}`}
            class="px-6 py-3.5 rounded-[128px] bg-white/10 text-white text-base font-medium hover:bg-white/20 transition-all border border-white/20 hover:scale-105 active:scale-95"
          >
            {personalInfo.phone}
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom Navigation / Copyright -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-[var(--color-cloud-card)] text-xs text-[var(--color-body-gray)]">
      <div class="flex items-center gap-3">
        <span class="font-semibold text-[var(--color-ink)]">{personalInfo.name}</span>
        <span>&bull;</span>
        <span>Built with Svelte 5, Tailwind CSS & TypeScript</span>
      </div>

      <div class="flex items-center gap-6 font-medium text-[var(--color-ink)]">
        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" class="hover:underline">LinkedIn</a>
        <a href={personalInfo.github} target="_blank" rel="noreferrer" class="hover:underline">GitHub</a>
        <a href={`mailto:${personalInfo.email}`} class="hover:underline">Email</a>
      </div>
    </div>

  </div>
</footer>
