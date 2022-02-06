export const state = () => ({
  contadores: [],
  filtros: {
    dataMayorQue: "",
    dataMenorQue: "",
    filtroBusqueda: "",
    buscadorText: "",
  },
});

export const getters = {
  getContadores(state) {
    let resultado = [];
    console.log("data State", state.filtros);

    if (state.filtros.buscadorText != "") {
      for (let i = 0; i < state.contadores.length; i++) {
        if (
          state.contadores[i].nombre
            .toString()
            .includes(state.filtros.buscadorText) ||
          state.contadores[i].contador
            .toString()
            .includes(state.filtros.buscadorText)
        ) {
          resultado.push(state.contadores[i]);
        }
      }
    } else if (state.filtros.dataMayorQue != "") {
      for (let i = 0; i < state.contadores.length; i++) {
        if (state.contadores[i].contador > state.filtros.dataMayorQue) {
          resultado.push(state.contadores[i]);
        }
      }
    } else if (state.filtros.dataMenorQue != "") {
      for (let i = 0; i < state.contadores.length; i++) {
        if (state.contadores[i].contador < state.filtros.dataMenorQue) {
          resultado.push(state.contadores[i]);
        }
      }
    } else {
      resultado = state.contadores;
    }
    return resultado;
  },
  getTotalSumaContadores(state) {
    let resultado = 0;
    for (let i = 0; i < state.contadores.length; i++) {
      resultado += state.contadores[i].contador;
    }
    return resultado;
  },
};

export const actions = {
  contadorAction(context, payload) {
    context.commit("contadorMutation", payload);
  },
  sumaRestaContadorAction(context, payload) {
    context.commit("sumaRestaContadorMutation", payload);
  },
  eliminarContadorAction(context, payload) {
    context.commit("eliminarContadorMutation", payload);
  },
  actualizarContadorAction(context, payload) {
    context.commit("actualizarContadorMutation", payload);
  },
  filtrosAction(context, payload) {
    context.commit("filtrosMutation", payload);
  },
  filtrosTextAction(context, payload) {
    context.commit("filtrosTextMutation", payload);
  },
  inicioContadoresAction(context) {
    if (JSON.parse(localStorage.getItem("contadores"))) {
      context.commit(
        "inicioContadoresMutation",
        JSON.parse(localStorage.getItem("contadores"))
      );
    }
  },
};

export const mutations = {
  contadorMutation(state, payload) {
    if (state.contadores.length > 20) {
      alert("No es permitido crear más de 20 contadores");
    }
    {
      if (JSON.parse(localStorage.getItem("contadores"))) {
        state.contadores = JSON.parse(localStorage.getItem("contadores"));
      }
      state.contadores.push(payload);
      localStorage.setItem("contadores", JSON.stringify(state.contadores));
    }
  },
  filtrosTextMutation(state, payload) {
    state.filtros.buscadorText = payload;
    state.filtros.dataMayorQue = "";
    state.filtros.dataMenorQue = "";
    state.filtros.filtroBusqueda = "";
  },
  inicioContadoresMutation(state, payload) {
    state.contadores = payload;
  },
  sumaRestaContadorMutation(state, payload) {
    for (let i = 0; i < state.contadores.length; i++) {
      if (payload.indexContador == i) {
        let dataLocal = JSON.parse(localStorage.getItem("contadores"));

        state.contadores[i].contador = payload.contador;
        dataLocal[i].contador = payload.contador;
        localStorage.setItem("contadores", JSON.stringify(dataLocal));
      }
    }
  },
  eliminarContadorMutation(state, payload) {
    for (let i = 0; i < state.contadores.length; i++) {
      if (payload == i) {
        state.contadores.splice(i, 1);
      }
    }

    localStorage.setItem("contadores", JSON.stringify(state.contadores));
  },
  actualizarContadorMutation(state, payload) {
    state.contadores = payload;
    localStorage.setItem("contadores", JSON.stringify(state.contadores));
  },
  filtrosMutation(state, payload) {
    if (payload.dataMayorQue != "") {
      state.filtros.dataMayorQue = payload.dataMayorQue;
      sessionStorage.setItem("dataMayorQue", payload.dataMayorQue);
      sessionStorage.setItem("orden", "");
      sessionStorage.setItem("dataMenorQue", "");
    } else if (payload.dataMenorQue != "") {
      state.filtros.dataMenorQue = payload.dataMenorQue;
      sessionStorage.setItem("dataMenorQue", payload.dataMenorQue);
      sessionStorage.setItem("orden", "");
      sessionStorage.setItem("dataMayorQue", "");
    } else if (payload.orden != "") {
      state.filtros.filtroBusqueda = payload.orden;
      sessionStorage.setItem("orden", payload.orden);
      sessionStorage.setItem("dataMayorQue", "");
      sessionStorage.setItem("dataMenorQue", "");
    } else {
      state.filtros.dataMayorQue = "";
      state.filtros.dataMenorQue = "";
      state.filtros.filtroBusqueda = "";
    }
  },
};

// // Estado
// export const state = () => ({
//     _counter: 0
// });

// //Acciones
// export const actions = {
//     sumar(context, num) {
//         context.commit('SUMAR', num)
//     }
// };

// // Mutaciones
// export const mutations = {
//     SUMAR(state, num) {
//         state._counter += num;
//     }
// };

// // Accesores
// export const getters = {
//     getCounter(state) {
//         return state._counter;
//     }
// }
