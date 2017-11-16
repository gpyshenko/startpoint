<template>
		<div class="controlPanel" @click="toggleMenu()">
			<div class="btnMenu">
				<rect-component v-if="$store.state.isRect"></rect-component>
				<cross-component v-if="$store.state.isCross"></cross-component>
			</div>
		</div>
</template>
<script>
import rectComponent from '../components/burger/rect.vue'
import crossComponent from '../components/burger/cross.vue'
export default {
	components: {
		rectComponent,
		crossComponent
	},
	data (){
		return {
		}
	},
	methods: {
		toggleMenu(){
			setTimeout(()=>{
				this.$store.dispatch('toggleBtn');
			}, 300);

			this.$store.dispatch('toggleControls')
		}
	}
}
</script>
<style lang="sass" scoped>
.controlPanel
	position: fixed
	top: 20px
	right: 30px
	z-index: 999
	display: flex
	justify-content: center
	cursor: pointer

.btnMenu
	position: relative
	cursor: pointer
	z-index: 2
	transition: .2s
	&:active
		transform: scale(0.8)
</style>