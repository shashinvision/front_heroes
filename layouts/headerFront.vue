<template>
  <div class="lateralBar flex-container">
    <div class="col-6">
      <modal />
    </div>
  </div>
</template>

<script>
import modal from "../components/modal.vue";
export default {
  name: "FrontHeroesHeader",
  components: {
    modal,
  },
  data() {
    return {};
  },

  mounted() {},
  methods: {},
};
</script>
<style scoped>
.col-6 div {
  display: flex;
  margin-left: 40%;
}
</style>
