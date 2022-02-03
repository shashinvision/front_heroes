export const state = () => ({
  contadores: [],
});

export const actions = {
  contadorAction(context, payload) {
    console.log("context", context);
    console.log("payload", payload);
    context.commit("contadoMutation", payload);
  },
};

export const mutations = {
  contadoMutation(state, payload) {
    state.contadores.push(payload);
  },
};

//Acciones
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
