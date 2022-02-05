<template>
  <div id="contenedor" class="content centrar">
    {{ getContadores }}
    <select name="" id="ordenarSelect" v-model="orden">
      <option value="">-- Ordenar --</option>
      <option value="asc_nom">Ascendente nombre</option>
      <option value="desc_nom">Descendente nombre</option>
      <option value="asc_cont">Ascendente contador</option>
      <option value="desc_cont">Descendente contador</option>
    </select>

    <div v-if="orden == ''">
      <div v-for="(dataContador, index) in getContadores" :key="index">
        <contador
          @ordenEliminar="ordenEliminar"
          :dataContador="{ dataContador, index }"
        />
      </div>
    </div>
    <div v-else>
      <div v-for="(dataContador, index) in ordenContadores" :key="index">
        <contador
          @ordenEliminar="ordenEliminar"
          :dataContador="{ dataContador, index }"
        />
      </div>
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
      console.log("clonObj", clonObj);

      if (this.orden == "asc_cont") {
        clonObj.sort((a, b) => {
          if (a.contador < b.contador) {
            return -1;
          }
          if (a.contador > b.contador) {
            return 1;
          }
          // if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
          //   return -1;
          // }
          // if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
          //   return 1;
          // }
          return 0;
        });
        // console.log(this.contadores);
      } else if (this.orden == "desc_cont") {
        clonObj.sort((a, b) => {
          if (a.contador > b.contador) {
            return -1;
          }
          if (a.contador < b.contador) {
            return 1;
          }
          // if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
          //   return -1;
          // }
          // if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
          //   return 1;
          // }
          return 0;
        });
      }
      if (this.orden == "asc_nom") {
        clonObj.sort((a, b) => {
          // if (a.contador < b.contador) {
          //   return -1;
          // }
          // if (a.contador > b.contador) {
          //   return 1;
          // }
          if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
            return -1;
          }
          if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
            return 1;
          }
          return 0;
        });
        // console.log(this.contadores);
      } else if (this.orden == "desc_nom") {
        clonObj.sort((a, b) => {
          // if (a.contador > b.contador) {
          //   return -1;
          // }
          // if (a.contador < b.contador) {
          //   return 1;
          // }
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
    ordenEliminar(data) {
      this.orden = data;
      // document.getElementById("ordenarSelect").selectedIndex = 0;
    },
  },
};
</script>
<style>
#contenedor {
  margin-bottom: 80px !important;
}
</style>
