<template>
	<div class="rect" :class="{activeRect}" @click="changeRect()">
		<div class="part" v-for="n in 9" :style="{ background: $store.state.color }"></div>
	</div>
</template>
<script>
	export default {
		data (){
			return {
				activeRect: true
			}
		},
		methods: {
			changeRect() {
				this.activeRect = !this.activeRect
			}
		},
		mounted() {
			setTimeout(()=>{
				this.changeRect()
			}, 100);
		},
		destroyed() {
			this.changeRect()
		},
		beforeDestroy() {
			this.changeRect()
		}
	}
</script>
<style lang="sass" scoped>
.rect
	display: flex
	justify-content: space-between
	flex-wrap: wrap
	width: 30px
	height: 30px
	transition: .3s

.part
	width: 8px
	height: 8px
	background: #fff
	transform: scale(0.8)
	transition: .3s
	will-change: transform
	box-shadow: 0 0 10px rgba(0,0,0,.4)

.activeRect
	box-shadow: none
	opacity: 0
	.part
		&:nth-of-type(1)
			transform: scale(0.8) translate(14px, 12px)
		&:nth-of-type(2)
			transform: scale(0.8) translate(0, 12px)
		&:nth-of-type(3)
			transform: scale(0.8) translate(-14px, 12px)
		&:nth-of-type(4)
			transform: scale(0.8) translate(14px, 0)
		&:nth-of-type(6)
			transform: scale(0.8) translate(-14px, 0)
		&:nth-of-type(7)
			transform: scale(0.8) translate(14px, -12px)
		&:nth-of-type(8)
			transform: scale(0.8) translate(0, -12px)
		&:nth-of-type(9)
			transform: scale(0.8) translate(-14px, -12px)
</style>