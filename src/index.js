import './css/styles.css';
//https://jsonplaceholder.typicode.com/users
const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users');

const statusIndicator = document.querySelector(".status");
const usersList = document.querySelector(".users-list");
let usersData = [];
  
function writeCurrentStatus(text) {
  statusIndicator.innerHTML = text;
}

function printUsers(users) {
  let usersListHTML = "";
  users.forEach((user) => {
    usersListHTML += `
    <li>${user.name}</li>`
  });
  usersList.innerHTML = usersListHTML;
}

function makeUsersClickable() {
  const users = document.querySelectorAll(".users-list li")
  users.forEach((user) => {
    user.addEventListener("click", (event){
       
    })
  })
}

writeCurrentStatus("Loading...")

fetchUsers
  .then((response) => {
  //console.log("response:", response);
  const usersData = response.json();
  //console.log("usersData:", usersData);
  return usersData
})
  .then((recivedUsersData) => {
    console.log('recivedUsersData:', recivedUsersData);
    printUsers(recivedUsersData);
    makeUsersClickable();
  })
  .catch((error) => {
    console.log("WE have a problem:, error")
  })
  .finally(() => {
    writeCurrentStatus("");
  })
console.log("users data:", usersData)




// 
// const postsContainer = document.querySelector(".posts-container");
// const paginationContainer = document.querySelector('.pagination-container');


// const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts';
// const POSTS_PER_PAGE = 10;

// const getPosts = (page) => {
//   let postListMarkup = "";
//   const params = new URLSearchParams({
//     _limit: POSTS_PER_PAGE,
//     _page: page,
//   })
//   fetch(POSTS_API_URL + "?" + params)
//     .then((response) => response.json())
//   .then((posts) => {
//     posts.forEach((post) => {
//       postListMarkup += `
//       <li>
//       <h3>${post.title}</h3>
//       <p>${post.body}</p>
//       </li>`
//     })
//     //TODO: Add postListMarkupto Page Dom
//     postsContainer.innerHTML = postListMarkup
//   })
// }

// const setPagination = () => {
//   let paginationMarkup = "";
//   for (let i = 1; i <= 10; i++){
//    paginationMarkup += ` <button>${1}</button>`
//   }
//   paginationContainer.innerHTML = paginationMarkup;
// }
// getPosts(2);
// setPagination()