<script setup>
// import heroImg from '@/public/IMG_4146-01_NEW.png'
// import { AreaChart } from 'lucide-vue-next'
// import { GitHubIcon } from 'vue3-simple-icons'

const {
  description,
} = useAppConfig()
</script>

<template>
  <main class="grid pt-8 pb-8 lg:grid-cols-2 place-items-center md:py-12">
    <div>
      <h1 class="text-5xl font-bold lg:text-6xl xl:text-7xl lg:tracking-tight xl:tracking-tighter">
        <!-- {{ title }} -->
        Ryan Heida<br>
        Link Shortener
      </h1>
      <p class="max-w-xl mt-4 text-lg text-slate-600">
        {{ description }}
      </p>
      <div class="flex flex-col gap-3 mt-6 sm:flex-row">
        <HomeLink
          href="https://links.ryanheida.com/" target="_blank" title="Ryan Heida Links"
          class="flex items-center justify-center gap-1" rel="noopener"
        >
          <!-- <AreaChart
            class="w-5 h-5"
          /> -->
          Ryan Heida Links
        </HomeLink>
        <!-- <HomeLink
          size="lg"
          type="outline"
          rel="noopener"
          :href="github"
          title="Github"
          class="flex items-center justify-center gap-1"
          target="_blank"
        >
          <GitHubIcon
            class="w-5 h-5"
          />
          GitHub Repo
        </HomeLink> -->
      </div>
    </div>
    <div>
      <!-- <div class="w-[512px]" v-html="heroImg" /> -->
      <img width="500" style="object-fit: cover;" src="../../public/IMG_4146-01_NEW.png" alt="Ryan Heida Image ;)">
    </div>
  </main>
</template>
