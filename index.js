const main = document.querySelector('main')
const app = "I don't do much. But here is a list of my repos.";
const token = 'a17a61edd5cb41993f4bafb45a39940105d19aa5'
let repos

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => {
    main.innerHTML = `
      <h1>${app}</h1>
      <ul>
    `
    json.forEach(function(repo) {
      main.innerHTML += `
        <li>${repo.name}</li>
      `
    })

    main.innerHTML += '</ul>'
  })
