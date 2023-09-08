<template>

    <div dir="rtl">
        <nav class=" flex items-center place-content-between px-4 md:px-9 lg:px-0 lg:justify-around md:text-center py-3 shadow">
                    
                    <div class="hidden lg:flex gap-x-3">
                        <div>
                            <button style="background-color: #5165FD; color:#FFFFFF;" class="flex font-normal px-11 text-lg py-2 rounded-sm">تطوع معنا</button>
                        </div>
                        <router-link to="/search">
                            <div class="flex py-2 w-60" style="background-color: #EEEEEE;" >
                                <img src="../assets/search.png" alt="" class="absolute pr-2"> 
                                <input type="text"  class="w-48 rounded-sm pr-10 outline-none " style="background-color: #EEEEEE;" placeholder="بحث">
                            </div>
                        </router-link>
                    </div>
                    
                    
                    <li class="hidden  lg:flex list-none gap-x-20">
                        <div>
                            <router-link to="/" class="text-xl">الرئيسية</router-link>
                            <!-- <a href="index.html" class="text-xl">الرئيسية</a> -->
                        </div>
                        <div>
                            <router-link to="/about" class="text-xl">من نحن</router-link>
                            <!-- <a href="about us.html" class="text-xl">من نحن</a> -->
                        </div>
                        <div>
                            <router-link to="/contactus" class="text-xl">راسلنا</router-link>
                            <!-- <a href="contact us.html" class="text-xl">راسلنا</a> -->
                        </div>
                    </li>
                    
                    
                    <button class="lg:hidden" @click="toggleMenu">
                        <img src="../assets/menu1.png" alt="" class="h-11 w-12 ">
                    </button> 
                    
                    <div>
                        <img src="../assets/الجريدة1.png" alt="" class="">
                    </div> 
                    
        </nav>   
        <div v-if="menuItems" class="flex flex-col lg:hidden bg-white absolute w-full pr-6 gap-y-8 pb-10 z-50">
                    
                        <router-link to="/" class="text-xl">الرئيسية</router-link>
                        <router-link to="/about" class="text-xl">من نحن</router-link>
                        <router-link to="/contactus" class="text-xl">راسلنا</router-link>
                        <div>
                            <button style="background-color: #5165FD; color:#FFFFFF;" class="flex font-normal px-11 text-lg py-2 rounded-sm">تطوع معنا</button>
                        </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            menuItems:false
        }
    },
    methods: {
        toggleMenu()
        {
            this.menuItems=!this.menuItems
        }
    },
}
</script>


<style>
</style>