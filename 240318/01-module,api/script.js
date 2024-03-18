const feed = document.querySelector(".feed");

const getUserById = (id) => {
  const URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data);
};

const createPost = async (post) => {
  const wrap = document.createElement("div");
  const user = document.createElement("a");
  const article = document.createElement("div");

  article.classList.add("article");
  user.classList.add("user");
  wrap.classList.add("post");

  wrap.id = post.id;

  article.innerText = post.body;

  const userInfo = await getUserById(post.userId);
  user.innerText = `@${userInfo.username}`;
  user.href = "./user.html";

  user.addEventListener("click", () => {
    localStorage.setItem("userId", post.userId);
  });

  wrap.append(user, article);
  feed.appendChild(wrap);
};

const getAllPosts = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((post) => {
        createPost(post);
      });
    });
};

if (feed) {
  getAllPosts();
}
