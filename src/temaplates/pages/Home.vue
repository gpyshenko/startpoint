<template>
	<div class="home">
		<div class="homeDscr">
			<p>СТУДИЯ</p>
			<p>РАЗРАБОТКИ</p>
			<p>MONO</p>
		</div>

		<button class="about" @click="routeMinus()">
			<svg width="50px" height="50px">
				<path d="M 10 0 L 25 20 L 40 0" fill="none" stroke="#fff" stroke-width="4"/>
				<path d="M 8 14 L 25 36 L 42 14" fill="none" stroke="#fff" stroke-width="4"/>
			</svg>
		</button>

	</div>
</template>

<script>
	export default {

		data () {
			return {

			}
		}
	}
</script>

<style scoped lang="sass">
.home
	position: relative
	display: flex
	justify-content: flex-start
	align-items: center
	width: 100%
	height: 100%
	padding: 0 4%
	background: url(../../assets/computer.jpg)
	background-size: cover
	overflow-y: auto
	&Dscr
		padding-left: 10%
		font-size: 60px
		font-weight: 800
		color: #fff
		text-shadow: 0 2px 10px rgba(0,0,0,.5)
		transition: .6s ease
.about
	position: absolute
	bottom: 5%
	right: calc(50% - 25px)
	transition: .2s
	&:active
		transform: scale(0.9)
@media (max-width: 568px)
	.home
		&Dscr
			padding-left: 0
</style>
