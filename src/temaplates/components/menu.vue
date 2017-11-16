<template>
	<div class="menu">
		<transition-group class="menuWrapper" name="slideUp" tag="div">
			<router-link class="menu-item"
						 :class="menuItem.point"
						 :key="menuItem"
						 v-for="menuItem in menuItems"
						 v-if="slideMenuItem"
						 :to="menuItem.link"
						 @click.native="walk()">
				<div class="menu-btn">
					<div class="menu-name">
						<p class="word">{{menuItem.name}}</p>
					</div>
				</div>
			</router-link>
		</transition-group>
		<div class="social">
			<a class="socialLink" href="" v-for="social in socials">
				{{social}}
			</a>
		</div>
	</div>
</template>
<script>
	export default {

		data(){
			return {
				slideMenuItem: false,
				menuItems: [
					{
						name: 'РАБОТЫ',
						link: '/work/0',
						point: 'point'
					},
					{
						name: 'УСЛУГИ',
						link: '/services'
					},
					{
						name: 'КОНТАКТЫ',
						link: '/contacts'
					}
				],
				socials: ['facebook', 'instagram', 'telegram']
			}
		},
		methods: {
			animationLink() {
				this.slideMenuItem = !this.slideMenuItem;
			},
			walk() {
				this.animationLink();
				this.$store.dispatch('toggleBtn');
				setTimeout(()=>{
					this.$store.dispatch('toggleControls');
				}, 250)
			}
		},
		mounted() {
			this.animationLink()
		}
	}
</script>
<style scoped lang="sass">
	.menu
		position: fixed
		top: 0
		right: 0
		z-index: 5
		display: flex
		justify-content: center
		align-items: center
		width: 100%
		height: 100%
		background: #333
		box-shadow: 0 3px 10px rgba(0,0,0,.5)

		&-item
			position: relative
			display: block
			&:nth-of-type(1)
				.menu-btn::before
					content: ''
					position: absolute
					top: 0
					left: -2px
					z-index: 2
					width: 42px
					height: 0
					background: #fff
		&-btn
			position: relative
			display: inline-block
			transition: .4s

		&-name
			font-size: 70px
			font-weight: 800
			font-family: 'Ubuntu', sans-serif
			line-height: 100px
			letter-spacing: 10px
			color: #fff
			&:hover
				color: #EE394E
	.point
		position: relative
		&::after
			content: ''
			position: absolute
			top: 20%
			right: 3%
			width: 40px
			height: 40px
			background: #fff
			border-radius: 50%
			animation: shifter 3s linear infinite

	.word
		text-shadow: 0 1px 3px rgba(0,0,0,.3)

	.social
		position: absolute
		bottom: 10px
		left: 0
		display: flex
		justify-content: center
		width: 100%
		&Link
			padding: 10px 0
			margin: 0 3%
			font-family: 'Comfortaa', cursive
			color: #fff
			transition: .5s
			&:hover
				transform: translateY(-10px)

	@keyframes shifter
		0%
			transform: translate(0, -10px)
		12.5%
			transform: translate(6px, -6px)
		25%
			background: red
			transform: translate(10px, 0px)
		37.5%
			transform: translate(6px, 6px)
		50%
			transform: translate(0, 10px)
		62.5%
			background: yellowgreen
			transform: translate(-6px, 6px)
		75%
			transform: translate(-10px, 0px)
		87.5%
			transform: translate(-6px, -6px)
		100%
			transform: translate(0px, -10px)

		// Анимация появления
	.slideUp-enter-active, .slideUp-leave-active
		transition: transform 1s
		transition-delay: .2s
		&:nth-of-type(2)
			transition-delay: .4s
		&:nth-of-type(3)
			transition-delay: .6s
		&:nth-of-type(4)
			transition-delay: .8s
	.slideUp-enter, .slideUp-leave-to
		transform: translateX(200%)
	@media (max-width: 768px)
		.menu
			&-item
	@media (max-width: 568px)
		.menu
			justify-content: flex-start
			padding-left: 15px
			&-name
				font-size: 50px
				line-height: 80px
		@media (max-width: 380px)
			.menu
				&-name
					font-size: 35px
					line-height: 60px
</style>

