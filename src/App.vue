<script setup>
import { handleStateChange, portfolioStates, usePortfolio } from "./portfolio";
import About from "@/components/AboutPage.vue";
import Skills from "@/components/SkillsPage.vue";
import Projects from "@/components/ProjectsPage.vue";
import Experience from "@/components/ExperiencePage.vue";
import { ref, watch } from "vue";
const { state, portfolioLoadingText, portfolioLoadingProgress } =
  usePortfolio();

const container = ref(null);

watch(container.value, (newValue) => {
  if (!newValue) return;
  container.value.addEventListener("scroll", function (e) {
    e.preventDefault();
  });
});
</script>
<template>
  <div class="min-w-[100vw] min-h-[100vh] bg-gradient-to-r relative font-mono">
    <div class="portfolio">
      <div class="w-full h-full relative">
        <div
          class="absolute top-2 left-4 text-slate-500 text-3xl font-bold z-5"
        >
          <p>PS</p>
        </div>
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-500 text-center"
          v-if="state === portfolioStates.index"
        >
          <p class="text-xl text-green-500">Petr Suchánek</p>
          <p class="font-bold text-xl uppercase mb-2">Top Secret</p>
          <p
            class="font-extrabold text-5xl py-1 border-t border-b border-slate-500"
          >
            Software Engineer
          </p>
          <button
            class="uppercase mt-4 text-xl btn-portfolio p-4 border-2 relative border-slate-500 transition-color hover:border-green-500 hover:text-green-500 hover:after:border-l-3 hover:after:border-l-green-500"
            @click="handleStateChange(portfolioStates.loading)"
          >
            <p>Connect</p>
          </button>
        </div>
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          v-if="state === portfolioStates.loading"
        >
          <div
            class="text-slate-500 text-center w-56 lg:w-96 md:w-72 h-6 bg-gradient-to-b from-slate-500 to-slate-600 z-1 relative border-slate-500"
          >
            <div
              class="absolute top-0 left-0 text-slate-500 text-center h-6 z-2 bg-gradient-to-b from-green-500 to-green-600"
              :style="'width:' + portfolioLoadingProgress + '%'"
            ></div>
          </div>
          <p class="text-sm lg:text-base text-center text-green-500">
            {{ portfolioLoadingText }}
          </p>
        </div>
        <Transition name="fade">
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            v-if="state === portfolioStates.accessGranted"
          >
            <p class="text-center text-green-500 uppercase text-3xl">
              Access granted
            </p>
          </div>
        </Transition>
      </div>
      <Transition name="transition-about">
        <div
          v-if="
            Object.values(portfolioStates).indexOf(state) >=
            Object.values(portfolioStates).indexOf(portfolioStates.about)
          "
          class="absolute top-2 left-2 md:top-6 md:left-6 w-[calc(100%-1rem)] h-[calc(100%-1rem)] md:w-[calc(100%-3rem)] md:h-[calc(100%-3rem)] border rounded-lg border-slate-500 z-1"
        >
          <div class="flex-1 h-full py-8 overflow-y-auto" ref="container">
            <About
              v-if="
                Object.values(portfolioStates).indexOf(state) >=
                Object.values(portfolioStates).indexOf(portfolioStates.about)
              "
            />
            <Skills
              v-if="
                Object.values(portfolioStates).indexOf(state) >=
                Object.values(portfolioStates).indexOf(portfolioStates.about)
              "
            />
            <Projects
              v-if="
                Object.values(portfolioStates).indexOf(state) >=
                Object.values(portfolioStates).indexOf(portfolioStates.about)
              "
            />
            <Experience
              v-if="
                Object.values(portfolioStates).indexOf(state) >=
                Object.values(portfolioStates).indexOf(portfolioStates.about)
              "
            />
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
