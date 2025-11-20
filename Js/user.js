let usersCard = document.getElementById("users-card")
getData("users", (res) => {
    res.map((el) => {
        Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${el.id}`).then(r => r.json()),
            fetch(`https://jsonplaceholder.typicode.com/albums?userId=${el.id}`).then(r => r.json()),
            fetch(`https://jsonplaceholder.typicode.com/todos?userId=${el.id}`).then(r => r.json())
        ]).then(([posts, albums, todos]) => {
            usersCard.innerHTML += `
         <div class="w-full bg-white rounded-lg p-6 border-[1px] border-gray-200">
                    <div class="flex items-center  justify-center flex-col">
                        <div class="flex w-15 h-15 text-[22px] size-full items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white"">
                                    ${el.name[0]}
                        </div>
                        <div class=" flex pt-[10px] flex-col items-center">
                            <h1>${el.name}</h1>
                            <p>@${el.username}</p>
                        </div>
                    </div>
                    <hr class="border-gray-200 mt-[20px]">
                    <div class="bg-gray-100 rounded-lg mt-[40px]">
                        <div class="flex items-center  py-4 justify-between px-2 lg:px-10">
                            <div class="flex flex-col items-center">
                                <p>${posts.length}</p>
                                <p class="text-gray-400">Posts</p>
                            </div>
                            <div class="flex flex-col items-center">
                                <p>${albums.length}</p>
                                <p class="text-gray-400">Albums</p>
                            </div>
                            <div class="flex flex-col items-center">
                                <p>${todos.length}</p>
                                <p class="text-gray-400">Tasks</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2 mt-[20px]">
                        <div class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-mail h-4 w-4 flex-shrink-0"
                                aria-hidden="true">
                                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                            </svg>
                            <span class="truncate">${el.email}</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-phone h-4 w-4 flex-shrink-0"
                                aria-hidden="true">
                                <path
                                    d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
                                </path>
                            </svg>
                            <span>${el.phone}</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-globe h-4 w-4 flex-shrink-0"
                                aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                <path d="M2 12h20"></path>
                            </svg>
                            <span>${el.website}</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-map-pin h-4 w-4 flex-shrink-0"
                                aria-hidden="true">
                                <path
                                    d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                                </path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>${el.address.city}</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-building2 lucide-building-2 h-4 w-4 flex-shrink-0"
                                aria-hidden="true">
                                <path d="M10 12h4"></path>
                                <path d="M10 8h4"></path>
                                <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                                <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2">
                                </path>
                                <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                            </svg>
                            <span class="truncate">${el.company.name}</span>
                        </div>
                    </div>
                    <div class="p-3 bg-indigo-50 rounded-lg mt-[20px]">
                        <p class="text-indigo-900 italic">"${el.company.catchPhrase}"</p>
                    </div>
                    <div class="flex gap-2 pt-2 mt-[15px]">
                    <a href="./single.html?id=${el.id}" 
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none bg-[black] text-[white] disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3 flex-1">View
                            Profile</a>
                            <button data-slot="button"
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9 rounded-md"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-message-circle h-4 w-4" aria-hidden="true">
                                <path
                                    d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719">
                                </path>
                            </svg></button></div>
                </div>
        `
        })

    })
})

