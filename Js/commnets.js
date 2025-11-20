let usersComments = document.getElementById("users-commnets")
let viewComments = document.getElementById("view-comments")
fetch(`https://jsonplaceholder.typicode.com/comments?postId=${el?.id}`)
    .then((res) => res.json())
    .then((datas) => {
        console.log(datas);

        datas.map((el) => {
            usersComments.innerHTML += `
                <div class="flex items-center gap-3">
                <div class="flex w-10 h-10 size-full items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white"">
                                    ${el.name[0]}
                </div>
                <div class=" flex flex-col gap-0 ">
                    <h1>${el.name}</h1>
                    <p>${el.body}</p>
                </div>
            </div>
             <hr class=" border-gray-200 mt-[10px]">
                </div>

    `
        })
    })

viewComments.addEventListener("click", () => {
    usersComments.classList.remove("hidden")
})