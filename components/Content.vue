<template>
  <div class="content centrar">
    <contador />
    <contador />
    <contador />
    <contador />
  </div>
</template>

<script>
import contador from "./contador";

export default {
  name: "FrontHeroesContent",
  components: {
    contador,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
