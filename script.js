function addPost() {
    let title = document.getElementById("post-title").value;
    let content = document.getElementById("post-content").value;

    if (title.trim() === "" || content.trim() === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    let postSection = document.getElementById("posts");

    let postDiv = document.createElement("div");
    postDiv.classList.add("post");

    let postTitle = document.createElement("h3");
    postTitle.innerText = title;

    let postContent = document.createElement("p");
    postContent.innerText = content;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Excluir";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
        postSection.removeChild(postDiv);
    };

    postDiv.appendChild(postTitle);
    postDiv.appendChild(postContent);
    postDiv.appendChild(deleteBtn);
    postSection.appendChild(postDiv);

    // Limpar os campos após publicar
    document.getElementById("post-title").value = "";
    document.getElementById("post-content").value = "";
}
