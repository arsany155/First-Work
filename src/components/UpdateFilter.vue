<template>
        <aside class="hidden lg:flex md:flex-col">
            <p class="text-3xl xl:text-4xl">الأقسام</p>
            <hr class="border-t-2 border-yellow-300 w-14 lg:w-16 mx-auto md:mx-0 lg:-mr-4"/>
            <div class="flex flex-col text-xl gap-y-7 mt-7 xl:text-2xl ">
                <buttom class="m" @click="UpdateFilter('الأدب')" >أدب</buttom>
                <buttom class="m" @click="UpdateFilter('فلسفه')">فلسفة</buttom>
                <buttom class="m" @click="UpdateFilter('تاريخ')">تاريخ</buttom>
                <buttom class="m" @click="UpdateFilter('لغة')">لغة</buttom>
                <buttom class="m" @click="UpdateFilter('موسيقي')">موسيقي</buttom>
                <buttom class="m" @click="UpdateFilter('فن')">فن</buttom>
            </div>
        </aside>


            <swiper class="lg:hidden flex text-xl mt-7 px-2" :slides-per-view="3"
                    :space-between="10"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange">

                    <swiper-slide class="c rounded-sm flex justify-center " @click="UpdateFilter('فن')" >فن</swiper-slide>

                    <swiper-slide class="c rounded-sm flex justify-center " @click="UpdateFilter('موسيقي')">موسيقي</swiper-slide>

                    <swiper-slide class="c rounded-sm flex justify-center " @click="UpdateFilter('لغة')">لغة</swiper-slide>

                    <swiper-slide class="c rounded-sm flex justify-center " @click="UpdateFilter('فلسفه')" >فلسفة</swiper-slide>

                    <swiper-slide class="c rounded-sm flex justify-center " @click="UpdateFilter('الأدب')">أدب</swiper-slide>

                    <swiper-slide class="c rounded-sm flex justify-center " @click="UpdateFilter('تاريخ')">تاريخ</swiper-slide>

                    <swiper-slide class="c rounded-sm flex justify-center " @click="UpdateFilter('الكل')">الكل</swiper-slide>
            </swiper>

</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
export default {
    
    name:'UpdateFilter',
    methods: {  
        UpdateFilter(by){
            this.$emit('filterchange' , by)
        }
    },

    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
}
</script>

<style>
.m{
    cursor: pointer;
}
.c {
    background-color: #eeeeee;
    padding: 9px 25px;
}
.c:hover {
    background-color: white;
    color: #fece2f;
    border: 1px solid #fece2f;
}
</style>