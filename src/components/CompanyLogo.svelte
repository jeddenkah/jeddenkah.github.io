<script lang="ts">
  interface Props {
    name: string;
    class?: string;
    size?: number;
  }

  let { name, class: className = '', size = 32 }: Props = $props();

  const key = $derived(
    name.toLowerCase()
      .replace(/\s+/g, '')
      .replace(/[\.\,\-\(\)\/]/g, '')
  );
</script>

<div class="inline-flex items-center justify-center shrink-0 {className}">
  {#if key.includes('astra') || key.includes('nusametal')}
    <!-- Astra Otoparts / Nusametal emblem with distinctive Astra diamond/star geometry -->
    <svg viewBox="0 0 36 36" width={size} height={size} class="shrink-0">
      <rect width="36" height="36" rx="8" fill="#002D62" />
      <g transform="translate(4, 4)">
        <!-- Astra Star Emblem -->
        <polygon points="14,1 17,9 25,12 17,15 14,23 11,15 3,12 11,9" fill="#EE2726" />
        <polygon points="14,4 16,10 22,12 16,14 14,20 12,14 6,12 12,10" fill="#FFFFFF" />
        <polygon points="14,7 15,11 19,12 15,13 14,17 13,13 9,12 13,11" fill="#002D62" />
      </g>
    </svg>
  {:else if key.includes('telkom')}
    <!-- Telkom University Shield and Flame -->
    <svg viewBox="0 0 36 36" width={size} height={size} class="shrink-0">
      <rect width="36" height="36" rx="8" fill="#B91C1C" />
      <g transform="translate(6, 5)">
        <!-- Shield -->
        <path d="M12 2L3 5V13C3 18.5 7 23 12 24C17 23 21 18.5 21 13V5L12 2Z" fill="#FFFFFF" />
        <!-- Telkom Red Flame inside shield -->
        <path d="M12 5C9 8 7 11 7 14C7 17 9.2 19 12 19C14.8 19 17 17 17 14C17 10 13.5 8 13.5 8C13.5 8 14.5 11 13.5 12C12.5 13 11.5 12.5 11 11C10.5 9.5 11 8 12 5Z" fill="#B91C1C" />
      </g>
    </svg>
  {:else if key.includes('bandungtechnopark') || key.includes('technopark')}
    <!-- Bandung Techno Park Hexagon Hub -->
    <svg viewBox="0 0 36 36" width={size} height={size} class="shrink-0">
      <rect width="36" height="36" rx="8" fill="#0284C7" />
      <g transform="translate(6, 6)">
        <polygon points="12,1 22,7 22,17 12,23 2,17 2,7" fill="none" stroke="white" stroke-width="2.2" stroke-linejoin="round" />
        <circle cx="12" cy="12" r="3" fill="#F59E0B" />
        <line x1="12" y1="3" x2="12" y2="9" stroke="white" stroke-width="2" />
        <line x1="20" y1="16" x2="14.5" y2="13.5" stroke="white" stroke-width="2" />
        <line x1="4" y1="16" x2="9.5" y2="13.5" stroke="white" stroke-width="2" />
      </g>
    </svg>
  {:else if key.includes('buildwithangga') || key.includes('angga')}
    <!-- BuildWith Angga Badge -->
    <svg viewBox="0 0 36 36" width={size} height={size} class="shrink-0">
      <rect width="36" height="36" rx="8" fill="#4F46E5" />
      <g transform="translate(7, 7)">
        <path d="M2 18L11 3L20 18H14L11 12L8 18H2Z" fill="white" />
        <polygon points="11,7 13.5,12 8.5,12" fill="#38BDF8" />
      </g>
    </svg>
  {:else if key.includes('panak')}
    <!-- Panak.id Agro Livestock Tech -->
    <svg viewBox="0 0 36 36" width={size} height={size} class="shrink-0">
      <rect width="36" height="36" rx="8" fill="#10B981" />
      <g transform="translate(7, 7)">
        <path d="M11 2C6 2 2 6 2 11C2 17 8 20 11 21C14 20 20 17 20 11C20 6 16 2 11 2ZM7 11C7 9 8.5 7.5 11 7.5C13.5 7.5 15 9 15 11C15 13.5 12.5 15.5 11 16.5C9.5 15.5 7 13.5 7 11Z" fill="white" />
      </g>
    </svg>
  {:else if key.includes('edura')}
    <!-- Edura Indonesia Edutech -->
    <svg viewBox="0 0 36 36" width={size} height={size} class="shrink-0">
      <rect width="36" height="36" rx="8" fill="#8B5CF6" />
      <g transform="translate(6, 6)">
        <polygon points="12,3 23,9 12,15 1,9" fill="white" />
        <path d="M5 11.5V17C5 17 8 21 12 21C16 21 19 17 19 17V11.5L12 15L5 11.5Z" fill="#C4B5FD" />
        <circle cx="21" cy="14" r="1.5" fill="#FCD34D" />
      </g>
    </svg>
  {:else if key.includes('bnsp')}
    <!-- BNSP (Badan Nasional Sertifikasi Profesi) Official Garuda / Seal Badge -->
    <svg viewBox="0 0 36 36" width={size} height={size} class="shrink-0">
      <rect width="36" height="36" rx="8" fill="#0F172A" />
      <g transform="translate(6, 6)">
        <circle cx="12" cy="12" r="11" fill="#E2E8F0" stroke="#F59E0B" stroke-width="1.5" />
        <polygon points="12,4 14,9 19,10 15,14 16,19 12,16 8,19 9,14 5,10 10,9" fill="#D97706" />
        <circle cx="12" cy="12" r="3.5" fill="#B91C1C" />
      </g>
    </svg>
  {:else if key.includes('sap')}
    <!-- SAP Official Badge -->
    <svg viewBox="0 0 36 36" width={size} height={size} class="shrink-0">
      <rect width="36" height="36" rx="8" fill="#008FD3" />
      <text x="18" y="22" font-size="10.5" font-weight="900" fill="white" text-anchor="middle" font-family="sans-serif">SAP</text>
    </svg>
  {:else if key.includes('certiport')}
    <!-- Certiport Badge -->
    <svg viewBox="0 0 36 36" width={size} height={size} class="shrink-0">
      <rect width="36" height="36" rx="8" fill="#0284C7" />
      <g transform="translate(6, 6)">
        <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" fill="white" />
        <text x="12" y="15" font-size="7.5" font-weight="bold" fill="#0284C7" text-anchor="middle" font-family="sans-serif">CP</text>
      </g>
    </svg>
  {:else}
    <!-- Generic Enterprise Badge -->
    <svg viewBox="0 0 36 36" width={size} height={size} class="shrink-0">
      <rect width="36" height="36" rx="8" fill="#1F2025" />
      <path d="M12 11H24V25H12V11ZM14 13V23H22V13H14ZM16 15H20V17H16V15ZM16 19H20V21H16V19Z" fill="#EBF0F8" />
    </svg>
  {/if}
</div>
