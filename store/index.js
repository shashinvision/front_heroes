export const state = () => ({
  contadores: [],
  filtros: {
    mayorQueActivado: "",
    menorQueActivado: "",
    filtroBusqueda: "",
  },
});

export const getters = {
  getContadores(state) {
    let resultado = [];
    if (state.filtros.mayorQueActivado != "") {
      for (let i = 0; i < state.contadores.length; i++) {
        if (state.contadores[i].contador > state.filtros.mayorQueActivado) {
          resultado.push(state.contadores[i]);
        }
      }
    } else if (state.filtros.menorQueActivado != "") {
      for (let i = 0; i < state.contadores.length; i++) {
        if (state.contadores[i].contador < state.filtros.menorQueActivado) {
          resultado.push(state.contadores[i]);
        }
      }
    } else if (state.filtros.filtroBusqueda != "") {
      // en proceso aun ...
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
  },
  actualizarContadorMutation(state, payload) {
    state.contadores = payload;
  },
  filtrosMutation(state, payload) {
    if (payload.dataMayorQue != "") {
      state.filtros.mayorQueActivado = payload.dataMayorQue;
    } else if (payload.dataMenorQue != "") {
      state.filtros.menorQueActivado = payload.dataMenorQue;
    } else {
      state.filtros.mayorQueActivado = "";
      state.filtros.menorQueActivado = "";
      state.filtros.filtroBusqueda = ""; // falta desarrollo de esta actividad
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
