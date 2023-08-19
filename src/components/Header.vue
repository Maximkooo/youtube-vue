<template>
  <header class="flex justify-between fixed z-30 w-full">
    <div class="lg:w-1/4 flex">
      <div class="flex items-center xl:w-64 xl:bg-white pl-4">
        <button
          @click="setMobileSidebar"
          class="xl:hidden mr-3 sm:ml-2 sm:mr-6 focus:outline-none"
        >
          <BaseIcon name="menu" />
        </button>
        <LogoMain />
      </div>
    </div>
    <div
      class="hidden sm:flex items-center justify-end p-2.5 pl-8 md:pl-12 md:px-8 flex-1 lg:px-0 lg:w-1/2 max-w-screen-md"
    >
      <SearchMain />
      <button class="ml-4 focus:outline-none">
        <BaseIcon name="micro" class="w-5 h-5" />
      </button>
    </div>
    <div
      class="flex items-center justify-end lg:w-1/4 sm:space-x-3 p-2 sm:px-4"
    >
      <button class="sm:hidden p-2 focus:outline-none">
        <BaseIcon name="micro" />
      </button>
      <button class="sm:hidden p-2 focus:outline-none">
        <BaseIcon name="search" />
      </button>
      <button class="relative group p-2 focus:outline-none">
        <BaseIcon name="viewGrid" @click="test('apps')" />
        <DropdownApps v-if="showDropdownApps" />
      </button>
      <button class="relative group p-2 focus:outline-none">
        <BaseIcon name="dotsVertical" @click="test('settings')" />
        <DropdownSettings v-if="showDropdownSettings" />
      </button>
      <ButtonLogin />
    </div>
  </header>
</template>

<script>
import DropdownApps from "./DropdownApps.vue";
import DropdownSettings from "./DropdownSettings.vue";
import LogoMain from "./LogoMain.vue";
import SearchMain from "./SearchMain.vue";
import ButtonLogin from "./ButtonLogin.vue";
import BaseIcon from "./BaseIcon.vue";

export default {
  components: {
    BaseIcon,
    DropdownApps,
    DropdownSettings,
    LogoMain,
    SearchMain,
    ButtonLogin,
  },
  data() {
    return {
      showDropdownApps: false,
      showDropdownSettings: false,
    };
  },
  mounted() {
    window.addEventListener("click", (event) => {
      if (!this.$el.contains(event.target)) {
        this.showDropdownApps = false;
        this.showDropdownSettings = false;
      }
    });
  },
  methods: {
    setMobileSidebar() {
      this.$store.commit("setMobileSidebar");
    },
    test(type) {
      if (type === "apps") {
        this.showDropdownSettings = false;
        this.showDropdownApps = !this.showDropdownApps;
      } else {
        this.showDropdownSettings = !this.showDropdownSettings;
        this.showDropdownApps = false;
      }
    },
  },
};
</script>