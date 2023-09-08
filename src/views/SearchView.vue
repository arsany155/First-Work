<template>
        <NavBar/>

    <div dir="rtl">
        <section class="lg:flex lg:gap-9 xl:gap-32 md:px-7 xl:px-14 lg:mt-36">
            <UpdateFilter @filterchange="current =$event"/>

            <div class="hidden lg:flex border-r-2 lg:mt-2" style="height: 370px"></div>

            <div class="flex flex-col md:gap-y-12 lg:-my-20 mt-12 md:mt-16">
                <div class="px-4 md:px-0">
                    <p class="text-xl md:text-4xl" style="color: #383838"> نتائج البحث عن : قرائة</p>
                </div>

                <div v-if="Posts.length">
                    <div v-for="post in filteredProjects" :key="post.id">
                        <serachResult :post="post"/>
                    </div>
                </div>
                <div v-else>
                    <p>Not Found</p>
                </div>
            </div>
        </section>
    </div>

    <Footer/>

</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import UpdateFilter from '@/components/UpdateFilter.vue'
import serachResult from '@/components/serachResult.vue'

export default {
    name: 'HomeView',
    components: {
        NavBar,
        Footer,
        UpdateFilter,
        serachResult
    },
    data(){
        return{
            Posts:[],
            ReadPosts:[],
            current:'all'
        }
    }, 
    computed:{
    filteredProjects() {
    const combinedPosts = [...this.Posts, ...this.ReadPosts];

    if (this.current === 'الأدب') {
        return combinedPosts.filter(post => post.type === 'الأدب');
        }
        if (this.current === 'فلسفه') {
        return combinedPosts.filter(post => post.type === 'فلسفه');
        }
        if (this.current === 'تاريخ') {
        return combinedPosts.filter(post => post.type === 'تاريخ');
        }
        if (this.current === 'لغة') {
        return combinedPosts.filter(post => post.type === 'لغة');
        }
        if (this.current === 'موسيقي') {
        return combinedPosts.filter(post => post.type === 'موسيقي');
        }
        if (this.current === 'فن') {
        return combinedPosts.filter(post => post.type === 'فن');
        }

        return combinedPosts;
    },
},

mounted() {
    fetch('http://localhost:3000/TheNewestArticales')
        .then(res => res.json())
        .then(data => {
            this.Posts = data;
            return fetch('http://localhost:3000/TheMostReadArticales');
        })
        .then(res => res.json())
        .then(data => this.ReadPosts = data)
        .catch(err => console.log(err));
    }
}
</script>

<style>


</style>
