<template>
  <div>
    <a v-for="link in linksAbout" :key="link" href="#" class="mr-2">
      {{ link }}
    </a>
  </div>
  <div>
    <a v-for="link in linksTerms" :key="link" href="#" class="mr-2">
      {{ link }}
    </a>
  </div>
  <div class="font-normal text-gray-500">&copy; 2021 Google LLC</div>
</template>

<script>
export default {
  data() {
    return {
      linksAbout: [
        "About",
        "Press",
        "Copyright",
        "Contact us",
        "Creators",
        "Advertise",
        "Developers",
      ],
      linksTerms: [
        "Terms",
        "Privacy",
        "Policy & Safety",
        "How YouTube works",
        "Test new features",
      ],
    };
  },
};
</script>