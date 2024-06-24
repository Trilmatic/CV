<script setup>
import { computed } from "vue";
import { handleStateChange, portfolioStates, usePortfolio } from "../portfolio";
const { state } = usePortfolio();

const prevState = computed(() => {
  if (Object.values(portfolioStates).indexOf(state.value) > 3) {
    return Object.values(portfolioStates)[
      Object.values(portfolioStates).indexOf(state.value) - 1
    ];
  }
  return null;
});

const nextState = computed(() => {
  if (
    Object.values(portfolioStates).indexOf(state.value) <
    Object.values(portfolioStates).length - 1
  ) {
    return Object.values(portfolioStates)[
      Object.values(portfolioStates).indexOf(state.value) + 1
    ];
  }
  return null;
});
</script>
<template>
  <div class="flex md:hidden justify-center gap-3">
    <button
      v-if="prevState !== null"
      @click="handleStateChange(prevState)"
      class="transition-colors"
      :class="
        prevState
          ? 'text-green-500 hover:text-green-400'
          : 'text-gray-500 opacity-25'
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-arrow-badge-left"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M11 17h6l-4 -5l4 -5h-6l-4 5z" />
      </svg>
    </button>
    <button
      v-if="nextState !== null"
      class="transition-colors"
      :class="
        nextState
          ? 'text-green-500 hover:text-green-400'
          : 'text-gray-500 opacity-25'
      "
      @click="handleStateChange(nextState)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-arrow-badge-right"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M13 7h-6l4 5l-4 5h6l4 -5z" />
      </svg>
    </button>
  </div>
</template>
