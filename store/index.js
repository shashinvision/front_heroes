export const state = () => ({
  contadores: [],
});

export const getters = {
  getContadores(state) {
    return state.contadores;
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
    console.log("payload actualizar", payload);
    context.commit("actualizarContadorMutation", payload);
  },
};

export const mutations = {
  contadorMutation(state, payload) {
    if (state.contadores.length > 20) {
      alert("No es permitido crear más de 20 contadores");
    }
    {
      state.contadores.push(payload);
    }
  },
  sumaRestaContadorMutation(state, payload) {
    for (let i = 0; i < state.contadores.length; i++) {
      if (payload.indexContador == i) {
        console.log("contador", state.contadores[i]);
        state.contadores[i].contador = payload.contador;
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
    console.log("state previo al mutation", state.contadores);
    console.log("payload de mutation", payload);

    state.contadores = payload;
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
