<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
const listComponent = ref([
  { name: "Colors", path: "/" },
  { name: "Typography", path: "/typography" },
  { name: "Spaces", path: "/space" },
  { name: "Buttons", path: "/button" },
  { name: "Inputs", path: "/input" },
  { name: "Grid", path: "/grid" },
]);
</script>

<template>
  <div class="flex min-h-screen">
    <div class="bg-[#FAFBFD] w-2/12 pl-10">
      <h1 class="mb-12 mt-6">
        <span class="text-[#F7542E]">Dev</span
        ><span class="text-[#090F31]">challenges.io</span>
      </h1>
      <div class="flex-col flex">
        <router-link
          v-for="list in listComponent"
          class="text-[#9e9e9e] mb-4 text-sm"
          :to="list.path"
          exact
        >
          {{ list.name }}
        </router-link>
      </div>
    </div>
    <div class="bg-[#FFF] w-10/12">
      <router-view></router-view>
    </div>
  </div>
</template>
