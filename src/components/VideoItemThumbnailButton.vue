<template>
  <span :class="classes" @mouseenter="toggleBadge" @mouseleave="toggleBadge">
    <BaseIcon :name="icon" />
    <span :class="badgeClasses" v-if="isBadgeShow">
      <span class="inline-block my-1.5 mx-3">{{ title }}</span>
    </span>
  </span>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";

export default {
  components: { BaseIcon },
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isBadgeShow: false,
    };
  },
  computed: {
    classes() {
      return [
        "opacity-0",
        "group-hover:opacity-100",
        "bg-opacity-60",
        "absolute top-0",
        "right-0",
        "bg-black",
        "text-white",
        "m-1",
        "p-1",
        this.isBadgeShow ? "rounded-r-sm" : "rounded-sm",
      ];
    },
    badgeClasses() {
      return [
        "absolute",
        "transition-width",
        "bg-black",
        "bg-opacity-60",
        "whitespace-nowrap",
        "top-0",
        "right-full",
        "overflow-hidden",
        "uppercase",
        "text-xs",
        "delay-100",
        "font-semibold",
        "rounded-l-sm",
        this.isBadgeShow ? "w-28" : "w-0",
      ];
    },
  },
  methods: {
    toggleBadge() {
      this.isBadgeShow = !this.isBadgeShow;
    },
  },
};
</script>