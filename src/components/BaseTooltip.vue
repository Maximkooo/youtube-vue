<template>
  <div class="relative">
    <div
      class="flex items-center h-full"
      @mouseenter="isShow = true"
      @mouseleave="isShow = false"
      @click="isShow = false"
    >
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
    top: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
    left: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isShow: false,
      classes: [
        "bg-gray-600",
        "bg-opacity-80",
        "rounded-sm",
        "text-white",
        "text-xs",
        "whitespace-nowrap",
        "p-2",
        "absolute",
        "transform",
        ...this.getPosition(),
      ],
    };
  },
  methods: {
    getPosition() {
      const topClass = this.top ? "bottom-12" : "top-14";
      if (this.right) {
        return [topClass, "left-0"];
      }
      if (this.left) {
        return [topClass, "right-0"];
      }
      return [topClass, "left-1/2", "-translate-x-1/2"];
    },
  },
};
</script>