<template>
    <NavBar/>

    <div dir="rtl">
        <div v-for="post in Posts" :key="post.id">
            <div class="flex flex-col md:flex-row mt-10 lg:px-8">
                
                <img :src="post.uri"  class="lol mx-auto md:mx-0 md:h-52 lg:h-80 xl:h-96">
            
                <div class=" mt-3 mx-auto md:mr-5 lg:mr-0 md:mx-0 md:mt-0 lg:px-12 flex flex-col justify-between">
            
                    <small style="color: #38383880;" class="lg:text-base">{{ post.createdby }}</small>
            
                    <div class="space-y-3  lg:space-y-9">
                        <p class="text-lg md:text-2xl lg:text-4xl">{{ post.title }}</p>
                        <p style="color: #38383880;" class="text-sm lg:text-base xl:text-lg pp">{{ post.body }}</p>
                        <!-- <router-link :to="{name:'artical' , params:{id: Posts[1].id}}" style="color: #5165FD;" class="text-sm" >أقرأ المزيد</router-link>  -->
                    </div>
            
                    <div>
                        <small style="color: #38383880;" class="lg:text-base">{{ post.date }}</small>
                        <small style="color: #38383880;" class="lg:text-base"> 5 دقائق قراءة</small>
                    </div> 
            
                </div> 
            </div>
        </div>
    </div>
    <Footer/>
</template>


<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'HomeView',
    components: {
        NavBar,
        Footer
    },

    data() {
        return {
            Posts:[]
        }
    },

    mounted() {
    fetch('http://localhost:3000/TheNewestArticales')
        .then(res => res.json())
        .then(data =>this.Posts = data)
        .catch(err => console.log(err))
    }
}
</script>