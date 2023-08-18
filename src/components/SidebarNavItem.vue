<template>
  <li>
    <a href="#" :class="classes">
      <BaseIcon :name="icon" :class="iconClasses" />
      <span v-html="title"></span>
    </a>
  </li>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
export default {
  components: { BaseIcon },
  props: {
    title: {
      required: true,
      type: String,
    },
    icon: {
      type: String,
      default: "",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      const classes = ["flex", "items-center", "px-6", "py-2", "text-sm"];
      return this.isActive
        ? [
            ...classes,
            "font-medium",
            "text-gray-800",
            "bg-gray-200",
            "hover:bg-gray-300",
          ]
        : [...classes, "hover:bg-gray-100"];
    },
    iconClasses() {
      const classes = ["w-6", "h-6", "mr-6"];
      return this.isActive ? [...classes, "text-red-500"] : classes;
    },
  },
};
</script>