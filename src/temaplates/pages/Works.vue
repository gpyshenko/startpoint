<template>
	<div class="worksWrapper">
		<div class="worksControls">
			<button class="worksBtn prev" @click="routePlus()">
				<svg width="50px" height="50px">
					<path d="M 8 14 L 25 36 L 42 14" fill="none" stroke="#fff" stroke-width="4"/>
				</svg>
			</button>
			<button class="worksBtn next" @click="routeMinus()">
				<svg width="50px" height="50px">
					<path d="M 8 36 L 25 14 L 42 36" fill="none" stroke="#fff" stroke-width="4"/>
				</svg>
			</button>

		</div>
		<transition-group class="works" name="fades" tag="div">
			<div class="works-item"  v-if="work" :key="work" :style="{ 'background-image': 'url(' + work.bgimg + ')' }">

				<h1 class="name" :style="{'color': work.colorTxt}">{{ work.name}}</h1>
				<p class="dscr" :style="{'color': work.colorTxt}">
					{{ work.description }}
				</p>
				<a class="link" :href="work.link" :style="{'background': work.colorTxt, 'color': work.colorTwo}" target="_blank">
					ПОДРОБНЕЕ
				</a>

			</div>
		</transition-group>
	</div>
</template>

<script>
	export default {

		data () {
			return {
				works: [
					{
						name: 'Healthis',
						description: 'Медицинский туризм',
						link: 'http://healthis.uz/',
						bgimg: '/src/assets/images/works/healthis.jpg',
						colorTxt: '#fff'
					},
					{
						name: 'GreenNet',
						description: 'Интернет провайдер бизнес класса',
						link: 'http://greennet.uz/',
						bgimg: '/src/assets/images/works/greennet.jpg',
						colorTxt: '#2f4052',
						colorTwo: '#fff'
					},
					{
						name: 'STREET WORKOUT',
						description: 'Street Workout в Узбекистане',
						link: 'http://sw.uz/',
						bgimg: '/src/assets/images/works/nyam.jpg',
						colorTxt: '#fff'
					}
				],
				work: 0,
				transitionName: 'slide-down'
			}

		},
		created() {
			this.work = this.works[this.$route.params.id]
		},
		methods: {
			routePlus() {
				let siteId = +this.$route.params.id;
				if(siteId < this.works.length - 1) {
					this.$router.push({ name: "work", params: { id: siteId + 1}})
				} else {
					this.$router.push({ name: "work", params: { id: 0}})
				}
			},
			routeMinus() {
				let siteId = this.$route.params.id;
				if(siteId > 0) {
					this.$router.push({ name: "work", params: { id: siteId - 1}})
				} else {
					this.$router.push({ name: "work", params: { id: siteId = this.works.length - 1}})
				}
			}
		},
		mounted() {
			this.$store.dispatch('toggleNavWorks');

		},
		beforeDestroy() {
			this.$store.dispatch('toggleNavWorks');
		},
		watch: {
			'$route' (to, from) {
				let siteId = this.$route.params.id;
				this.work = this.works[siteId]
			}

		}

	}
</script>

<style lang="sass" scoped>
.works
	width: 100%
	height: 100%
	overflow: hidden
	font-family: 'Ubuntu', sans-serif
	&Wrapper
		position: relative
		width: 100%
		height: 100%
	&Controls
		position: absolute
		bottom: 50px
		right: 4%
		z-index: 5
		display: flex
	&-item
		display: flex
		flex-direction: column
		justify-content: flex-end
		align-items: flex-start
		width: 100%
		height: 100%
		padding: 0 0 50px 140px
		background: no-repeat
		background-size: cover
		transition: padding .8s
	&Btn
		position: relative
		width: 32px
		height: 32px
		margin: 0 5px
		background: transparent
		border: none
		transition: .3s
		&:active
			transform: scale(.9)



.name
	position: relative
	margin-bottom: 30px
	font-size: 120px
	text-transform: uppercase
	transition: font-size .8s
.dscr
	font-size: 19px
	line-height: 19px

.link
	display: inline-block
	padding: 7px 40px
	margin-top: 30px
	font-weight: 600
	text-transform: uppercase
	text-align: center
	color: #333
	background: #fff
	box-shadow: 0 3px 2px rgba(0, 0, 0, 0.3)
	transition: .4s
	&:hover
		opacity: .8
	&:active
		box-shadow: none
.fades-enter-active, .fades-leave-active
	transition: opacity 1s
.fades-enter, .fades-leave-to
	opacity: 0
@media (max-width: 768px)
	.works
		&-item
			padding: 30px 20px
			background-position: center
		&Controls
			right: 20px
	.name
		font-size: 90px
@media (max-width: 568px)
	.name
		font-size: 70px
	.link
		padding: 7px 20px
		margin-top: 100px
@media (max-width: 380px)
	.name
		font-size: 50px
</style>