<template>
  <Header />
  <SidebarSmall />
  <Sidebar />
  <SidebarMobile />
  <Categories />
  <Videos />
</template>

<script>
import Header from "./components/Header.vue";
import SidebarSmall from "./components/SidebarSmall.vue";
import Sidebar from "./components/Sidebar.vue";
import SidebarMobile from "./components/SidebarMobile.vue";
import Categories from "./components/Categories.vue";
import Videos from "./components/Videos.vue";

export default {
  components: {
    Header,
    SidebarSmall,
    Sidebar,
    SidebarMobile,
    Categories,
    Videos,
  },
};
</script>