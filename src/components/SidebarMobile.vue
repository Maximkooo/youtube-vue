<template>
  <transition
    enter-class="opacity-0"
    enter-active-class="transition-opacity ease-linear duration-200"
    enter-to-class="opacity-100"
    leave-class="opacity-100"
    leave-active-class="transition-opacity ease-linear duration-200"
    leave-to-class="opacity-0"
  >
    <SidebarMobileOverlay @click="isOpen = false" v-show="isOpen" />
  </transition>
  <transition
    enter-class="-translate-x-full"
    enter-active-class="transition ease-in-out duration-200 transform"
    enter-to-class="translate-x-0"
    leave-class="translate-x-0"
    leave-active-class="transition ease-in-out duration-200 transform"
    leave-to-class="-translate-x-full"
  >
    <aside
      v-show="isOpen"
      class="w-64 max-h-screen overflow-auto bg-white fixed z-40"
    >
      <section class="flex items-center p-4 border-b sticky top-0 bg-white">
        <button @click="isOpen = false" class="ml-2 mr-6 focus:outline-none">
          <BaseIcon name="menu" />
        </button>
        <LogoMain />
      </section>
      <SidebarContent />
    </aside>
  </transition>
</template>


<script>
import SidebarContent from "./SidebarContent.vue";
import LogoMain from "./LogoMain.vue";
import BaseIcon from "./BaseIcon.vue";
import SidebarMobileOverlay from "./SidebarMobileOverlay.vue";

export default {
  components: {
    SidebarContent,
    LogoMain,
    BaseIcon,
    SidebarMobileOverlay,
  },
  data() {
    return {
      isOpen: true,
    };
  },
};
</script>