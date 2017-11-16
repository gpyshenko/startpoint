<template>
	<div class="cross" :class="{activeCross}" @click="changeCross()">
		<div class="part" v-for="n in 2"></div>
	</div>
</template>
<script>
	export default {
		data (){
			return {
				activeCross: true
			}
		},
		methods: {
			changeCross() {
				this.activeCross = !this.activeCross
			}
		},
		mounted() {
			setTimeout(()=>{
				this.changeCross()
			}, 50);
		},
		beforeDestroy() {
			this.changeCross()
		}
	}
</script>
<style lang="sass" scoped>
.cross
	width: 30px
	height: 30px
.part
	position: absolute
	top: calc(50% - 3px)
	left: calc(50% - 15px)
	width: 30px
	height: 6px
	background: #fff
	transition: .3s
	&:nth-of-type(1)
		transform: scale(1) rotate(45deg)
	&:nth-of-type(2)
		transform: scale(1) rotate(-45deg)

.activeCross
	.part
		&:nth-of-type(1)
			transform: scale(0) rotate(45deg)
		&:nth-of-type(2)
			transform: scale(0) rotate(-45deg)
</style>