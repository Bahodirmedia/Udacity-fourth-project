function handleSubmit(event) {
	event.preventDefault()

	// check what text was put into the form field
	let formText = document.getElementById('name').value

	Client.checkURL(formText)

	if (formText) {
		console.log("::: Form Submitted :::")
		fetch('http://localhost:8081/article', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					formText
				})
			})
			.then(res => res.json())
			.then(function (data) {
				// document.getElementById('feelings').innerHTML = data.text
				document.getElementById('score_tag').innerHTML = data.score_tag
				document.getElementById('agreement').innerHTML = data.agreement
				document.getElementById('subjectivity').innerHTML = data.subjectivity
				document.getElementById('confidence').innerHTML = data.confidence
				document.getElementById('irony').innerHTML = data.irony
				console.log(data);
			})
	}
}

export {
	handleSubmit
}