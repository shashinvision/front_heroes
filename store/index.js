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
    context.commit("contadoMutation", payload);
  },
  sumaRestaContadorAction(context, payload) {
    context.commit("sumaRestaContadorMutation", payload);
  },
};

export const mutations = {
  contadoMutation(state, payload) {
    state.contadores.push(payload);
  },
  sumaRestaContadorMutation(state, payload) {
    console.log("state", state);
    console.log("payload", payload);

    for (let i = 0; i < state.contadores.length; i++) {
      if (payload.indexContador == i) {
        console.log("contador", state.contadores[i]);
        state.contadores[i].contador = payload.contador;
      }
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
