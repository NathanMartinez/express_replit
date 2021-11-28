const username = $('.username')
const message = $('.message')

const postData = (path, data) => {
	$.ajax({
		contentType: 'application/json',
		data: JSON.stringify(data),
		dataType: 'json',
		processData: false,
		type: 'POST',
		url: `https://nodereplit.nathanmartinez2.repl.co${path}`
	});
}

$('button').click((e) => {
	e.preventDefault()
	postData('/users',{
		username: username.val(),
		message: message.val()
	})
})