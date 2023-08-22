<template>
  <div class="flex w-full h-full mr-2">
    <input
      ref="search"
      type="text"
      placeholder="Search"
      class="w-full px-3 shadow-inner rounded-bl-sm rounded-tl-sm border border-gray-300 focus:border-blue-700 focus:outline-none"
    />
    <BaseTooltip title="Search">
      <button
        class="h-full focus:outline-none flex items-center px-6 py-1 text-gray-600 bg-gray-100 border border-l-0 border-gray-300 rounded-tr-sm rounded-br-sm hover:bg-gray-200"
      >
        <BaseIcon name="search" />
      </button>
    </BaseTooltip>
  </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
import BaseTooltip from "./BaseTooltip.vue";
export default {
  props: {
    isFocus: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    BaseIcon,
    BaseTooltip,
  },
  computed: {
    tooltipClasses() {
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
  mounted() {
    this.isFocus && this.$refs.search.focus();
  },
};
</script>