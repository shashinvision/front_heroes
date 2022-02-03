<template>
  <div class="content centrar">
    {{ getContadores }}
    <div v-for="(dataContador, index) in getContadores" :key="index">
      <contador :dataContador="dataContador" />
    </div>
  </div>
</template>

<script>
import contador from "./contador";
import { mapGetters } from "vuex";

export default {
  name: "FrontHeroesContent",
  components: {
    contador,
  },
  computed: {
    ...mapGetters(["getContadores"]),
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
