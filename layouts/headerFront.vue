<template>
  <div>
    <div class="lateralBar flex-container">
      <div class="col-6" id="btn-container">
        <modal />
      </div>
    </div>
  </div>
</template>

<script>
import modal from "../components/modal.vue";
export default {
  name: "FrontHeroesHeader",
  components: {
    modal,
  },
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
