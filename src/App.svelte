<script lang="ts">
  import Navbar from './components/Navbar.svelte';
  import Hero from './components/Hero.svelte';
  import Partners from './components/Partners.svelte';
  import Experience from './components/Experience.svelte';
  import Projects from './components/Projects.svelte';
  import Skills from './components/Skills.svelte';
  import Footer from './components/Footer.svelte';
</script>

<div class="min-h-screen bg-[var(--color-paper-white)] text-[var(--color-ink)] selection:bg-[var(--color-cloud-card)] selection:text-[var(--color-ink)] font-sans">
  <Navbar />
  <main>
    <Hero />
    <Partners />
    <Experience />
    <Projects />
    <Skills />
  </main>
  <Footer />
</div>
