<template>
  <div class="contador-container">
    <div class="content">
      <div class="label-container">
        <input
          v-if="nuevo"
          type="text"
          placeholder="Nombre del contador..."
          v-model="contadorInput.nombre"
          maxlength="20"
        />
        <input
          v-else
          type="text"
          readonly
          :value="dataContador.dataContador.nombre"
        />
      </div>
      <div v-if="nuevo" class="button-container centrar">
        <a class="add" @click="contadorAdd">Añadir</a>
      </div>
      <div v-else class="button-container centrar">
        <button class="menos" @click="menos">-</button>
        <label class="label-contador">{{
          dataContador.dataContador.contador
        }}</label>
        <button class="mas" @click="mas">+</button>
        <i class="far fa-trash-alt" @click="eliminar"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FrontHeroesContador",
  data() {
    return {
      contadorInput: {
        nombre: "",
        contador: 0,
      },
    };
  },
  props: {
    nuevo: {
      type: Boolean,
      default: false,
    },
    dataContador: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  mounted() {},
  methods: {
    ...mapActions({
      addContador: "contadorAction",
      contadorMutation: "sumaRestaContadorAction",
      eliminarContador: "eliminarContadorAction",
    }),
    contadorAdd() {
      if (this.contadorInput.nombre != "") {
        // para que no ocurra el error "Vuex - Do not mutate vuex store state outside mutation handlers" creamos la variable con una clonación del objeto y se envía al action de Vuex
        let data = { ...this.contadorInput };
        this.addContador(data);
        this.contadorInput.nombre = "";
        // this.$router.push({ name: "Home" });
        this.$router.back();
      } else {
        alert("Favor indicar nombre del contador");
      }
    },
    mas() {
      if (this.contadorInput.contador < 20) {
        this.contadorInput.contador++;
        let data = {
          indexContador: this.dataContador.index,
          contador: this.contadorInput.contador,
        };
        this.contadorMutation(data);
      }
    },
    menos() {
      if (this.contadorInput.contador > 0) {
        this.contadorInput.contador--;
        let data = {
          indexContador: this.dataContador.index,
          contador: this.contadorInput.contador,
        };
        this.contadorMutation(data);
      }
    },
    eliminar() {
      if (confirm("Estas apunto de eliminar un contador, estas seguro?")) {
        this.eliminarContador(this.dataContador.index);
      }
    },
  },
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
  height: 28px;
  border-radius: 3px;
}
@media (max-width: 376px) {
  input {
    display: block !important;
  }
}
</style>
