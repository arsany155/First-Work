<template>
                <div>
                    <div class="flex flex-col lg:flex-row gap-y-2 md:gap-y-3 lg:gap-x-9 mt-8 md:mt-0 md:pb-14 lg:mt-0 lg:pb-16 px-6 md:px-5">
                        <router-link :to="{name:'artical' , params:{id: post.id}}">
                            <img :src="post.uri" alt="" class="v md:h-56 md:w-96 lg:h-48 lg:w-96 xl:h-auto xl:w-auto" />
                        </router-link>
                        <div class="flex flex-col place-content-between gap-y-1 md:gap-y-2">
                            <div class="flex items-center gap-x-1 md:gap-x-3">
                                <hr class="flex md:w-6 w-3" style="color: #d1d1d1; border-bottom: 1px solid"/>
                                <small style="color: #38383880">{{ post.createdby }}</small>
                            </div>
                            <p class="text-sm md:text-3xl lg:text-4xl" style="color: #383838">{{ post.title }}</p>
                            <p style="color: #38383880" class=" text-xs md:text-base xl:text-lg">{{ snippt }}</p>
                            <div class="flex gap-x-1" style="color: #38383880">
                                <small>{{ post.date }}</small>
                                <small> 5 دقائق قراءة</small>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script>
import {computed } from 'vue'
export default{
    props:['post'],

    setup(props){
        const snippt = computed (() =>{ return props.post.body.substring(0,100)+ '....'})
        return { snippt }
    }
}


</script>


<style>
@media (min-width: 320px) and (max-width: 374px) {
.v {
    height: 102px;
    width: 165px;
}
}

@media (min-width: 375px) and (max-width: 424px) {
.v {
    height: 135px;
    width: 220px;
}
}

@media (min-width: 425px) and (max-width: 767px) {
.v {
    height: 112px;
    width: 185px;
}
}
</style>