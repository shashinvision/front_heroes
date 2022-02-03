<template>
  <div id="contenedor" class="content centrar">
    <select name="" id="" v-model="orden">
      <option value="">-- Orden --</option>
      <option value="asc">Ascendente</option>
      <option value="desc">Descendente</option>
    </select>
    <div v-for="(dataContador, index) in ordenContadores" :key="index">
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
    ordenContadores() {
      let resultado = { ...this.getContadores };

      if (this.orden == "asc") {
        console.log(resultado);
      } else if (this.orden == "desc") {
      }
      return resultado;
    },
  },
  data() {
    return {
      orden: "",
    };
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
