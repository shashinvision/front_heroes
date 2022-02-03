<template>
  <div>
    <a v-if="contadores.length < 20" href="#miModal" class="activacion"
      >Nuevo</a
    >
    <!-- <a href="javascript:void(0)" class="activacion">Nuevo</a> -->
    <div id="miModal" class="modal">
      <div class="modal-contenido">
        <a href="#" class="cerrar">X</a>
        <h2>Nuevo contador</h2>
        <contador :nuevo="true" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import contador from "./contador";
export default {
  name: "FrontHeroesModal",
  components: {
    contador,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["contadores"]),
  },
  mounted() {},

  methods: {},
};
</script>

<style scoped>
.modal-contenido {
  background-color: #1f1f1f;
  width: 80%;
  padding: 10px 20px;
  margin: 20% auto;
  position: relative;
}

.modal {
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  transition: all 1s;
}
a {
  text-decoration: none;
}
.activacion {
  background-color: #5c6bc0;
  border-color: #5c6bc0;
  border: 0;
  border-radius: 3px;
  padding: 5px;
  box-shadow: 2px 9px 20px -6px rgba(0, 0, 0, 0.43);
  width: 50% !important;
  padding-left: 50px;
  padding-right: 50px;
  color: white;
}
#miModal:target {
  opacity: 1;
  pointer-events: auto;
}
.cerrar {
  margin-left: 95%;
  color: white;
  font-weight: bold;
}
.activacion:hover {
  opacity: 0.9;
}
.activacion:active {
  opacity: 0.5;
}
@media (max-width: 621px) {
  .activacion {
    padding-left: 45%;
    padding-right: 45%;
    margin-right: 10%;
  }
}
@media (max-width: 450px) {
  .activacion {
    padding-left: 43% !important;
    padding-right: 43% !important;
    margin-right: 10%;
  }
}
</style>
