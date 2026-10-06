<script lang="ts">
  import { personalInfo } from '../data/portfolio';

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Engineering", href: "#experience" },
    { label: "Projects & MES", href: "#projects" },
    { label: "Education & Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ];
</script>

<header class="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
  <nav class="pointer-events-auto flex items-center justify-between gap-6 px-6 py-3 rounded-[32px] bg-white/80 backdrop-blur-md border border-[var(--color-cloud-card)] shadow-[0_8px_30px_rgb(0,0,0,0.06)] max-w-4xl w-full">
    <!-- Brand / Name -->
    <a href="#overview" class="flex items-center gap-2 group text-decoration-none">
      <span class="w-8 h-8 rounded-full bg-[var(--color-charcoal)] text-[var(--color-cloud-card)] flex items-center justify-center text-xs font-semibold tracking-wider">
        IF
      </span>
      <span class="text-[17px] font-semibold text-[var(--color-ink)] tracking-[-0.2px] group-hover:text-black transition-colors">
        {personalInfo.name.split(' ')[0]} <span class="text-[var(--color-body-gray)] font-normal text-sm hidden sm:inline">/ portfolio</span>
      </span>
    </a>

    <!-- Nav Links (Desktop) -->
    <div class="hidden md:flex items-center gap-7">
      {#each navLinks as link}
        <a 
          href={link.href} 
          class="text-[15px] font-medium text-[var(--color-body-gray)] hover:text-[var(--color-ink)] transition-colors"
        >
          {link.label}
        </a>
      {/each}
    </div>

    <!-- Conversion Button: Contact / Resume -->
    <div class="flex items-center gap-3">
      <a 
        href={`mailto:${personalInfo.email}`}
        class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-[128px] bg-[var(--color-charcoal)] text-[var(--color-cloud-card)] text-[14px] font-medium hover:bg-black transition-all shadow-sm"
      >
        <span class="w-2 h-2 rounded-full bg-[var(--color-recovery-green)] animate-pulse"></span>
        <span>Hire Me</span>
      </a>
    </div>
  </nav>
</header>
