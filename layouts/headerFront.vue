<template>
  <div>
    <div class="lateralBar flex-container">
      <div class="col-6" id="select-container">
        <select name="" id="">
          <option value="">Lorem</option>
        </select>
      </div>
      <div class="col-6" id="btn-container">
        <button>+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FrontHeroesHeader",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
<style scoped>
#select-container {
  margin-left: 20%;
}
#btn-container {
  margin-left: 50%;
}
.col-6 {
  width: 50%;
}
@media (max-width: 376px) {
  .col-6 {
    width: 80%;
    margin: 0 auto !important;
  }
  .flex-container {
    display: block !important;
    padding-top: 10px;
    margin: 0 auto !important;
  }
  select {
    width: 100% !important;
  }
  button {
    width: 100% !important;
  }
}
</style>
