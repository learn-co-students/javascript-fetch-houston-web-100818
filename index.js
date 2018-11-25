const app = "I don't do much.";
const token = "0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

fetch("https://api.github.com/user/repos", {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
