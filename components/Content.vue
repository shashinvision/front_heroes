<template>
  <div id="contenedor" class="content centrar">
    <select name="" id="" v-model="orden">
      <option value="">-- Orden por contrador --</option>
      <option value="asc">Ascendente</option>
      <option value="desc">Descendente</option>
    </select>
    <div
      v-for="(dataContador, index) in getContadores || ordenContadores"
      :key="index"
    >
      <contador :dataContador="{ dataContador, index }" />
    </div>
  </div>
</template>

<script>
import contador from "./contador";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "FrontHeroesContent",
  components: {
    contador,
  },
  computed: {
    ...mapGetters(["getContadores"]),
    ordenContadores() {
      let clonObj = JSON.parse(JSON.stringify(this.getContadores));

      if (this.orden == "asc") {
        clonObj.sort((a, b) => {
          if (a.contador < b.contador) {
            return -1;
          }
          if (a.contador > b.contador) {
            return 1;
          }
          if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
            return -1;
          }
          if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
            return 1;
          }
          return 0;
        });
        // console.log(this.contadores);
      } else if (this.orden == "desc") {
        clonObj.sort((a, b) => {
          if (a.contador > b.contador) {
            return -1;
          }
          if (a.contador < b.contador) {
            return 1;
          }
          if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
            return -1;
          }
          if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
            return 1;
          }
          return 0;
        });
      }
      // console.log(clonObj);

      this.updateContador(clonObj);
      return clonObj;
    },
  },
  data() {
    return {
      orden: "",
    };
  },

  mounted() {},

  methods: {
    ...mapActions({
      actualizarContador: "actualizarContadorAction",
    }),
    updateContador(payload) {
      this.actualizarContador(payload);
    },
  },
};
</script>
<style>
#contenedor {
  margin-bottom: 80px !important;
}
</style>
