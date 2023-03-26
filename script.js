function createPost(name, message, imageURL) {
    let post = document.createElement("div");
    post.classList.add("post");

    let image = document.createElement("img");
    image.src = imageURL;
    post.appendChild(image);

    let title = document.createElement("h2");
    title.textContent = name;
    post.appendChild(title);

    let content = document.createElement("p");
    content.textContent = message;
    post.appendChild(content);

    return post;
}

let postsDiv = document.getElementById("posts");

for (let i = 1; i <= 826; i++) {
    let name = "Personaje " + i;
    let message = "Esta es mi publicación número " + i + " por medio de funciones y ciclos.";
    let imageURL = "https://rickandmortyapi.com/api/character/avatar/" + i + ".jpeg";

    let post = createPost(name, message, imageURL);
    postsDiv.appendChild(post);
}
