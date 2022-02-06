<template>
  <div id="contenedor" class="content centrar">
    <div class="col-6 d-flex">
      <div class="col-6 select-container" id="">
        <select
          name="ordenarSelect"
          id="ordenarSelect"
          v-model="dataFiltro.orden"
          @change="activarFiltro"
        >
          <option value="">-- Ordenar --</option>
          <option value="asc_nom">Ascendente nombre</option>
          <option value="desc_nom">Descendente nombre</option>
          <option value="asc_cont">Ascendente contador</option>
          <option value="desc_cont">Descendente contador</option>
        </select>
      </div>
      <div class="col-6 select-container" id="">
        <select
          name="mayorQue"
          id="mayorQue"
          v-model="dataFiltro.dataMayorQue"
          @change="activarFiltro"
        >
          <option value="">-- Mayor que ---</option>
          <option
            v-for="(option, index) in cantidadOptionsMayor"
            :key="index"
            :value="option"
          >
            Mayor que {{ option }}
          </option>
        </select>
      </div>
      <div class="col-6 select-container" id="">
        <select
          name="menorQue"
          id="menorQue"
          v-model="dataFiltro.dataMenorQue"
          @change="activarFiltro"
        >
          <option value="">-- Menor que ---</option>
          <option
            v-for="(option, index) in cantidadOptionsMenor"
            :key="index"
            :value="option"
          >
            Menor que {{ option }}
          </option>
        </select>
      </div>
    </div>

    <div v-if="dataFiltro.orden == ''">
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
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  name: "FrontHeroesContent",
  components: {
    contador,
  },
  computed: {
    ...mapGetters(["getContadores"]),
    ...mapState(["contadores", "filtros"]),
    ordenContadores() {
      let clonObj = JSON.parse(JSON.stringify(this.contadores));
      console.log("clonObj", clonObj);

      if (this.dataFiltro.orden == "asc_cont") {
        this.limpiezaMayorMenor();
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
      } else if (this.dataFiltro.orden == "desc_cont") {
        this.limpiezaMayorMenor();
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
      if (this.dataFiltro.orden == "asc_nom") {
        this.limpiezaMayorMenor();
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
      } else if (this.dataFiltro.orden == "desc_nom") {
        this.limpiezaMayorMenor();
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
      dataFiltro: {
        dataMayorQue: "",
        dataMenorQue: "",
        orden: "",
      },
      cantidadOptionsMayor: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      ],
      cantidadOptionsMenor: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ],
    };
  },

  mounted() {
    this.loadContadores();
    this.inicioFiltrosSession();
  },

  methods: {
    ...mapActions({
      actualizarContador: "actualizarContadorAction",
      filtrosAction: "filtrosAction",
      loadContadores: "inicioContadoresAction",
    }),
    updateContador(payload) {
      this.actualizarContador(payload);
    },
    ordenEliminar(data) {
      this.dataFiltro.orden = data;
      // document.getElementById("ordenarSelect").selectedIndex = 0;
    },
    activarFiltro(e) {
      this.dataFiltro.orden = "";
      if (e.target.name == "mayorQue") {
        this.dataFiltro.dataMenorQue = "";
      } else if (e.target.name == "menorQue") {
        this.dataFiltro.dataMayorQue = "";
      } else if (e.target.name == "ordenarSelect") {
        this.dataFiltro.orden = e.target.value;
      }
      // Para limpiar los valores de la busqueda previo a la busqueda
      this.filtrosAction({
        dataMayorQue: "",
        dataMenorQue: "",
        orden: "",
      });
      this.filtrosAction(this.dataFiltro);
    },
    limpiezaMayorMenor() {
      this.dataFiltro.dataMayorQue = "";
      this.dataFiltro.dataMenorQue = "";
    },
    inicioFiltrosSession() {
      this.dataFiltro.orden =
        sessionStorage.getItem("orden") || this.filtros.filtroBusqueda;
      this.dataFiltro.dataMayorQue =
        sessionStorage.getItem("dataMayorQue") || this.filtros.mayorQueActivado;
      this.dataFiltro.dataMenorQue =
        sessionStorage.getItem("dataMenorQue") || this.filtros.menorQueActivado;
    },
  },
};
</script>
<style>
#contenedor {
  margin-bottom: 80px !important;
}
</style>
