<template>
  <div class="relative">
    <div class="h-full" @mouseenter="toggle" @mouseleave="toggle">
      <slot />
    </div>
    <transition
      enter-from-class="opacity-0"
      enter-active-class="duration-200"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-active-class="duration-75"
      leave-to-class="opacity-0"
    >
      <div v-show="isShow" :class="classes">{{ title }}</div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  computed: {
    classes() {
      return [
        "bg-gray-600",
        "bg-opacity-80",
        "rounded-sm",
        "text-white",
        "text-xs",
        "whitespace-nowrap",
        "p-2",
        "absolute",
        "top-14",
        "left-1/2",
        "transform",
        "-translate-x-1/2",
      ];
    },
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
  },
};
</script>