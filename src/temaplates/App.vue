<template>
	<div id="app">
		<!--Левая плашка-->
		<navigation></navigation>
	  	<!--Левая плашка-->

	  	<!--Основная часть со страницей-->
	  	<div class="main">
		  	<transition :key="$route.path" name="fade" mode="out-in">
			  	<router-view></router-view>
		  	</transition>
	  	</div>
	  	<!--Основная часть со страницей-->

	  	<controlPanel></controlPanel>

	  	<transition name="appear">
			<menuPanel v-if="$store.state.controls"></menuPanel>
	  	</transition>
  	</div>
</template>

<script>
import navigation from './includes/navigation.vue';
import controlPanel from './includes/controlPanel.vue';
export default {
	name: 'app',

	 components: {
		navigation,
		controlPanel,
		menuPanel: () => import('./components/menu.vue')

	},

	data () {
		return {

		}
	},
	methods: {
		check() {
			if (this.$route.path === '/services'){
				console.log('Start')
			}
		}
	},
	updated(){
		this.check();
	}
}
</script>

<style lang="sass">
@import "../assets/reset"
@import "../assets/fonts"
#app
	position: relative
	width: 100%
	height: 100%
.main
	position: relative
	z-index: 2
	width: 100%
	height: 100%

.container
	position: relative
	width: 100%

.appear-enter-active, .appear-leave-active
	transition: all 1s
	transition-delay: .1s
.appear-enter, .appear-leave-to
	transform: translateX(100%)

.fade-enter-active, .fade-leave-active
	transition: opacity .5s
.fade-enter, .fade-leave-to
	opacity: 0

</style>
