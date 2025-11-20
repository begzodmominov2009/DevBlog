let feedPosts = document.getElementById("feed-posts")
let likes = JSON.parse(localStorage.getItem("likes") || "[]")
localStorage.setItem("likes", JSON.stringify(likes))
getData("posts", (res) => {
    res.map((el) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${el?.id}`).then((res1) => (res1.json())).then((data1) => (
            feedPosts.innerHTML += `
              <div class="bg-[white] rounded-lg">
                    <div class="p-6">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <div class="flex w-10 h-10 size-full items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white"">
                                    L
                                </div>
                                <div>
                                    <h1>${data1?.name}</h1>
                                    <p>${data1?.username}</p>
                                </div>
                            </div>
                            <div>
                                <p class="font-bold">...</p>
                            </div>
                        </div>
                    </div>
                    <hr class="border-gray-200 mt-[0px]">
                    <div class="w-full h-[220px]">
                        <img class="w-full h-full mt-[20px]" src="https://picsum.photos/500?random=${el.id}" alt="img">
                    </div>
                    <div class="p-6">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-4">
                                   ${likes.find((item) => item.id === el.id)
                          ? `<button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="red" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-heart h-6 w-6 text-gray-900"
                                    aria-hidden="true">
                                    <path
                                        d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5">
                                    </path>
                                </svg>
                                </button>` : `<button onClick="addToLiks(${el.id})">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-heart h-6 w-6 text-gray-900"
                                    aria-hidden="true">
                                    <path
                                        d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5">
                                    </path>
                                </svg>
                                </button>`
            }

                              <button id="view-comments">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-message-circle h-6 w-6 text-gray-900"
                                    aria-hidden="true">
                                    <path
                                        d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719">
                                    </path>
                                </svg>
                              </button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-share2 lucide-share-2 h-6 w-6 text-gray-900"
                                    aria-hidden="true">
                                    <circle cx="18" cy="5" r="3"></circle>
                                    <circle cx="6" cy="12" r="3"></circle>
                                    <circle cx="18" cy="19" r="3"></circle>
                                    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                                    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-bookmark h-6 w-6 text-gray-900"
                                    aria-hidden="true">
                                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="pt-[10px]">
                            <p>84 likes</p>
                        </div>
                        <div class="pt-[10px]">
                            <p>${el.title}</p>
                            <p>${el.body}</p>
                            <p class="pt-[10px]">View all <span>21</span>commnets</p>
                            <p class="pt-[10px]">2 days ago</p>
                        </div>
                    </div>
                </div>
            `))

    })
})
window.addToLikes = function (id) {
    likes.push({ id });    // <-- ENG MUHIM QISM
    localStorage.setItem("likes", JSON.stringify(likes));
    location.reload();     // UI yangilanishi uchun
}
