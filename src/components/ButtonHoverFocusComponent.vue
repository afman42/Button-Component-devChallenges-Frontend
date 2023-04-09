<script setup>
import { computed } from "vue";
const props = defineProps({
  strHoverFocus: {
    type: String,
    required: false,
  },
});
const defaultWH = "w-24 h-10";
const defaultWHIcon = "w-28 h-10";
const styleComputed = computed(() => {
  if (props.strHoverFocus) {
    if (props.strHoverFocus.includes("outline")) {
      return (
        "border-[#3D5AFE] border-2 text-[#3D5AFE] bg-[#b4deed] bg-[#b4deed] " +
        defaultWH
      );
    }
    if (props.strHoverFocus.includes("text")) {
      return "text-[#3D5AFE] bg-[#b4deed] bg-[#b4deed] " + defaultWH;
    } else if (props.strHoverFocus.includes("text") && props.disabled) {
      return "text-[#9E9E9E] " + defaultWH;
    }
    if (props.strHoverFocus.includes("default")) {
      return "bg-[#AEAEAE] text-[#3F3F3F] " + defaultWH;
    }
    if (props.strHoverFocus.includes("primary")) {
      return "bg-[#0039CB] text-[#FFF] " + defaultWH;
    }
    if (props.strHoverFocus.includes("secondary")) {
      return "bg-[#1C313A] text-[#FFF] w-28 h-10";
    }
    if (props.strHoverFocus.includes("danger")) {
      return "bg-[#9A0007] text-[#FFF] " + defaultWH;
    }
  }
  return "bg-[#AEAEAE] bg-[#AEAEAE] " + defaultWH;
});
</script>

<template>
  <button
    class="rounded-lg font-noto-sans-jp font-medium"
    :class="styleComputed"
  >
    <slot />
  </button>
</template>
