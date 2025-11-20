let path = new URLSearchParams(location.search);
let id = path.get("id")
let singleCard = document.getElementById("single-card")
getData(`users/${id}`, (res) => {
    Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${res?.id}`).then(r => r.json()),
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${res?.id}`).then(r => r.json()),
        fetch(`https://jsonplaceholder.typicode.com/todos?userId=${res?.id}`).then(r => r.json())
    ]).then(([posts, albums, todos]) => {
        singleCard.innerHTML += `
                 <div 
                    class="bg-[white] flex flex-col gap-6 rounded-xl border-0 shadow-sm">
                    <div
                        class="grid  items-start gap-1.5 px-6 pt-6 pb-6">
                        <div class="flex flex-col md:flex-row gap-6 items-start md:items-center"><span
                                data-slot="avatar"
                                class="relative flex size-10 shrink-0 overflow-hidden rounded-full h-24 w-24"><span
                                    data-slot="avatar-fallback"
                                    class="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white text-3xl">${res.name[0]}</span></span>
                            <div class="flex-1 space-y-4">
                                <div>
                                    <h1 class="text-gray-900">${res.name}</h1>
                                    <p class="text-gray-600">@${res.username}</p>
                                </div>
                                <div class="flex gap-6">
                                    <div><span class="text-gray-900">${posts.length}</span><span
                                            class="text-gray-600 ml-1">posts</span></div>
                                    <div><span class="text-gray-900">${albums.length}</span><span
                                            class="text-gray-600 ml-1">albums</span></div>
                                    <div><span class="text-gray-900">${todos.length}</span><span
                                            class="text-gray-600 ml-1">tasks</span></div>
                                </div>
                                <div class="flex gap-2"><button data-slot="button"
                                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-[black] text-[white] text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3">Follow</button><button
                                        data-slot="button"
                                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3">Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-slot="card-content"
                        class="px-6 [&amp;:last-child]:pb-6 space-y-3 border-t border-gray-100 pt-6">
                        <div class="flex items-center gap-3 text-gray-600"><svg xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-mail h-4 w-4" aria-hidden="true">
                                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                            </svg><span>${res.email}</span></div>
                        <div class="flex items-center gap-3 text-gray-600"><svg xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-phone h-4 w-4" aria-hidden="true">
                                <path
                                    d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
                                </path>
                            </svg><span>${res.phone}</span></div>
                        <div class="flex items-center gap-3 text-gray-600"><svg xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-globe h-4 w-4" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                <path d="M2 12h20"></path>
                            </svg><span>${res.website}</span></div>
                        <div class="flex items-center gap-3 text-gray-600"><svg xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-map-pin h-4 w-4" aria-hidden="true">
                                <path
                                    d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                                </path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg><span>${res.address.city}</span></div>
                        <div class="flex items-center gap-3 text-gray-600"><svg xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-building2 lucide-building-2 h-4 w-4" aria-hidden="true">
                                <path d="M10 12h4"></path>
                                <path d="M10 8h4"></path>
                                <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                                <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2">
                                </path>
                                <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                            </svg><span>${res.company.name}</span></div>
                        <div class="p-3 bg-indigo-50 rounded-lg">
                            <p class="text-indigo-900 italic">${res.company.catchPhrase}</p>
                        </div>
                    </div>
                </div>
        `
    })


})