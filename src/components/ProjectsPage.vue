<script setup></script>
<template>
  <h3 class="text-3xl font-extrabold text-green-500 text-center mt-20">
    Wanted For:
  </h3>
  <div class="flex justify-center mt-4">
    <div class="max-w-xl bg-gray-900 rounded-xl p-4">
      <img
        class="h-24"
        src="https://formsjs.io/images/formsjs-banner.png"
        alt="Forms.js"
      />
      <p class="text-gray-500 text-center">Open source form generator.</p>
      <div class="flex gap-3 mt-4 text-slate-500 justify-center">
        <a
          class="link flex items-center"
          href="https://github.com/form-js/forms.js"
          target="_blank"
          ><span>GitHub</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-github"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
            />
          </svg>
        </a>
        <span>*</span>
        <a
          class="link flex items-center"
          href="https://formsjs.io/"
          target="_blank"
          ><span>Website</span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-external-link"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"
            />
            <path d="M11 13l9 -9" />
            <path d="M15 4h5v5" /></svg
        ></a>
      </div>
    </div>
  </div>
  <h3 class="text-3xl font-extrabold text-green-500 text-center mt-4">
    Stats:
  </h3>
  <div class="px-4">
    <div class="p-0 bg-gray-900 max-w-3xl mx-auto mt-4 rounded-xl">
      <img
        class="rounded-xl w-full"
        src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Trilmatic&theme=transparent"
      />
    </div>
    <div class="flex flex-wrap sm:flex-nowrap max-w-3xl mx-auto gap-3">
      <div class="p-0 bg-gray-900 mx-auto mt-4 md:h-48 rounded-xl">
        <img
          class="rounded-xl w-full"
          src="https://github-readme-stats.vercel.app/api?username=Trilmatic&show_icons=true&include_all_commits=true&theme=transparent&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage&hide=stars,commits,prs,issues,contribs&hide_border=true"
        />
      </div>
      <div class="p-0 bg-gray-900 mx-auto mt-4 md:h-48 rounded-xl">
        <img
          class="rounded-xl w-full"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Trilmatic&theme=transparent&layout=compact&hide_border=true"
        />
      </div>
    </div>
  </div>
</template>
