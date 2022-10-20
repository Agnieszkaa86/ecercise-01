import './css/styles.css';

const API_URL_POSTS = 'https://jsonplaceholder.typicode.com/posts';
const POSTS_PER_PAGE = 10;


const postsContainer = document.querySelector(".posts-container");
const loadMorePostsButton = document.querySelector(".load-more");
let currentPage = 1;

const getPosts = (page) => {
    let postListMarkup = "";
    const params = new URLSearchParams({
        _limit: POSTS_PER_PAGE,
        _page: page
    })
    fetch(API_URL_POSTS + "?" + params)
        .then((response) => response.json())
        .then((posts) => {
            posts.forEach((post) => {
                postListMarkup += `
                <li>
                <h3>[${post.id}]${post.title}</h3>
                <p>${post.body}</p>
                </li>
                `;
            });
            //adding posts markup to DOM
            postsContainer.insertAdjacentHTML("beforeend", postListMarkup);
        });
}
loadMorePostsButton.addEventListener("click", () => {
    fetch(API_URL_POSTS)
        .then((response) => response.json())
        .then((posts) => {
            //console.log(posts);
            const maxPage = posts.length / POSTS_PER_PAGE;
            console.log("maxPage", maxPage);
            currentPage++;
            getPosts(currentPage);
            if (currentPage === 10) {
                loadMorePostsButton.style.display = 'none';
            }
        });
    
});
getPosts(currentPage);



// const setPagination = () => {
//     let paginationMarkup = "";
//     for (let i = 1; i <= 10; i++) {
//         paginationMarkup += `
//         <button>${i}</button>`;
//     }
//     paginationContainer.innerHTML = paginationMarkup;

//     const buttons = document.querySelectorAll("button");
//     buttons.forEach((button) => {
//         button.addEventListener("click", (event) => {
//             const pageNumber = event.target.textContent;
//             //console.log("target", pageNumber)
//             getPosts(pageNumber);
//         })
//     })
// };
// getPosts(1);
//setPagination();