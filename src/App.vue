<script setup>
import { handleStateChange, portfolioStates, usePortfolio } from "./portfolio";
import About from "@/components/AboutPage.vue";
import Skills from "@/components/SkillsPage.vue";
import Projects from "@/components/ProjectsPage.vue";
import Experience from "@/components/ExperiencePage.vue";
import Connect from "@/components/ConnectPage.vue";
import { onMounted, ref, watch } from "vue";
const { state, portfolioLoadingText, portfolioLoadingProgress } =
  usePortfolio();

const container = ref(null);
const isChangingPage = ref(false);

let xDown = null;
let yDown = null;

watch(state, () => {
  if (!container.value) return;
  container.value.scrollTo(0, 0);
});

function getTouches(evt) {
  return evt.touches || evt.originalEvent.touches;
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  let xUp = evt.touches[0].clientX;
  let yUp = evt.touches[0].clientY;

  let xDiff = xDown - xUp;
  let yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      moveDown();
    } else {
      moveUp();
    }
  }

  xDown = null;
  yDown = null;
}

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

  document.addEventListener("touchstart", handleTouchStart, false);
  document.addEventListener("touchmove", handleTouchMove, false);
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
          class="menu-container z-1"
        >
          <div class="w-full h-full">
            <div
              class="flex-1 h-full pb-20 md:pb-0 px-4 py-8 overflow-y-auto overflow-x-hidden"
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
              class="absolute right-0 bottom-0 md:top-0 w-full md:w-auto h-10 md:h-full md:flex-col rounded-r-xl flex z-2"
            >
              <button
                class="menu-link md:border-r-none rounded-bl-md md:rounded-bl-none md:rounded-tr-md"
                :class="{
                  'bg-gray-500 md:opacity-25 text-green-500':
                    state !== portfolioStates.about,
                  'bg-green-500 md:opacity-75 text-gray-500':
                    state === portfolioStates.about,
                }"
                @click="handleStateChange(portfolioStates.about)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-user w-12 h-12 md:w-28 md:h-28"
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
              </button>
              <button
                class="menu-link md:border-r-none"
                :class="{
                  'bg-gray-500 md:opacity-25 text-green-500':
                    state !== portfolioStates.skills,
                  'bg-green-500 md:opacity-75 text-gray-500':
                    state === portfolioStates.skills,
                }"
                @click="handleStateChange(portfolioStates.skills)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-bolt w-12 h-12 md:w-28 md:h-28"
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
              </button>
              <button
                class="menu-link md:border-r-none"
                :class="{
                  'bg-gray-500 md:opacity-25 text-green-500':
                    state !== portfolioStates.projects,
                  'bg-green-500 md:opacity-75 text-gray-500':
                    state === portfolioStates.projects,
                }"
                @click="handleStateChange(portfolioStates.projects)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-hammer w-12 h-12 md:w-28 md:h-28"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M11.414 10l-7.383 7.418a2.091 2.091 0 0 0 0 2.967a2.11 2.11 0 0 0 2.976 0l7.407 -7.385"
                  />
                  <path
                    d="M18.121 15.293l2.586 -2.586a1 1 0 0 0 0 -1.414l-7.586 -7.586a1 1 0 0 0 -1.414 0l-2.586 2.586a1 1 0 0 0 0 1.414l7.586 7.586a1 1 0 0 0 1.414 0z"
                  />
                </svg>
              </button>
              <button
                class="menu-link md:border-r-none"
                :class="{
                  'bg-gray-500 md:opacity-25 text-green-500':
                    state !== portfolioStates.workExperience,
                  'bg-green-500 md:opacity-75 text-gray-500':
                    state === portfolioStates.workExperience,
                }"
                @click="handleStateChange(portfolioStates.workExperience)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-building w-12 h-12 md:w-28 md:h-28"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 21l18 0" />
                  <path d="M9 8l1 0" />
                  <path d="M9 12l1 0" />
                  <path d="M9 16l1 0" />
                  <path d="M14 8l1 0" />
                  <path d="M14 12l1 0" />
                  <path d="M14 16l1 0" />
                  <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
                </svg>
              </button>
              <button
                class="menu-link md:border-r-none rounded-br-md"
                :class="{
                  'bg-gray-500 md:opacity-25 text-green-500':
                    state !== portfolioStates.connectWithMe,
                  'bg-green-500 md:opacity-75 text-gray-500':
                    state === portfolioStates.connectWithMe,
                }"
                @click="handleStateChange(portfolioStates.connectWithMe)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-plug-connected w-12 h-12 md:w-28 md:h-28"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z"
                  />
                  <path
                    d="M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z"
                  />
                  <path d="M3 21l2.5 -2.5" />
                  <path d="M18.5 5.5l2.5 -2.5" />
                  <path d="M10 11l-2 2" />
                  <path d="M13 14l-2 2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
