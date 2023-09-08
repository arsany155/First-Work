<template>
                <div class="pb-8">
                    <div class="flex gap-x-2 md:gap-x-9 lg:gap-x-7 mt-8 md:mt-0 px-3 md:px-0">
                            <router-link :to="{name:'artical' , params:{id: post.id}}">
                                <img :src="post.uri" alt="" class="v md:h-56 md:w-96 lg:h-64 lg:w-96 xl:h-auto xl:w-auto" />
                            </router-link>
                        <div class="flex flex-col place-content-between">
                            <div class="flex items-center gap-x-1 md:gap-x-3">
                                <hr class="flex md:w-6 w-3" style="color: #d1d1d1; border-bottom: 1px solid"/>
                                <small style="color: #38383880">{{ post.createdby }}</small>
                            </div>
                            <p class="text-sm md:text-3xl lg:text-4xl" style="color: #383838">{{ post.title }}</p>
                            <p style="color: #38383880" class="md:w-11/12 text-xs md:text-base xl:text-lg">{{ post.body }}</p>
                            <div class="flex gap-x-1" style="color: #38383880">
                                <small>{{ post.date }}</small>
                                <small> 5 دقائق قراءة</small>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script>
export default{
    props:['post'],
    mounted() {
        fetch('http://localhost:3000/TheNewestArticales')
            .then(res => res.json())
            .then(data => {
                this.post = data;
                return fetch('http://localhost:3000/TheMostReadArticales');
            })
            .then(res => res.json())
            .then(data => this.ReadPost = data)
            .catch(err => console.log(err));
        }
}


</script>


<style>
@media (min-width: 320px) and (max-width: 374px) {
.v {
    height: 102px;
    width: 137px;
}
}

@media (min-width: 375px) and (max-width: 424px) {
.v {
    height: 105px;
    width: 160px;
}
}

@media (min-width: 425px) and (max-width: 767px) {
.v {
    height: 112px;
    width: 185px;
}
}
</style>