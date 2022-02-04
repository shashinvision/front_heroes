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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "FrontHeroesContent",
  components: {
    contador,
  },
  computed: {
    ...mapGetters(["getContadores"]),
    ordenContadores() {
      for (let i = 0; i < this.clonObjt.length; i++) {
        this.contadores.push(this.clonObjt[i]);
      }

      if (this.orden == "asc") {
        // console.log(this.getContadores);
        // console.log(contadores);

        this.contadores.sort((a, b) => {
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
        console.log(this.contadores);
      } else if (this.orden == "desc") {
        this.contadores.sort((a, b) => {
          if (b.contador < a.contador) {
            return -1;
          }
          if (b.contador > a.contador) {
            return 1;
          }
          if (b.nombre.toLowerCase() < a.nombre.toLowerCase()) {
            return -1;
          }
          if (b.nombre.toLowerCase() > a.nombre.toLowerCase()) {
            return 1;
          }
          return 0;
        });
        console.log(this.contadores);
      }
      // this.updateContador(this.contadores);
      return this.contadores;
    },
  },
  data() {
    return {
      orden: "",
      contadores: [],
      clonObjt: { ...this.getContadores },
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
