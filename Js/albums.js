let albumsCard = document.getElementById("albums-card")
fetch(`https://jsonplaceholder.typicode.com/albums`)
    .then((res) => res.json())
    .then((data) => {
        data.map((el) => {
            albumsCard.innerHTML += `
           <div
                    class="bg-[white] gorup max-w-[400px] cursor-pointer w-full rounded-xl border-[1px] border-gray-300 overflow-hidden">
                    <div class="flex items-center">
                        <img class="w-[200px] h-[150px]" src="https://picsum.photos/500?random=${Math.random()}" alt="img">
                        <img class="w-[200px] h-[150px]" src="https://picsum.photos/500?random=${Math.random()}" alt="">
                    </div>
                    <div class="flex items-center">
                        <img class="w-[200px] gorup-hover:scale-110 h-[150px]" src="https://picsum.photos/500?random=${Math.random()}"
                            alt="img">
                        <img class="w-[200px] h-[150px]" src="https://picsum.photos/500?random=${Math.random()}" alt="">
                    </div>
                    <div class="p-6 mt-[20px] ">
                        <h1 class="gorup-hover:text-[blue]">${el.title}</h1>
                        <div class="flex items-center justify-between mt-[15px]">
                            <div class="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-image h-4 w-4" aria-hidden="true">
                                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                                    <circle cx="9" cy="9" r="2"></circle>
                                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                                </svg>
                                <p>50 photos</p>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-arrow-right h-5 w-5 text-indigo-600 transform group-hover:translate-x-1 transition-transform"
                                    aria-hidden="true">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
        `
        })
    })