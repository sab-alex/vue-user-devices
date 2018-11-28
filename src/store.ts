import Vue from "vue";
import Vuex from "vuex";
import { usersHttpService } from './services/http/Users.http.service';
import { devicesHttpService } from './services/http/Devices.http.service';
import to from 'await-to-js';
import { DeviceModel } from './models/DeviceModel';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    selectedUsers : [],
    userSelectedDevices: [],
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
    setSelectedUser(state, payload) {
      state.selectedUsers = payload;
    },
    setUserSelectedDevices(state, payload) {
      state.userSelectedDevices = payload;
    },
    updateDevice(state, payload) {
      const {id, object} = payload;
      let device = state.userSelectedDevices.find((device: DeviceModel) => device.id == id);
      device = Object.assign(device, object);
    }
  },  
  actions: {
    async fetchUsers({state, commit}) {
      commit('setUsers', await usersHttpService.fetch({}));
    },
    async getUsers({state, dispatch}) {
      await  dispatch('fetchUsers');
      return state.users;
    },
    setSelectedUser({commit}, payload){
      commit('setSelectedUser', payload);
    },

    async getUserSelectedDevices({state,commit}, payload) {
      commit('setUserSelectedDevices', await devicesHttpService.fetchByUsers(payload));
      return state.userSelectedDevices;
    },
    async updateDevice({state,commit}, payload) {
      let err, res;
      const {id, object} = payload;
      [err, res] = await to(devicesHttpService.update(id, object));
      if (err) {
        throw err;
      }
      commit('updateDevice', payload);
      return state.userSelectedDevices;
    },
  }
});
