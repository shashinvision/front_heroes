<template>
  <div>
    <div class="lateralBar flex-container">
      <div class="col-6" id="select-container">
        <select name="" id="">
          <option value="">-- Menor que ---</option>
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
  margin-left: 30%;
}
.col-6 {
  width: 50%;
}
select {
  background-color: #5c6bc0;
  border-color: #5c6bc0;
  border-radius: 3px;
  padding: 5px;
}
button {
  background-color: #5c6bc0;
  border-color: #5c6bc0;
  border: 0;
  border-radius: 3px;
  padding: 5px;
  box-shadow: 2px 9px 20px -6px rgba(0, 0, 0, 0.43);
  width: 50% !important;
}
@media (max-width: 376px) {
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
  button {
    width: 100% !important;
  }
}
</style>
