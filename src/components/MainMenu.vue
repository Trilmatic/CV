<script setup>
import MenuButton from "./MenuButton.vue";
import { handleStateChange, portfolioStates } from "@/portfolio";
</script>
<template>
  <div class="flex flex-col justify-center gap-8 w-20 mr-20">
    <div>
      <MenuButton
        @click="handleStateChange(portfolioStates.about)"
        class="hover:border-green-500 hover:text-green-500 hover:after:border-l-3 hover:after:border-l-green-500"
        :class="{
          'border-green-500 text-green-500 after:border-l-green-500':
            state === portfolioStates.about,
          'text-slate-500  border-slate-500': state !== portfolioStates.about,
        }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-user block mx-auto"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        </svg>
      </MenuButton>
    </div>
    <div>
      <MenuButton
        @click="handleStateChange(portfolioStates.workExperience)"
        class="hover:border-green-500 hover:text-green-500 hover:after:border-l-3 hover:after:border-l-green-500"
        :class="{
          'border-green-500 text-green-500 after:border-l-green-500':
            state === portfolioStates.workExperience,
          'text-slate-500  border-slate-500':
            state !== portfolioStates.workExperience,
        }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-antenna block mx-auto"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M20 4v8" />
          <path d="M16 4.5v7" />
          <path d="M12 5v16" />
          <path d="M8 5.5v5" />
          <path d="M4 6v4" />
          <path d="M20 8h-16" />
        </svg>
      </MenuButton>
    </div>
    <div>
      <MenuButton
        @click="handleStateChange(portfolioStates.skills)"
        class="hover:border-green-500 hover:text-green-500 hover:after:border-l-3 hover:after:border-l-green-500"
        :class="{
          'border-green-500 text-green-500 after:border-l-green-500':
            state === portfolioStates.skills,
          'text-slate-500  border-slate-500': state !== portfolioStates.skills,
        }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-bolt block mx-auto"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
        </svg>
      </MenuButton>
    </div>
    <div>
      <MenuButton
        @click="handleStateChange(portfolioStates.education)"
        class="hover:border-green-500 hover:text-green-500 hover:after:border-l-3 hover:after:border-l-green-500"
        :class="{
          'border-green-500 text-green-500 after:border-l-green-500':
            state === portfolioStates.education,
          'text-slate-500  border-slate-500':
            state !== portfolioStates.education,
        }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-book block mx-auto"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" />
          <path d="M19 16h-12a2 2 0 0 0 -2 2" />
          <path d="M9 8h6" />
        </svg>
      </MenuButton>
    </div>
    <div>
      <MenuButton
        @click="handleStateChange(portfolioStates.connectWithMe)"
        class="hover:border-green-500 hover:text-green-500 hover:after:border-l-3 hover:after:border-l-green-500"
        :class="{
          'border-green-500 text-green-500 after:border-l-green-500':
            state === portfolioStates.connectWithMe,
          'text-slate-500  border-slate-500':
            state !== portfolioStates.connectWithMe,
        }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-plug-connected"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z" />
          <path d="M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z" />
          <path d="M3 21l2.5 -2.5" />
          <path d="M18.5 5.5l2.5 -2.5" />
          <path d="M10 11l-2 2" />
          <path d="M13 14l-2 2" />
        </svg>
      </MenuButton>
    </div>
  </div>
</template>
