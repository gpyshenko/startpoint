import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		controls: false,
		navWorks: false,
		color: '#fff',
		isRect: true,
		isCross: false
	},
	mutations: {
		TOGGLE_BTN (state) {
			state.isRect = !state.isRect;
			state.isCross = !state.isCross
		},
		TOGGLE_CONTROLS (state) {
			state.controls = !state.controls
		},
		TOGGLE_NAV_WORKS (state) {
			state.navWorks = !state.navWorks
		},
		CHANGE_COLOR (state, payload) {
			state.color = payload.col
		}
	},
	actions: {
		toggleBtn ({ commit }) {
			commit('TOGGLE_BTN')
		},
		toggleControls ({ commit }) {
			commit('TOGGLE_CONTROLS')
		},
		toggleNavWorks ({commit}) {
			commit('TOGGLE_NAV_WORKS')
		},
		changeColor ({ commit } , payload) {
			commit('CHANGE_COLOR', payload)
		}
	}
});