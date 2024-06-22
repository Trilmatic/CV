import { ref } from "vue";

const portfolioTexts = {
  loading1: "establishing secure connection...",
  loading2: "authenticating...",
};

export const portfolioStates = {
  index: "index",
  loading: "loading",
  accessGranted: "accessGranted",
  about: "about",
  workExperience: "workExperience",
  education: "education",
  skills: "skills",
  connectWithMe: "connectWithMe",
};

const portfolioLoadingText = ref(portfolioTexts.loading1);
const portfolioLoadingProgress = ref(0);
const state = ref(portfolioStates.index);

export const stateChangeHandlers = {
  index: () => {},
  loading: () => {
    const interval = setInterval(() => {
      if (portfolioLoadingProgress.value < 100) {
        portfolioLoadingProgress.value += 1;
        if (portfolioLoadingProgress.value > 50) {
          portfolioLoadingText.value = portfolioTexts.loading2;
        }
      } else {
        clearInterval(interval);
        handleStateChange(portfolioStates.accessGranted);
      }
    }, 12);
  },
  accessGranted: () => {
    setTimeout(() => {
      handleStateChange(portfolioStates.about);
    }, 500);
  },
  about: () => {
    setTimeout(() => {}, 350);
  },
  workExperience: () => {},
  education: () => {},
  skills: () => {},
  connectWithMe: () => {},
};

export const handleStateChange = (s) => {
  if (
    Object.keys(portfolioStates).includes(s) &&
    Object.keys(stateChangeHandlers).includes(s)
  ) {
    state.value = s;
    stateChangeHandlers[s]();
  }
};

export function usePortfolio() {
  return {
    portfolioLoadingText,
    portfolioLoadingProgress,
    state,
  };
}
