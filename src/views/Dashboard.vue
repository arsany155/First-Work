<template>
    <div class="w-screen h-screen flex ">

        <div class="w-[400px] bg-gray-900 h-full">
            <!-- header -->
            <div class=" bg-gray-900 flex justify-center items-center pt-12 text-white">
                <h3 class="text-2xl font-semibold">Admin Dashboard</h3>
            </div>

            <!-- menu -->
            <div class=" flex-col  flex gap-y-6 pt-14 text-xl text-gray-500">

                <router-link to="/HomeDashboard" class="flex items-center px-8 py-3 border-gray-500 border-l-4" exact-active-class="bg-gray-600 bg-opacity-30 text-white border-white" >
                    <svg class="w-7 h-7" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z" fill="currentColor"/>
                        <path d="M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z" fill="currentColor"/>
                    </svg>
                    <span >Dashboard</span>
                </router-link>

                <router-link to="/profile" class="flex items-center px-8 py-3 border-gray-500 border-l-4"   exact-active-class="bg-gray-600 bg-opacity-30 text-white border-white" >
                    <svg class="w-7 h-7" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 3C3.89543 3 3 3.89543 3 5V7C3 8.10457 3.89543 9 5 9H7C8.10457 9 9 8.10457 9 7V5C9 3.89543 8.10457 3 7 3H5Z" fill="currentColor" />
                        <path d="M5 11C3.89543 11 3 11.8954 3 13V15C3 16.1046 3.89543 17 5 17H7C8.10457 17 9 16.1046 9 15V13C9 11.8954 8.10457 11 7 11H5Z" fill="currentColor" />
                        <path d="M11 5C11 3.89543 11.8954 3 13 3H15C16.1046 3 17 3.89543 17 5V7C17 8.10457 16.1046 9 15 9H13C11.8954 9 11 8.10457 11 7V5Z" fill="currentColor" />
                        <path d="M11 13C11 11.8954 11.8954 11 13 11H15C16.1046 11 17 11.8954 17 13V15C17 16.1046 16.1046 17 15 17H13C11.8954 17 11 16.1046 11 15V13Z" fill="currentColor"/>
                    </svg>
                    <span>UI Elements</span>
                </router-link>

                <router-link to="/Tables" class="flex items-center px-8 py-3 border-gray-500 border-l-4"  exact-active-class="bg-gray-600 bg-opacity-30 text-white border-white" >
                    <svg class="w-7 h-7" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 3C6.44772 3 6 3.44772 6 4C6 4.55228 6.44772 5 7 5H13C13.5523 5 14 4.55228 14 4C14 3.44772 13.5523 3 13 3H7Z" fill="currentColor"/>
                        <path d="M4 7C4 6.44772 4.44772 6 5 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H5C4.44772 8 4 7.55228 4 7Z" fill="currentColor" />
                        <path d="M2 11C2 9.89543 2.89543 9 4 9H16C17.1046 9 18 9.89543 18 11V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V11Z" fill="currentColor"/>
                    </svg>
                    <span>Tables</span>
                </router-link> 

            </div>

        </div>


        <div class="w-full h-full  ">
            <!-- header -->
            <div class="h-[70px] bg-white flex items-center justify-between text-black px-[30px] border-b-4 border-indigo-600">
                <div>
                    <button class="text-gray-500">
                        <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>

                <div class="flex items-center relative"> 
                    <span class="pl-3 absolute">
                        <svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <input class="w-64 pl-10 py-2 text-indigo-600 border border-gray-200 rounded-md sm:w-64 focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500" type="text" placeholder="Search">
                </div>

                <div class="flex items-center">
                    <div>
                        <button class="flex mx-4 text-gray-600 focus:outline-none">
                            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <button class="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none">
                            <img class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80" alt="Your avatar">
                        </button>
                    </div>
                </div>
            </div>

                <!-- main -->
            <div class="h-[calc(100vh-70px)] bg-gray-200 p-[20px] ">
                <div class="border  p-[20px] h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
                    <router-view></router-view>
                </div>
            </div>

        </div>
    </div>
</template>




