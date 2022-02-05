<template>
  <div>
    <div class="lateralBar flex-container">
      <div class="col-6 d-flex">
        <div class="col-6" id="select-container">
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
        <div class="col-6" id="select-container">
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
      <div class="col-6" id="btn-container">
        <modal />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import modal from "../components/modal.vue";
export default {
  name: "FrontHeroesHeader",
  components: {
    modal,
  },
  data() {
    return {
      dataFiltro: {
        dataMayorQue: "",
        dataMenorQue: "",
      },
      cantidadOptionsMayor: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      ],
      cantidadOptionsMenor: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ],
    };
  },

  mounted() {},
  methods: {
    ...mapActions({
      filtrosAction: "filtrosAction",
    }),
    activarFiltro(e) {
      if (e.target.name == "mayorQue") {
        this.dataFiltro.dataMenorQue = "";
      } else if (e.target.name == "menorQue") {
        this.dataFiltro.dataMayorQue = "";
      }
      // Para limpiar los valores de la busqueda previo a la busqueda
      this.filtrosAction({
        dataMayorQue: "",
        dataMenorQue: "",
      });
      this.filtrosAction(this.dataFiltro);
    },
  },
};
</script>
<style scoped>
#select-container {
  margin-left: 20%;
}
#btn-container {
  margin-left: 30%;
}
.col-6 {
  width: 50%;
}
.d-flex {
  display: flex;
}

@media (max-width: 621px) {
  .col-6 {
    width: 80%;
    margin: 0 auto !important;
    margin-top: 10px !important;
  }
  .flex-container {
    display: block !important;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 0 auto !important;
    height: auto;
  }
  select {
    width: 100% !important;
  }
  modal {
    width: 100% !important;
  }
}
</style>
