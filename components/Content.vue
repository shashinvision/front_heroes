<template>
  <div id="contenedor" class="content centrar">
    <select name="" id="">
      <option>-- Orden --</option>
      <option value="asc">Ascendente</option>
      <option value="desc">Descendente</option>
    </select>
    <div v-for="(dataContador, index) in getContadores" :key="index">
      <contador :dataContador="{ dataContador, index }" />
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
<style>
#contenedor {
  margin-bottom: 80px !important;
}
</style>
