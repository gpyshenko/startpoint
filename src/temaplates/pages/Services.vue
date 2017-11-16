<template>
	<div class="services">
		<div class="board">
			<h1 class="boardHeader">САЙТЫ</h1>
			<div class="boardWrapper">

				<transition name="app" mode="out-in" >
				<div class="boardDscr"  :key="site.id" v-for="site in sites" v-if="site.id == choosedId">
					<h2 class="siteName">{{site.name}}</h2>
					<p class="siteDscr">
						{{site.description}}
					</p>
				</div>
				</transition>

				<div class="list">
					<div class="listItem" v-for="type in types" @click="choose(type.id, $event)">
						<p>{{type.variable}}</p>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	export default {

		data(){
			return {
				rot: false,
				types: [
					{
						id: '0',
						variable: 'Лендинг',
						img: 'picture.svg'
					},
					{
						id: '1',
						variable: 'Блог',
						img: 'blog.svg'
					},
					{
						id: '2',
						variable: 'Магазин'
					},
					{
						id: '3',
						variable: 'Форум'
					},
					{
						id: '4',
						variable: 'Визитка'
					},
					{
						id: '5',
						variable: 'Контент сайт'
					},
					{
						id: '6',
						variable: 'Портал'
					},
					{
						id: '7',
						variable: 'Бизнес сайт'
					}
				],
				choosedId: '0',
				sites: [
					{
						id: 0,
						name: 'Лендинг',
						description: 'Cовременный одностраничный сайт, который позволяет показать посетителю в выгодном свете товары или услуги, описание компании, сертификаты, дипломы, награды, отзывы клиентов, контакты и подтолкнуть его к покупке, не «бродя» по многостраничному сайту.'
					},
					{
						id: 1,
						name: 'Блог',
						description: 'Сайт, основное содержимое которого – регулярно добавляемые записи (посты), содержащие текст, изображения, мультимедиа.'
					},
					{
						id: 2,
						name: 'Магазин',
						description: 'Сайт дающий возможность реализовывать товары через Интернет. Интернет-магазин является полнофункциональным магазином, с той лишь разницей, что его "витрина" расположена в Интернете.'
					},
					{
						id: 3,
						name: 'Форум',
						description: ''
					},
					{
						id: 4,
						name: 'Визитка',
						description: 'Электронный аналог традиционной бумажной визитки. Основное назначение сайта – представить своего владельца  и дать максимум сведений необходимых для контакта с ним – адрес, телефоны, e-mail и т.п.'
					},
					{
						id: 5,
						name: 'Контент сайт',
						description: 'Cайт, который представляет собой обширное собрание каких-либо тематических материалов – книг, статей, аудио и видео файлов и другое.'
					},
					{
						id: 6,
						name: 'Портал',
						description: 'Сайт, предоставляющий пользователю Интернета различные интерактивные сервисы, работающие в рамках одного веб-сайта, такие как почта, поиск, погода, новости, форумы, обсуждения, голосования.'
					},
					{
						id: 7,
						name: 'Бизнес сайт',
						description: ''
					}
				]
			}
		},
		methods: {
			shoz() {
				setTimeout(()=>{
					this.sho = !this.sho
				}, 500)

			},
			choose(typeId,event) {
				this.choosedId = typeId;
				if (event) {
					console.log('hey');
					event.target.classList.add('rot');

				}
			}
		},
		mounted() {
			this.$store.dispatch({
				type: 'changeColor',
				col: '#2d2d2d'
			})
		},
		destroyed() {
			this.$store.dispatch({
				type: 'changeColor',
				col: '#fff'
			})
		}
	}
</script>

<style lang="sass" scoped>

.services
	position: relative
	width: 100%
	height: 100%
.board
	width: calc(100% - 60px)
	height: 100%
	padding: 3%
	margin-left: 60px
	background: #fff
	&Wrapper
		display: flex
		justify-content: space-between
		padding: 2% 8% 2% 2%
		margin-top: 5%
		border-left: 2px solid #eee
		font-family: 'Comfortaa', cursive
	&Header
		font-size: 50px
		font-weight: 800
		color: #333
	&Dscr
		width: 60%
.site
	&Name
		display: block
		margin-bottom: 4%
		font-size: 30px
	&Dscr
		font-size: 18px
		font-family: 'Comfortaa', cursive
		line-height: 25px
.rot
	color: red
.list
	position: fixed
	right: 10%
	bottom: 0
	max-width: 350px
	min-width: 235px
	padding: 2%
	list-style: none
	color: #fff
	background: #2d2d2d
	box-shadow: 0 3px 6px rgba(0,0,0,.4)
	/*&::after*/
		/*content: ''*/
		/*position: absolute*/
		/*top: calc(100% - 30px)*/
		/*right: calc(100% - 30px)*/
		/*width: 40px*/
		/*height: 40px*/
		/*border: 8px solid #2d2d2d*/
		/*border-top: none*/
		/*border-right: none*/
		/*filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.4))*/
	&Item
		position: relative
		margin: 30px 0
		font-weight: 700
		font-size: 18px
		cursor: pointer
		&::after
			content: ''
			position: absolute
			bottom: -3px
			left: 0
			width: 15%
			height: 2px
			background: #fff
			transform: scale(0)
			transform-origin: left
			transition: 0.5s
		&:hover::after
			transform: scale(1)

.app-enter-active, .app-leave-active
	transition: all .3s ease

.app-enter, .app-leave-to
	opacity: 0

@media (max-width: 768px)
	.board
		width: 100%
		margin-left: 0
	.list
		position: absolute
		right: 0
		border-radius: 4px 0 0 4px
@media (max-width: 568px)
	.site
		&Name
			margin-bottom: 4%
			font-size: 30px
		&Dscr
			font-size: 16px
			line-height: 25px
@media (max-width: 380px)
	.site
		&Dscr
			font-size: 14px
			line-height: 22px
</style>