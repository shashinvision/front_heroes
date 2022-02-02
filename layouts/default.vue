<template>
  <div>
    <headerFront />
    <nuxt />
    <footerFront />
  </div>
</template>

<script>
import headerFront from "./headerFront.vue";
import footerFront from "./footerFront.vue";

export default {
  name: "FrontHeroesDefault",
  components: {
    headerFront,
    footerFront,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
