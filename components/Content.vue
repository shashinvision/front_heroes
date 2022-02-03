<template>
  <div class="content centrar">
    <div v-for="(dataContador, index) in contadores" :key="index">
      <contador :dataContador="dataContador" />
    </div>
  </div>
</template>

<script>
import contador from "./contador";
import { mapState } from "vuex";

export default {
  name: "FrontHeroesContent",
  components: {
    contador,
  },
  computed: {
    ...mapState(["contadores"]),
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
