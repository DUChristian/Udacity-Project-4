function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    
    fetch('http://localhost:8081/submitData', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
   // here we send formText value in body request to be used in server in sentiment analysis
    body: JSON.stringify({ url:formText }),
  })
    .then((res) => res.json())
    .then((res) => {
        // here render res attributes to html element which you create in html page
        document.getElementById("irony").innerHTML = res.irony;
    });
}

export { handleSubmit }
