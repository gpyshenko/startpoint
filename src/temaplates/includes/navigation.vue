<template>
	<div class="navigation" :style="{ background: $store.state.color }">
		<router-link to="/">
			<h2 class="navigationLogo">
				MONO
			</h2>
		</router-link>
		<div class="links-wrap" v-if="$store.state.navWorks">
			<div class="links" v-for="(work, index) in works">
				<router-link :to="{name: 'work', params: {id: index, url: work.url}}" class="nav-link"></router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				works: [
					{
						url: 'Healthis'
					},
					{
						url: 'GreenNet'
					},
					{
						url: 'SW'
					}
				],
				work: null
			}
		},
		methods: {
		}
	}
</script>

<style lang="sass">
.navigation
	position: absolute
	top: 0
	left: 0
	z-index: 6
	display: flex
	justify-content: space-between
	align-items: center
	flex-flow: column
	width: 4%
	min-width: 60px
	height: 100%
	padding: 4% 0
	background: #fff
	box-shadow: 1px 0 6px 0 rgba(0, 0, 0, 0.3)
	transition: .5s
	&Logo
		transform: rotate(-90deg)

.navActive
	display: none
.links
	display: flex
	justify-content: center
.nav-link
	width: 10px
	height: 10px
	margin-top: 10px
	background: #333
	border-radius: 50%
	transition: 0.5s
	&:hover
		transform: scale(1.4)

.links .router-link-exact-active
	transform: scale(1.4)
	background: #2196f3


@media (max-width: 768px)
	.navigation
		display: none

	.links-wrap
		display: none
</style>

