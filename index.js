const app = "I don't do much.";
const token = 'e664fe4bb0009b5c810dc6a1b150d6822076061e';
fetch('https://api.github.com/user/repos', {
    headers: {
        Authorization: `token ${token}`
    }
})
    .then(res => res.json())
    .then(json => console.log(json));
