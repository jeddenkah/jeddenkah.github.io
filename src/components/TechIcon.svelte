<script lang="ts">
  interface Props {
    name: string;
    class?: string;
    size?: number;
    showColor?: boolean;
  }

  let { name, class: className = '', size = 16, showColor = true }: Props = $props();

  const normalized = $derived(
    name.toLowerCase()
      .replace(/\.js$/, '')
      .replace(/\s+/g, '')
      .replace(/[\(\)\/\-]/g, '')
  );
</script>

<span class="inline-flex items-center justify-center shrink-0 {className}" style="width: {size}px; height: {size}px;">
  {#if normalized.includes('typescript') || normalized === 'ts'}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <rect width="24" height="24" rx="4" fill={showColor ? "#3178C6" : "currentColor"} />
      <path d="M11.5 8H5.5V10.2H7.3V18H9.7V10.2H11.5V8Z" fill="white" />
      <path d="M18.8 10.7C18.4 10.2 17.6 9.8 16.5 9.8C14.7 9.8 13.7 10.8 13.7 12.1C13.7 13.4 14.5 14.1 16.1 14.8L16.6 15C17.4 15.3 17.7 15.7 17.7 16.3C17.7 17.1 17 17.6 15.9 17.6C14.7 17.6 13.9 17 13.4 16.2L11.8 17.4C12.7 18.9 14.1 19.6 16 19.6C18.5 19.6 20.1 18.3 20.1 16.2C20.1 14.6 19.1 13.8 17.4 13.1L16.9 12.9C16.2 12.6 15.9 12.3 15.9 11.8C15.9 11.2 16.4 10.8 17.2 10.8C17.9 10.8 18.5 11.1 18.9 11.6L18.8 10.7Z" fill="white" />
    </svg>
  {:else if normalized.includes('javascript') || normalized === 'js'}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <rect width="24" height="24" rx="4" fill={showColor ? "#F7DF1E" : "currentColor"} />
      <path d="M6 8.5H8.5V15.5C8.5 17 7.5 17.8 6 17.8C5.2 17.8 4.3 17.4 3.8 16.8L4.8 15.2C5.1 15.6 5.5 15.8 6 15.8C6.5 15.8 6.8 15.5 6.8 14.8V8.5H6Z" fill="#222326" />
      <path d="M14.5 8.7C13.2 8.7 12.2 9.4 11.7 10.4L13.3 11.3C13.6 10.7 14 10.4 14.6 10.4C15.2 10.4 15.6 10.7 15.6 11.2C15.6 11.6 15.3 11.9 14.4 12.3L13.6 12.7C12.1 13.4 11.4 14.3 11.4 15.6C11.4 17.1 12.6 18.1 14.5 18.1C15.8 18.1 16.8 17.5 17.4 16.6L15.9 15.6C15.6 16.1 15.1 16.4 14.5 16.4C13.9 16.4 13.5 16.1 13.5 15.5C13.5 14.9 13.9 14.6 14.8 14.2L15.6 13.8C17.2 13.1 17.9 12.2 17.9 11C17.9 9.6 16.5 8.7 14.5 8.7Z" fill="#222326" />
    </svg>
  {:else if normalized.includes('python')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <path d="M11.9 2C6.9 2 7.2 4.2 7.2 4.2L7.2 6.5H12V7.3H5.2C5.2 7.3 2 6.9 2 11.9C2 16.8 4.8 16.6 4.8 16.6H6.4V14.3C6.4 14.3 6.3 11.6 9 11.6H13.8C13.8 11.6 16.3 11.6 16.3 9.1V4.4C16.3 4.4 16.7 2 11.9 2ZM9.6 3.6C10.2 3.6 10.6 4.1 10.6 4.7C10.6 5.3 10.2 5.7 9.6 5.7C9 5.7 8.6 5.3 8.6 4.7C8.6 4.1 9 3.6 9.6 3.6Z" fill={showColor ? "#3776AB" : "currentColor"} />
      <path d="M12.1 22C17.1 22 16.8 19.8 16.8 19.8L16.8 17.5H12V16.7H18.8C18.8 16.7 22 17.1 22 12.1C22 7.2 19.2 7.4 19.2 7.4H17.6V9.7C17.6 9.7 17.7 12.4 15 12.4H10.2C10.2 12.4 7.7 12.4 7.7 14.9V19.6C7.7 19.6 7.3 22 12.1 22ZM14.4 20.4C13.8 20.4 13.4 19.9 13.4 19.3C13.4 18.7 13.8 18.3 14.4 18.3C15 18.3 15.4 18.7 15.4 19.3C15.4 19.9 15 20.4 14.4 20.4Z" fill={showColor ? "#FFD43B" : "currentColor"} />
    </svg>
  {:else if normalized.includes('php')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <ellipse cx="12" cy="12" rx="11" ry="8" fill={showColor ? "#777BB4" : "currentColor"} />
      <text x="12" y="14.5" font-size="7" font-weight="900" fill="white" text-anchor="middle" font-family="sans-serif">PHP</text>
    </svg>
  {:else if normalized.includes('node')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <path d="M12 2L3 7.2V17.5L12 22.7L21 17.5V7.2L12 2Z" fill={showColor ? "#5FA04E" : "currentColor"} />
      <path d="M12 5.5L6.5 8.7V15.2L12 18.4L17.5 15.2V8.7L12 5.5Z" fill="white" />
      <path d="M12 9.5L9 11.2V14.6L12 16.3L15 14.6V11.2L12 9.5Z" fill={showColor ? "#5FA04E" : "currentColor"} />
    </svg>
  {:else if normalized.includes('nest')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <path d="M12 2L2 9.5L6 22H18L22 9.5L12 2Z" fill={showColor ? "#E0234E" : "currentColor"} />
      <path d="M12 5.5L5 11L8 19.5H16L19 11L12 5.5Z" fill="white" />
    </svg>
  {:else if normalized.includes('express')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <rect width="24" height="24" rx="5" fill="#222326" />
      <text x="12" y="15" font-size="8" font-weight="bold" fill="white" text-anchor="middle" font-family="monospace">ex</text>
    </svg>
  {:else if normalized.includes('fastapi')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <circle cx="12" cy="12" r="10.5" fill={showColor ? "#059669" : "currentColor"} />
      <path d="M13.5 4L7 13.5H12L10.5 20L17 10.5H12L13.5 4Z" fill="white" />
    </svg>
  {:else if normalized.includes('flask')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <path d="M10 3V7.5L5.3 17.5C4.5 19.2 5.7 21 7.5 21H16.5C18.3 21 19.5 19.2 18.7 17.5L14 7.5V3H10ZM12 11C13.1 11 14 11.9 14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11Z" fill={showColor ? "#333333" : "currentColor"} />
    </svg>
  {:else if normalized.includes('laravel')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <path d="M19.8 6.5L12.5 2.2C12.2 2 11.8 2 11.5 2.2L4.2 6.5C3.9 6.7 3.7 7 3.7 7.4V16.6C3.7 17 3.9 17.3 4.2 17.5L11.5 21.8C11.8 22 12.2 22 12.5 21.8L19.8 17.5C20.1 17.3 20.3 17 20.3 16.6V7.4C20.3 7 20.1 6.7 19.8 6.5ZM12 4.3L17.7 7.6L12 10.9L6.3 7.6L12 4.3ZM5.7 9.2L11 12.3V18.8L5.7 15.7V9.2ZM13 18.8V12.3L18.3 9.2V15.7L13 18.8Z" fill={showColor ? "#FF2D20" : "currentColor"} />
    </svg>
  {:else if normalized.includes('rabbitmq')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <rect width="24" height="24" rx="5" fill={showColor ? "#FF6600" : "currentColor"} />
      <circle cx="16" cy="9" r="2" fill="white" />
      <path d="M6 16C6 13 8 11 11 11H17V17H11C8 17 6 16 6 16Z" fill="white" />
    </svg>
  {:else if normalized.includes('svelte')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <path d="M18.8 5C17.3 3 14.4 2.3 12.1 3.4L6.9 5.8C5.2 6.6 4.2 8.3 4.3 10.1C4.4 11.4 5.1 12.5 6.2 13.2L6.1 13.3C4.6 15.3 5 18.1 7.1 19.6C8.2 20.4 9.6 20.8 11 20.7C12.1 20.6 13.2 20.1 14.1 19.3L19.3 16.9C21 16.1 22 14.4 21.9 12.6C21.8 11.3 21.1 10.2 20 9.5L20.1 9.4C20.9 8.2 20.8 6.5 18.8 5Z" fill={showColor ? "#FF3E00" : "currentColor"} />
    </svg>
  {:else if normalized.includes('react')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <ellipse cx="12" cy="12" rx="3.5" ry="3.5" fill={showColor ? "#61DAFB" : "currentColor"} />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke={showColor ? "#61DAFB" : "currentColor"} stroke-width="1.6" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke={showColor ? "#61DAFB" : "currentColor"} stroke-width="1.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke={showColor ? "#61DAFB" : "currentColor"} stroke-width="1.6" transform="rotate(120 12 12)" />
    </svg>
  {:else if normalized.includes('vue')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <path d="M2 3H6L12 13.5L18 3H22L12 20.5L2 3Z" fill={showColor ? "#41B883" : "currentColor"} />
      <path d="M6.5 3H10L12 6.5L14 3H17.5L12 12.5L6.5 3Z" fill={showColor ? "#35495E" : "currentColor"} />
    </svg>
  {:else if normalized.includes('tailwind')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill={showColor ? "#06B6D4" : "currentColor"} />
    </svg>
  {:else if normalized.includes('bootstrap')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <rect width="24" height="24" rx="5" fill={showColor ? "#7952B3" : "currentColor"} />
      <path d="M8 6H13C15 6 16.5 7 16.5 8.7C16.5 9.8 15.8 10.7 14.7 11.1C16.2 11.5 17 12.6 17 14C17 16 15.3 17.5 13 17.5H8V6ZM10.5 8V10.5H12.7C13.6 10.5 14.2 10 14.2 9.2C14.2 8.4 13.6 8 12.7 8H10.5ZM10.5 12.5V15.5H13C14 15.5 14.7 15 14.7 14C14.7 13 14 12.5 13 12.5H10.5Z" fill="white" />
    </svg>
  {:else if normalized.includes('postgres')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <circle cx="12" cy="12" r="10.5" fill={showColor ? "#336791" : "currentColor"} />
      <path d="M12 5C8.5 5 6 7.5 6 11C6 14.5 8.5 17.5 12 17.5C14 17.5 15.5 16.8 16.5 15.5L15 14.2C14.3 15.1 13.3 15.6 12 15.6C9.6 15.6 7.9 13.6 7.9 11C7.9 8.4 9.6 6.9 12 6.9C13.8 6.9 15.1 7.8 15.7 9.2L17.5 8.4C16.5 6.3 14.5 5 12 5Z" fill="white" />
    </svg>
  {:else if normalized.includes('mysql')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <rect width="24" height="24" rx="5" fill={showColor ? "#00758F" : "currentColor"} />
      <text x="12" y="15" font-size="6.5" font-weight="900" fill={showColor ? "#F29111" : "white"} text-anchor="middle" font-family="sans-serif">SQL</text>
    </svg>
  {:else if normalized.includes('influx')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <rect width="24" height="24" rx="5" fill={showColor ? "#22ADF6" : "currentColor"} />
      <path d="M6 16L10 8L14 14L18 6" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    </svg>
  {:else if normalized.includes('redis')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <path d="M3 8L12 3L21 8L12 13L3 8Z" fill={showColor ? "#DC382D" : "currentColor"} />
      <path d="M3 12L12 17L21 12L12 7L3 12Z" fill={showColor ? "#A81D17" : "currentColor"} opacity="0.7" />
      <path d="M3 16L12 21L21 16L12 11L3 16Z" fill={showColor ? "#80120E" : "currentColor"} />
    </svg>
  {:else if normalized.includes('docker')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <path d="M22.5 10.5C21.8 9.8 20.8 9.5 20.8 9.5C20.3 8.3 19.3 7.5 18.2 7.2L17.7 8.3C18.4 8.6 18.9 9.1 19.2 9.8C18.6 10.1 17.5 10.7 16.5 10.7H2.5C2.2 11.8 2.5 14.8 4.7 16.8C6.9 18.8 10.5 19 13.8 19C18.2 19 21.8 16.5 22.8 12.2C23.2 11.5 22.9 10.9 22.5 10.5Z" fill={showColor ? "#2496ED" : "currentColor"} />
      <rect x="5.5" y="7.5" width="2" height="2" rx="0.3" fill={showColor ? "#2496ED" : "currentColor"} />
      <rect x="8.5" y="7.5" width="2" height="2" rx="0.3" fill={showColor ? "#2496ED" : "currentColor"} />
      <rect x="11.5" y="7.5" width="2" height="2" rx="0.3" fill={showColor ? "#2496ED" : "currentColor"} />
      <rect x="8.5" y="4.5" width="2" height="2" rx="0.3" fill={showColor ? "#2496ED" : "currentColor"} />
      <rect x="11.5" y="4.5" width="2" height="2" rx="0.3" fill={showColor ? "#2496ED" : "currentColor"} />
    </svg>
  {:else if normalized.includes('nginx')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" fill={showColor ? "#009639" : "currentColor"} />
      <path d="M8 7.5V16.5H10.5L13.5 11.5V16.5H16V7.5H13.5L10.5 12.5V7.5H8Z" fill="white" />
    </svg>
  {:else if normalized.includes('iis') || normalized.includes('windows')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <path d="M3 4.5L10.5 3.5V11.2H3V4.5ZM11.5 3.3L21 2V11.2H11.5V3.3ZM3 12.2H10.5V19.8L3 18.8V12.2ZM11.5 12.2H21V21.4L11.5 20.1V12.2Z" fill={showColor ? "#0078D4" : "currentColor"} />
    </svg>
  {:else if normalized.includes('plc') || normalized.includes('ot') || normalized.includes('hardware')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <rect x="3" y="4" width="18" height="16" rx="3" fill={showColor ? "#334155" : "currentColor"} />
      <rect x="5.5" y="6.5" width="6" height="5" rx="1" fill="#38BDF8" />
      <circle cx="15.5" cy="7.5" r="1.2" fill="#22C55E" />
      <circle cx="18.5" cy="7.5" r="1.2" fill="#EAB308" />
      <circle cx="15.5" cy="10.5" r="1.2" fill="#EF4444" />
      <circle cx="18.5" cy="10.5" r="1.2" fill="#3B82F6" />
      <path d="M6 15H18" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" />
      <path d="M8 17H16" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" />
    </svg>
  {:else if normalized.includes('websocket')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <circle cx="12" cy="12" r="10" fill={showColor ? "#6366F1" : "currentColor"} />
      <path d="M7 12L10 9M7 12L10 15M7 12H17M17 12L14 9M17 12L14 15" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  {:else if normalized.includes('git')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <path d="M21.7 10.7L13.3 2.3C12.9 1.9 12.3 1.9 11.9 2.3L10.3 3.9L12.3 5.9C13 5.7 13.8 6 14.3 6.5C14.8 7 15.1 7.8 14.9 8.5L17.2 10.8C17.9 10.6 18.7 10.9 19.2 11.4C19.9 12.1 19.9 13.2 19.2 13.9C18.5 14.6 17.4 14.6 16.7 13.9C16.2 13.4 16 12.7 16.2 12L14.1 9.9V14.9C14.3 15.2 14.4 15.6 14.4 16C14.4 17.1 13.5 18 12.4 18C11.3 18 10.4 17.1 10.4 16C10.4 15.3 10.8 14.7 11.4 14.3V9.6C10.8 9.2 10.4 8.6 10.4 7.9C10.4 7.4 10.6 7 10.9 6.6L8.9 4.6L2.3 11.2C1.9 11.6 1.9 12.2 2.3 12.6L10.7 21C11.1 21.4 11.7 21.4 12.1 21L21.7 11.4C22.1 11.1 22.1 10.5 21.7 10.7Z" fill={showColor ? "#F05032" : "currentColor"} />
    </svg>
  {:else if normalized.includes('linux')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <path d="M12 2C9.5 2 8 4 8 7C8 8.5 7.5 9.5 6.5 11C5.5 12.5 5 14.5 5 17C5 20.5 8 22 12 22C16 22 19 20.5 19 17C19 14.5 18.5 12.5 17.5 11C16.5 9.5 16 8.5 16 7C16 4 14.5 2 12 2Z" fill={showColor ? "#FCC624" : "currentColor"} />
      <circle cx="10" cy="6.5" r="1" fill="#222326" />
      <circle cx="14" cy="6.5" r="1" fill="#222326" />
      <path d="M11 8.5C11 8.5 11.5 9.5 12 9.5C12.5 9.5 13 8.5 13 8.5H11Z" fill="#E67E22" />
    </svg>
  {:else if normalized.includes('opencv')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <circle cx="12" cy="7" r="4.5" fill={showColor ? "#ED1B24" : "currentColor"} />
      <circle cx="7" cy="16" r="4.5" fill={showColor ? "#00B050" : "currentColor"} />
      <circle cx="17" cy="16" r="4.5" fill={showColor ? "#0070C0" : "currentColor"} />
      <circle cx="12" cy="7" r="2" fill="white" />
      <circle cx="7" cy="16" r="2" fill="white" />
      <circle cx="17" cy="16" r="2" fill="white" />
    </svg>
  {:else if normalized.includes('pytorch')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <path d="M13.5 3L11.5 5L14 7.5C10.5 7.8 7.5 10.7 7.5 14.5C7.5 18.5 10.8 21.5 14.8 21.5C18.8 21.5 22 18.5 22 14.5C22 12 20.8 9.8 19 8.5L17.5 10C18.8 11.1 19.8 12.7 19.8 14.5C19.8 17.3 17.5 19.5 14.8 19.5C12 19.5 9.8 17.3 9.8 14.5C9.8 12 11.8 9.9 14.3 9.7L12 12L13.5 13.5L18 9L13.5 3Z" fill={showColor ? "#EE4C2C" : "currentColor"} />
      <circle cx="16.5" cy="5.5" r="1.2" fill={showColor ? "#EE4C2C" : "currentColor"} />
    </svg>
  {:else if normalized.includes('sap')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <rect width="24" height="24" rx="4" fill={showColor ? "#008FD3" : "currentColor"} />
      <text x="12" y="15" font-size="7" font-weight="bold" fill="white" text-anchor="middle" font-family="sans-serif">SAP</text>
    </svg>
  {:else if normalized.includes('google') || normalized.includes('ortools')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <circle cx="12" cy="12" r="10.5" fill={showColor ? "#4285F4" : "currentColor"} />
      <path d="M12 7V17M7 12H17" stroke="white" stroke-width="2.5" stroke-linecap="round" />
    </svg>
  {:else if normalized.includes('sql') || normalized.includes('database')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <ellipse cx="12" cy="6" rx="8" ry="3" fill={showColor ? "#415eee" : "currentColor"} />
      <path d="M4 6V12C4 13.7 7.6 15 12 15C16.4 15 20 13.7 20 12V6" fill="none" stroke={showColor ? "#415eee" : "currentColor"} stroke-width="2" />
      <path d="M4 12V18C4 19.7 7.6 21 12 21C16.4 21 20 19.7 20 18V12" fill="none" stroke={showColor ? "#415eee" : "currentColor"} stroke-width="2" />
    </svg>
  {:else if normalized.includes('yolo')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <rect x="3" y="3" width="18" height="18" rx="4" fill={showColor ? "#10B981" : "currentColor"} />
      <path d="M7 8V6H8M17 8V6H16M7 16V18H8M17 16V18H16" stroke="white" stroke-width="2" stroke-linecap="round" />
      <circle cx="12" cy="12" r="3" fill="white" />
    </svg>
  {:else if normalized.includes('claude')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <rect width="24" height="24" rx="5" fill={showColor ? "#D97706" : "currentColor"} />
      <path d="M12 4L14.2 9.8L20 12L14.2 14.2L12 20L9.8 14.2L4 12L9.8 9.8L12 4Z" fill="white" />
    </svg>
  {:else if normalized.includes('gemini')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <rect width="24" height="24" rx="5" fill={showColor ? "#8B5CF6" : "currentColor"} />
      <path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" fill="white" />
    </svg>
  {:else if normalized.includes('mcp')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <rect width="24" height="24" rx="5" fill={showColor ? "#0284C7" : "currentColor"} />
      <path d="M7 8H17M7 12H17M7 16H13" stroke="white" stroke-width="2" stroke-linecap="round" />
    </svg>
  {:else if normalized.includes('ollama')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <rect width="24" height="24" rx="5" fill="#1F2025" />
      <circle cx="12" cy="10" r="4" fill="none" stroke="white" stroke-width="2" />
      <path d="M10 14L8 20M14 14L16 20" stroke="white" stroke-width="2" stroke-linecap="round" />
    </svg>
  {:else if normalized.includes('hermes')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <rect width="24" height="24" rx="5" fill={showColor ? "#EF4444" : "currentColor"} />
      <path d="M5 14L10 6L14 11L19 4L17 18H7L5 14Z" fill="white" />
    </svg>
  {:else if normalized.includes('9router') || normalized.includes('router')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <rect width="24" height="24" rx="5" fill={showColor ? "#6366F1" : "currentColor"} />
      <text x="12" y="16" font-size="11" font-weight="900" fill="white" text-anchor="middle" font-family="sans-serif">9R</text>
    </svg>
  {:else if normalized.includes('aiagent') || normalized.includes('agent')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <rect width="24" height="24" rx="5" fill={showColor ? "#3B82F6" : "currentColor"} />
      <circle cx="12" cy="8" r="3" fill="white" />
      <path d="M6 18C6 15 9 13 12 13C15 13 18 15 18 18" stroke="white" stroke-width="2" stroke-linecap="round" />
    </svg>
  {:else if normalized.includes('html') || normalized.includes('css')}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0">
      <path d="M4 3L5.5 19.5L12 21.5L18.5 19.5L20 3H4ZM16.8 7.5H8.2L8.5 10H16.4L15.9 15.5L12 16.6L8.1 15.5L7.9 13H10.1L10.2 14.2L12 14.7L13.8 14.2L14 12H7.7L7.1 5.5H17L16.8 7.5Z" fill={showColor ? "#E34F26" : "currentColor"} />
    </svg>
  {:else}
    <svg viewBox="0 0 24 24" width={size} height={size} class="shrink-0 text-[var(--color-metric-blue)]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  {/if}
</span>
