import {sendMessage} from './users/sendMessage.js'

const username = document.querySelector('.username')
const message = document.querySelector('.message')
const submitButton = document.querySelector('button')

submitButton.addEventListener('click', (e) => {
	e.preventDefault()
	sendMessage({username: 'test', message: 'Hello'})
})