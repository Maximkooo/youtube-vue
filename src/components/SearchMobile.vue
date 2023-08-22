<template>
  <div :class="classes">
    <BaseTooltip title="Back" left>
      <button class="p-2 focus:outline-none" @click="$emit('close')">
        <BaseIcon name="arrowLeft" class="w-5 h-5 mb-1" />
      </button>
    </BaseTooltip>
    <SearchMain isFocus />
    <BaseTooltip title="Search with your voice" left>
      <button class="p-2 focus:outline-none">
        <BaseIcon name="micro" class="w-5 h-5" />
      </button>
    </BaseTooltip>
  </div>
</template>

<script>
import SearchMain from "./SearchMain.vue";
import BaseTooltip from "./BaseTooltip.vue";
import BaseIcon from "./BaseIcon.vue";

export default {
  components: { BaseTooltip, SearchMain, BaseIcon },
  computed: {
    classes() {
      return [
        "fixed",
        "bg-white",
        "w-full",
        "h-14",
        "p-3",
        "z-10",
        "flex",
        "",
        "",
      ];
    },
  },
};
</script>