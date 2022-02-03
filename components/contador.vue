<template>
  <div class="contador-container">
    <div class="content">
      <div class="label-container">
        <input
          type="text"
          placeholder="Nombre del contador..."
          :readonly="!nuevo"
        />
      </div>
      <div v-if="nuevo" class="button-container centrar">
        <a href="#" class="add">Añadir</a>
      </div>
      <div v-else class="button-container centrar">
        <button class="menos">-</button>
        <label class="label-contador"> 123</label>
        <button class="mas">+</button>
        <i class="far fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FrontHeroesContador",

  data() {
    return {};
  },
  props: {
    nuevo: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="css" scoped>
.contador-container {
  margin-top: 2%;
  width: 100%;
  height: auto;
  border-radius: 3px;
  background-color: #a5d6a7 !important;
}
.content {
  display: flex;
  margin-left: 10px;
  width: 100%;
}
.label-container {
  align-items: center;
}
.button-container {
  margin-right: 10% !important;
  display: flex;
  align-items: center;
}
.label-contador {
  padding: 0 10px 0 10px;
}
.mas,
.menos {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 0;
  color: rgb(13, 94, 10);
  font-weight: bold;
}
i {
  margin-left: 10px;
}
.menos {
  color: red;
}
.add {
  background-color: #617aca;
  border: 0;
  border-radius: 3px;
  color: white;
  width: 100%;
  padding: 10px;
  margin-right: 20%;
}
.add:hover {
  opacity: 0.9;
}
.add:active {
  opacity: 0.5;
}
.cancel {
  background-color: #98aefa;
  border: 0;
  border-radius: 3px;
  color: white;
  width: 100%;
  padding: 10px;
}
input {
  border: 0;
  margin-top: 7%;
  align-items: center;
}
@media (max-width: 376px) {
  input {
    display: block !important;
  }
}
</style>
