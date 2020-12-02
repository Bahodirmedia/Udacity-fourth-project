function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkURL(formText)

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
        .then(res=> res.json())
        .then(function (data) {
            console.log(data);
            document.getElementById('results').innerHTML = data.subjectivity
        })
}

export {
    handleSubmit
}