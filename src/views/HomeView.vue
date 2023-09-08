<template>

    <NavBar/>

    <div dir="rtl">
        <router-link to="/search">
            <div class="flex lg:hidden py-2 mt-7 mx-5 w-auto md:w-5/6 md:mx-auto" style="background-color: #EEEEEE;" >
                <img src="../assets/search.png" alt="" class="absolute pr-2"> 
                <input type="text"  class="w-64 rounded-sm pr-10 outline-none " style="background-color: #EEEEEE;" placeholder="بحث">
            </div>
        </router-link>
        
        
        <section class="flex flex-col-reverse lg:flex-row md:mx-5 lg:mx-16 md:mt-16 mt-7 md:gap-x-4 lg:gap-x-6">
        
            <div v-if="ReadPosts.length > 0" class="flex lg:flex-col  lg:space-y-4 mx-4 lg:mx-0 gap-x-3 md:gap-x-0 mt-12 lg:-mt-0 xl:-mt-0 md:justify-around lg:justify-start ">
                <div>
                    <router-link :to="{name:'artical' , params:{id : ReadPosts[0].id}}">
                        <img :src="ReadPosts[0].uri"  alt=""  class="x">
                    </router-link>
                    <div class="md:flex-col flex xl:flex-row xl:place-content-between mt-1 lg:mt-2 lg:text-base"> 
                        <div class="hidden lg:flex ">
                            <small style="color: #38383880;">{{ ReadPosts[0].date }}</small>
                            <small style="color: #38383880;"> 5 دقائق قراءة</small>
                        </div>
                        <small style="color: #38383880;">{{ ReadPosts[0].createdby }}</small>
                    </div>
                    <div>
                        <p style="color: #383838;" class="text-sm font-medium mt-1">{{ ReadPosts[0].title }}</p>
                    </div>
                </div>
        
                <div>
                    <router-link :to="{name:'artical' , params:{id : ReadPosts[1].id}}">
                        <img :src="ReadPosts[1].uri" alt="" class="xx">
                    </router-link>
                    <div class="md:flex-col flex xl:flex-row  xl:place-content-between lg:mt-2 text-base">
                        <div class="hidden lg:flex">
                            <small style="color: #38383880;"> {{ ReadPosts[1].date }}</small>
                            <small style="color: #38383880;"> 5 دقائق قراءة</small>
                        </div>
                        <small style="color: #38383880;">{{ ReadPosts[1].createdby }}</small>
                    </div>
                    <div>
                        <p style="color: #383838;" class="text-sm font-medium mt-1">{{ ReadPosts[1].title }}</p>
                    </div>
                </div>
            </div>
            
            <div class="hidden lg:flex border-r-2 md:-mt-7 lg:-mt-0 " style="height: 650px;"></div>
        
            <div v-if="Posts.length > 0" class="flex flex-col md:-mt-7 lg:-mt-0 px-3">
                <router-link :to="{name:'artical' , params:{id:Posts[0].id}}">
                    <img :src="Posts[0].uri" class="omo">
                </router-link>
                <div class="flex justify-between md:mt-2 text-base ">
                    <div>
                        <small style="color: #38383880;">{{ Posts[0].date }}</small>
                        <small style="color: #38383880;"> 5 دقائق قراءة</small>
                    </div>
                    <small style="color: #38383880;">{{ Posts[0].createdby }}</small>
                </div>
                <div>
                    <p style="color: #383838;" class="text-2xl md:text-4xl mt-1">{{ Posts[0].title }}</p>
                </div>
            </div>
        
        </section>
        
        
        <div class="flex justify-center mt-20">
            <p class="absolute md:text-5xl text-3xl color z-50">الأقسام</p>
            <div class=" flex justify-center mt-7 mr-8">
                <img src="../assets/Group39478.png" alt="">
            </div>
        </div> 
        
                
        <swiper class="mx-3 mt-8" :slides-per-view="isMobile ? 2 : 4" :spaceBetween="20" :slidesPerGroup="1"  :modules="modules" @swiper="onSwiper"  @slideChange="onSlideChange" navigation>
        
            <swiper-slide v-for="Type in Types" :key="Type.id" class="relative">
                    <router-link :to="{name:'ArticalType'}">
                        <div class="flex flex-col items-center" >
                            <img :src="Type.img"  class="brightness-50 lg:w-11/12">
                            <p class="-translate-x-1/2 -translate-y-1/2 absolute top-2/4 left-2/4 text-white md:text-2xl font-semibold">{{ Type.type }}</p>   
                        </div>   
                    </router-link>       
            </swiper-slide>
        
        </swiper>
        
        
        <div class="flex place-content-between px-3 md:px-16 md:mt-28 mt-24 items-center">
            <p class="md:text-5xl text-2xl "> أحدث <span class="color">المقالات</span></p>
            <router-link :to="{name:'TheNewest'}" style="color: #5165FD;" class="text-lg md:text-2xl ">عرض الجميع</router-link>
        </div>
        
        
        <section v-if="Posts.length > 0"  class="md:mt-14 mt-8 space-y-14 lg:mx-7 md:mx-5">
        
            <div class="flex flex-col md:flex-row">
        
                <img :src="Posts[1].uri"  class="lol mx-auto md:mx-0 md:h-52 lg:h-80 xl:h-96">
        
                <div class=" mt-3 mx-auto md:mr-5 lg:mr-0 md:mx-0 md:mt-0 lg:px-12 flex flex-col justify-between">
        
                    <small style="color: #38383880;" class="lg:text-base">{{ Posts[1].createdby }}</small>
        
                    <div class="space-y-3  lg:space-y-9">
                        <p class="text-lg md:text-2xl lg:text-4xl">{{ Posts[1].title }}</p>
                        <p style="color: #38383880;" class="text-sm lg:text-base xl:text-lg pp">{{ Posts[1].body }}</p>
                        <!-- <router-link :to="{name:'artical' , params:{id: Posts[1].id}}" style="color: #5165FD;" class="text-sm" >أقرأ المزيد</router-link>  -->
                    </div>
        
                    <div>
                        <small style="color: #38383880;" class="lg:text-base">{{ Posts[1].date }}</small>
                        <small style="color: #38383880;" class="lg:text-base"> 5 دقائق قراءة</small>
                    </div> 
        
                </div> 
        
            </div>

            <div class="flex flex-col md:flex-row">
        
                <img :src="Posts[2].uri"  class="lol mx-auto md:mx-0 md:h-52 lg:h-80 xl:h-96">
        
                <div class=" mt-3 mx-auto md:mr-5 lg:mr-0 md:mx-0 md:mt-0 lg:px-12 flex flex-col justify-between">
        
                    <small style="color: #38383880;" class="lg:text-base">{{ Posts[2].createdby }}</small>
        
                    <div class="space-y-3  lg:space-y-9">
                        <p class="text-lg md:text-2xl lg:text-4xl">{{ Posts[2].title }}</p>
                        <p style="color: #38383880;" class="text-sm lg:text-base xl:text-lg pp">{{ Posts[2].body }}</p>
                        <!-- <router-link :to="{name:'artical' , params:{id: Posts[2].id}}" style="color: #5165FD;" class="text-sm" >أقرأ المزيد</router-link>  -->
                    </div>
        
                    <div>
                        <small style="color: #38383880;" class="lg:text-base">{{ Posts[2].date }}</small>
                        <small style="color: #38383880;" class="lg:text-base"> 5 دقائق قراءة</small>
                    </div> 
        
                </div> 
        
            </div>
        
            
        
        
        
        
        </section>
        
        
        <div class="flex place-content-between px-3 md:px-16 md:mt-28 mt-24 items-center">
            <p class="md:text-5xl text-2xl "> الأكثر <span class="color"> قراءة</span></p>
            <router-link :to="{name:'MostRead'}" style="color: #5165FD;" class="text-lg md:text-2xl ">عرض الجميع</router-link>
        </div>
        
        
        <section v-if="ReadPosts.length > 0" class="flex overflow-hidden px-3 gap-x-3 mt-7 lg:px-0 lg:justify-around ">
        
            <div class="flex flex-col ">
                <img :src="ReadPosts[0].uri" alt="" class=""> 
                <div class="flex place-content-between lg:mt-2 text-base"> 
                    <div class="hidden lg:flex ">
                        <small style="color: #38383880;" >{{ ReadPosts[0].date }}</small>
                        <small style="color: #38383880;"> 5 دقائق قراءة</small>
                    </div>
                    <small style="color: #38383880;">{{ ReadPosts[0].createdby }}</small>
                </div>
                <div>
                    <p style="color: #383838;" class="text-sm font-medium mt-1">{{ ReadPosts[0].title }}</p>
                </div>
            </div>
            <div class="flex flex-col ">
                <img :src="ReadPosts[1].uri" alt="" class=""> 
                <div class="flex place-content-between lg:mt-2 text-base"> 
                    <div class="hidden lg:flex ">
                        <small style="color: #38383880;" >{{ ReadPosts[1].date }}</small>
                        <small style="color: #38383880;"> 5 دقائق قراءة</small>
                    </div>
                    <small style="color: #38383880;">{{ ReadPosts[1].createdby }}</small>
                </div>
                <div>
                    <p style="color: #383838;" class="text-sm font-medium mt-1">{{ ReadPosts[1].title }}</p>
                </div>
            </div>
            <div class="flex flex-col ">
                <img :src="ReadPosts[2].uri" alt="" class=""> 
                <div class="flex place-content-between lg:mt-2 text-base"> 
                    <div class="hidden lg:flex ">
                        <small style="color: #38383880;" >{{ ReadPosts[2].date }}</small>
                        <small style="color: #38383880;"> 5 دقائق قراءة</small>
                    </div>
                    <small style="color: #38383880;">{{ ReadPosts[2].createdby }}</small>
                </div>
                <div>
                    <p style="color: #383838;" class="text-sm font-medium mt-1">{{ ReadPosts[2].title }}</p>
                </div>
            </div>
        
        
        </section>
        
        
        <div class="mx-auto">
            
                <section style="border: 1px solid #00000020; border-left: transparent;border-right: transparent; height: 300px; margin-top: 80px; width: 90%; margin-left: auto; margin-right: auto; display: flex; flex-direction: column; text-align: center; justify-content: center; align-items: center; row-gap: 30px;">
            
                    <div class="text-2xl md:text-4xl">اشترك ليصلك جميع المقالات</div>
                    <div style="color: #383838CC;">ابقي علي اطلاع مع مقالتنا فور نزولها مع خدمة الرسائل البريدية هذه الخدمة مجانية تماماً</div>
                    <div  class="rounded-sm flex ">
                        <button style="background-color: #5165FD; color: #FFFFFF;" class="px-7 md:px-11 font-semibold ">أشترك</button>
                        <input type="email" placeholder="البريد الإلكتروني" class="rounded-sm px-2 py-2 md:px-4 md:py-4" style=" border: 1px solid #00000033; width: 50vw;" v-model="email">
                    </div>
                </section>
        </div >
        
    </div>
    <Footer/>

</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default {
    name: 'HomeView',
    components: {
        NavBar,
        Footer,
        Swiper,
        SwiperSlide
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
            modules: [Navigation],
        };
    },
    data() {
        return {
            email:'',
            Posts:[],
            ReadPosts:[],
            Types:[],
            isMobile: false,
        }   
    },
    mounted() {
        if (window.innerWidth < 768) {
        this.isMobile = true;
    }
    fetch('http://localhost:3000/TheNewestArticales')
        .then(res => res.json())
        .then(data => {
            this.Posts = data;
            return fetch('http://localhost:3000/TheMostReadArticales');
        })
        .then(res => res.json())
        .then(data => {
            this.ReadPosts = data;
            return fetch('http://localhost:3000/Types');
    })
        .then(res => res.json())
        .then(data =>this.Types = data )
        .catch(err => console.log(err));
    }, 
}
</script>

<style>
    @media (min-width: 320px) and (max-width: 374px ) {
                .x {
                height: 100px;
                width:218px;
                }
                .xx {
                height: 100px;
                width: 225px;   
                }
                .pp{
                width: 240px;
                }
                .lol{
                    height: 160px;
                }
                
            }
            @media (min-width: 1024px) and (max-width: 1439px) {
                .pp {
                width: 370px;
                }
            }   

        @media (min-width: 768px) and (max-width: 1023px) {
                .x {
                height: 150px;
                width: 275px;
                }
                .xx {
                height: 150px;
                width: 285px;   
                }
            }     

        @media (min-width: 320px) and (max-width: 374px) {
                .omo {
                    height: 200px; 
                    width: auto;
                }
            }  
        @media (min-width: 375px) and (max-width: 424px) {
                .omo {
                    height: 220px; 
                    width: auto;
                }
            }  
        @media (min-width: 425px) and (max-width: 767px) {
                .omo {
                    height: 250px; 
                    width: auto;
                }
            }  
        @media (min-width: 768px) {
                .omo {
                    height: 550px; 
                    width: auto;
                }
            }  


            
            .color {
                background:linear-gradient(90deg,#5367FF,#E553FF);
                background-clip: text; 
                -webkit-text-fill-color: transparent;
            } 
        

        @media (min-width: 375px) and (max-width: 424px){
            .pp{
                width: 320px;
            }
            .lol{
                height: 180px;
            }
        } 

        @media (min-width: 425px) and (max-width: 767px){
            .pp{
                width: 320px;
            }
            .lol{
                height: 190px;
            }
        } 

        .image-list {
            max-width: 100%;
            /* overflow: hidden; */
        }

        @media (max-width: 767px) {
            .image-container:not(:first-child) {
                display:none; 
                /* overflow: hidden; */
            }
        }
</style>
