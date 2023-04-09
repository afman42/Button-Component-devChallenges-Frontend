<script setup>
import { computed } from "vue";
const props = defineProps({
  variant: {
    type: String,
    required: false,
  },
  disableShadow: {
    type: Boolean,
    required: false,
  },
  disabled: {
    type: Boolean,
    required: false,
  },
  startIcon: {
    type: String,
    required: false,
  },
  endIcon: {
    type: String,
    required: false,
  },
  size: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: false,
  },
});
const defaultWH = "w-24 h-10";
const defaultWHIcon = "w-28 h-10";
const styleComputed = computed(() => {
  if (props.color) {
    if (props.color.includes("default")) {
      return "bg-[#E0E0E0] text-[#3F3F3F] w-20 h-10";
    }
    if (props.color.includes("primary")) {
      return "bg-[#2962FF] text-[#FFF] w-24 h-10";
    }
    if (props.color.includes("secondary")) {
      return "bg-[#455A64] text-[#FFF] w-28 h-10";
    }
    if (props.color.includes("danger")) {
      return "bg-[#D32F2F] text-[#FFF] w-24 h-10";
    }
  }
  if (props.size) {
    if (props.size.includes("sm")) {
      return "bg-[#2962FF] text-[#fff] w-20 h-10";
    }
    if (props.size.includes("md")) {
      return "bg-[#2962FF] text-[#fff] w-20 h-10";
    }
    if (props.size.includes("lg")) {
      return "bg-[#2962FF] text-[#fff] w-24 h-10";
    }
  }
  if (props.disableShadow) {
    return "bg-[#3D5AFE] text-[#fff] " + defaultWH;
  }
  if (props.disabled && !props.variant) {
    return "bg-[#E0E0E0] text-[#9E9E9E] " + defaultWH;
  }
  if (props.variant) {
    if (props.variant.includes("outline")) {
      return (
        "border-[#3D5AFE] border-2 text-[#3D5AFE] hover:bg-[#b4deed] focus:bg-[#b4deed] " +
        defaultWH
      );
    }
    if (props.variant.includes("text") && props.disabled) {
      return "text-[#9E9E9E] " + defaultWH;
    }
    if (props.variant.includes("text")) {
      return (
        "text-[#3D5AFE] hover:bg-[#b4deed] focus:bg-[#b4deed] " + defaultWH
      );
    }
  }
  if (props.startIcon) {
    return (
      "bg-[#2962FF] text-[#fff] flex flex-row items-center justify-center " +
      defaultWHIcon
    );
  }
  if (props.endIcon) {
    return (
      "bg-[#2962FF] text-[#fff] flex flex-row items-center justify-center " +
      defaultWHIcon
    );
  }
  return "bg-[#E0E0E0] hover:bg-[#AEAEAE] focus:bg-[#AEAEAE] " + defaultWH;
});
</script>

<template>
  <button
    class="rounded-lg font-noto-sans-jp font-medium"
    :class="styleComputed"
  >
    <span
      v-if="props?.startIcon && !props.endIcon"
      class="mr-2 material-icons"
      >{{ props?.startIcon }}</span
    >
    <slot />
    <span
      v-if="props?.endIcon && !props?.startIcon"
      class="ml-2 material-icons"
      >{{ props?.endIcon }}</span
    >
  </button>
</template>
