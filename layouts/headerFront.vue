<template>
  <div class="lateralBar flex-container">
    <div class="col-6">
      <modal />
    </div>
    <div class="col-6" id="">
      <input
        type="text"
        name="buscadorSeleccion"
        id="buscadorSeleccion"
        v-model="textoFiltro"
        @keyup="filtro"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import modal from "../components/modal.vue";
export default {
  name: "FrontHeroesHeader",
  components: {
    modal,
  },
  data() {
    return {
      textoFiltro: "",
    };
  },

  mounted() {},
  methods: {
    ...mapActions(["filtrosTextAction"]),
    filtro() {
      this.filtrosTextAction(this.textoFiltro);
    },
  },
};
</script>
<style scoped>
.col-6 div {
  display: flex;
  margin-left: 40%;
}
</style>
