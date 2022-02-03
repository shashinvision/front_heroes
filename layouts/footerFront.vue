<template>
  <div>
    <div class="lateralBar footer">
      <div class="footer-container centrar">
        <label>&#931; :</label>
        <span for="">{{ getTotalSumaContadores || 0 }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "FrontHeroesFooter",

  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getTotalSumaContadores"]),
  },
  mounted() {},

  methods: {},
};
</script>
<style scoped>
.footer-container {
  margin-top: 10px !important;
  margin-left: 50% !important;
}
</style>
