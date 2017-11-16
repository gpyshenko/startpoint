<template>
	<div class="contacts">
		<div class="contacts-board">
			<div class="letter">
				<h2 class="letterHeader">
					Письмо
				</h2>
				<div class="letterRow">
					<p>Приветствуем вас уважаемая компания <span class="letterSpan">{{ companyName }}</span>.</p>
				</div>
				<div class="letterRow">
					<p>Студия разработки <span class="letterSpan">MONO</span> благодарит за ваше внимание!</p>
				</div>
				<div class="letterRow">
					<p>Мы непременно свяжемся с вами по номеру <span class="letterSpan">+998 9{{ companyPhone }}</span>.</p>
				</div>
				<div class="letterRow">
					<p>И обязательно напишем на <span class="letterSpan">{{ companyMail }}</span>.</p>
				</div>
				<div class="letterRow">
					<p>Желаем удачного дня!</p>
				</div>
			</div>
			<form action="" class="form">
				<h2 class="formHeader"> ФОРМА ЗАЯВКИ </h2>
				<label class="formLabel" for="name">
					<span class="inputName" id="nameSpan">
						Название компании
					</span>
					<input @click="focusInput('name')" type="txt" id="name" v-model="companyName" maxlength="20" placeholder="" autocomplete="off">
				</label>
				<label class="formLabel" for="phone">
					<span class="inputName" id="phoneSpan">
						Контактный номер
					</span>
					<input @click="focusInput('phone')" type="txt" id="phone" v-model="companyPhone" maxlength="20" autocomplete="off">
				</label>
				<label class="formLabel" for="mail">
					<span class="inputName" id="mailSpan">
						Почта компании
					</span>
					<input @click="focusInput('mail')" type="txt" id="mail" v-model="companyMail" maxlength="20" autocomplete="off">
				</label>
				<button class="form-button">Отправить</button>
			</form>
		</div>
	</div>
</template>
<script>
	export default {

		data (){
			return {
				companyName: '',
				companyPhone: '',
				companyMail: ''
			}
		},
		methods: {
			focusInput(id){
				document.querySelector('#'+id+'Span').classList.add('shiftLabel')
			}
		}
	}

</script>
<style scoped lang="sass">
	$formColor: #F9C122
	$formBg: #171B1E
	.contacts
		display: flex
		justify-content: center
		align-items: center
		width: 100%
		height: 100%
		background: url(../../assets/images/menu/pex.jpg)
		background-size: cover
		&-board
			display: flex
			width: 80%
			height: 80%
			border-radius: 6px
			box-shadow: 0 5px 10px $formBg
	.letter
		width: 35%
		padding: 5% 3%
		color: #fff
		text-align: center
		background: rgba(23, 27, 30, 0.95)
		border-radius: 4px 0 0 4px
		font-family: 'Ubuntu', sans-serif
		&Header
			margin-bottom: 3%
			font-size: 30px
			font-weight: 400
		&Row
			margin-bottom: 5%
			font-size: 20px
			line-height: 1.5
			&::first-letter
				padding-left: 7%
		&Span
			color: $formColor
	.form
		display: flex
		justify-content: flex-end
		flex-flow: wrap
		width: 65%
		padding: 5%
		background: $formBg
		border-radius: 0 4px 4px 0
		&Header
			margin-bottom: 3%
			font-family: 'Ubuntu', sans-serif
			color: #fff
		&Label
			position: relative
			display: block
			width: 100%
			height: 40px
			margin-bottom: 8%
			font-family: 'Ubuntu', sans-serif
		input
			width: 100%
			height: 40px
			border: none
			color: #fff
			font-weight: 600
			background: transparent
			border-bottom: 1px solid #ddd
			transition: .3s
			&:focus
				border-bottom: 1px solid $formColor
		&-button
			width: 30%
			min-width: 150px
			height: 50px
			padding: 0 10px
			font-weight: 800
			color: $formColor
			background: transparent
			border: 2px solid $formColor
			border-radius: 30px
			transition: .5s
			&:hover
				color: $formBg
				background: $formColor
	.inputName
		position: absolute
		bottom: 5px
		left: 0
		color: #ddd
		transform-origin: left
		transition: .2s
	.shiftLabel
		color: $formColor
		transform: scale(0.8) translateY(-200%)
	@media (max-width: 992px)
		.letter
			display: none
		.form
			width: 100%
	@media (max-width: 568px)
		.contacts
			align-items: flex-start
			&-board
				width: 100%
				height: 100%
		.form
			justify-content: center
			align-items: flex-end
			padding-top: 50px
</style>