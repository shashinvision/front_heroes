<template>
  <div class="contador-container">
    <div class="content">
      <div class="label-container">
        <label>Lorem ipsum dolor sit amet.</label>
      </div>
      <div class="button-container centrar">
        <button>-</button>
        <label class="label-contador"> 123</label>
        <button>+</button>
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
button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>
