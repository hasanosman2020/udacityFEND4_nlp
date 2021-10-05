function handleSubmit (event) {
  event.preventDefault()

  // check what text was put into the form field
  let inputText = document.getElementById('name').value
  Client.checkForUrl(inputText)

  console.log('::: Form Submitted :::')
  fetch('http://localhost:3031/api', {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    //data type should be defined
    body: JSON.stringify({
      inputText: inputText
    })
  })
    .then(res => res.json())
    .then(function (res) {
      //console.log('res ======>', res)
      document.getElementById(
        'confidence'
      ).innerHTML = `Confidence rating: ${res.confidence}%`
      if (res.score_tag === 'N' || res.score_tag === 'N+') {
        document.getElementById('polarity').innerHTML =
          'Tone of article: Negative'
      } else if (res.score_tag === 'P' || res.score_tag === 'P+') {
        document.getElementById('polarity').innerHTML =
          'Tone of article: Positive'
      } else if (res.score_tag === 'NEU') {
        document.getElementById('polarity').innerHTML =
          'Tone of article: Neutral'
      } else if (res.score_tag === 'NONE') {
        document.getElementById('polarity').innerHTML = 'No sentiment detected'
      }
      if (res.agreement === 'AGREEMENT') {
        document.getElementById('agreement').innerHTML =
          'Tone of article: Consistent'
      } else if (res.agreement === 'DISAGREEMENT') {
        document.getElementById('agreement').innerHTML =
          'Tone of article: Inconsistent'
      }
      if (res.subjectivity === 'OBJECTIVE') {
        document.getElementById('subjectivity').innerHTML =
          'The article is more objective than subjective'
      } else if (res.subjectivity === 'SUBJECTIVE') {
        document.getElementById('subjectivity').innerHTML =
          'The article is more subjective than objective'
      }
      if (res.irony === 'NONIRONIC') {
        document.getElementById('ironic').innerHTML = 'No irony detected.'
      } else if (res.irony === 'IRONIC') {
        document.getElementById('ironic').innerHTML =
          'Some level of irony detected.'
      }
    })
}

export { handleSubmit }
