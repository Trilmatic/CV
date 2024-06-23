<script setup>
import { handleStateChange, portfolioStates, usePortfolio } from "./portfolio";
import About from "@/components/AboutPage.vue";
import Skills from "@/components/SkillsPage.vue";
import Projects from "@/components/ProjectsPage.vue";
import Experience from "@/components/ExperiencePage.vue";
import Connect from "@/components/ConnectPage.vue";
import { onMounted, ref } from "vue";
const { state, portfolioLoadingText, portfolioLoadingProgress } =
  usePortfolio();

const container = ref(null);
const isChangingPage = ref(false);

function switchPage(state) {
  if (isChangingPage.value) return;
  isChangingPage.value = true;
  handleStateChange(state);
  setTimeout(() => {
    isChangingPage.value = false;
  }, 1000);
}

function moveUp() {
  if (Object.values(portfolioStates).indexOf(state.value) > 3) {
    switchPage(
      Object.values(portfolioStates)[
        Object.values(portfolioStates).indexOf(state.value) - 1
      ]
    );
  }
}

function moveDown() {
  if (
    Object.values(portfolioStates).indexOf(state.value) <
    Object.values(portfolioStates).length - 1
  ) {
    switchPage(
      Object.values(portfolioStates)[
        Object.values(portfolioStates).indexOf(state.value) + 1
      ]
    );
  }
}

onMounted(() => {
  window.addEventListener("wheel", (event) => {
    if (
      Object.values(portfolioStates).indexOf(state.value) <
      Object.values(portfolioStates).indexOf(portfolioStates.about)
    ) {
      return;
    }

    if (event.deltaY > 0) {
      moveDown();
    } else {
      moveUp();
    }
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
            class="rounded-xl text-slate-500 text-center w-56 lg:w-96 md:w-72 h-6 bg-gradient-to-b from-slate-500 to-slate-600 z-1 relative border-slate-500"
          >
            <div
              class="absolute top-0 left-0 text-slate-500 text-center h-6 z-2 bg-gradient-to-b from-green-500 to-green-600 rounded-xl"
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
          <div>
            <div
              class="flex-1 h-full py-8 overflow-y-hidden overflow-x-hidden"
              ref="container"
            >
              <About v-if="state === portfolioStates.about" />
              <Skills v-if="state === portfolioStates.skills" />
              <Projects v-if="state === portfolioStates.projects" />
              <Experience v-if="state === portfolioStates.workExperience" />
              <Connect v-if="state === portfolioStates.connectWithMe" />
            </div>
            <div
              v-if="
                Object.values(portfolioStates).indexOf(state) >=
                Object.values(portfolioStates).indexOf(portfolioStates.about)
              "
              class="absolute right-0 top-0 h-full flex-col rounded-r-xl hidden md:flex"
            >
              <button
                class="w-8 h-full border-b transition-colors transition-opacity rounded-tr-md"
                :class="{
                  'bg-gray-500 opacity-25': state !== portfolioStates.about,
                  'bg-green-500 opacity-75': state === portfolioStates.about,
                }"
                @click="handleStateChange(portfolioStates.about)"
              ></button>
              <button
                class="w-8 h-full border-b transition-colors transition-opacity"
                :class="{
                  'bg-gray-500 opacity-25': state !== portfolioStates.skills,
                  'bg-green-500 opacity-75': state === portfolioStates.skills,
                }"
                @click="handleStateChange(portfolioStates.skills)"
              ></button>
              <button
                class="w-8 h-full border-b transition-colors transition-opacity"
                :class="{
                  'bg-gray-500 opacity-25': state !== portfolioStates.projects,
                  'bg-green-500 opacity-75': state === portfolioStates.projects,
                }"
                @click="handleStateChange(portfolioStates.projects)"
              ></button>
              <button
                class="w-8 h-full border-b transition-colors transition-opacity"
                :class="{
                  'bg-gray-500 opacity-25': state !== portfolioStates.workExperience,
                  'bg-green-500 opacity-75': state === portfolioStates.workExperience,
                }"
                @click="handleStateChange(portfolioStates.workExperience)"
              ></button>
              <button
                class="w-8 h-full border-b transition-colors transition-opacity rounded-br-md"
                :class="{
                  'bg-gray-500 opacity-25': state !== portfolioStates.connectWithMe,
                  'bg-green-500 opacity-75': state === portfolioStates.connectWithMe,
                }"
                @click="handleStateChange(portfolioStates.connectWithMe)"
              ></button>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
