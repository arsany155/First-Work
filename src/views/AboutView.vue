<template>

<NavBar/>

    <div dir="rtl">
        <div class=" grid grid-cols-1 md:grid-cols-2 mt-7 md:pl-10 xl:pl-20 ">
            
            <div class="text-5xl lg:text-8xl xl:text-9xl md:text-7xl text-center md:text-left mx-auto 2xl:ml-12 ">
                <p class=" pb-6 md:pb-12">لمحة عن</p>
                <span class="" style=" background:linear-gradient(90deg,#5367FF,#E553FF);-webkit-background-clip: text; -webkit-text-fill-color: transparent;">قُرَّاءْ</span>
            </div>
        
        
            <div class="mt-7 md:mt-0">
                <img src="../assets/الجريدة2.png" alt="" class="mx-auto">
                <p id="app" style="color: #383838B2;" class="text-xs leading-6 md:leading-7 lg:leading-normal md:text-base w-11/12 2xl:w-4/5 mx-auto">تقدم قُرَّاءْ تدريبات أكاديمية وتخصصية ومهارية لكل لجنة خاصة بوظيفتها. مثال: لجنة الإعلام يأخذ الشخص المُنضم حديثاً للجنة تدريبات في المجال الإعلامي، ولجنة الإعلام لها أقسام وهى: - التصميم - التسويق - التصوير - فحسب اختياره للقسم الذي يريد التدريب فيه يأخذ تدريبات أكاديمية، وعملية داخله، ليكون قادراً على تأدية المهام الخاصة بهذا القسم، وهكذا في باقي اللجان.</p>
            </div>
        
        
        </div>
        
        <div class="mt-14 lg:mt-20">
            <img src="../assets/Rectangle647.png" alt="" class="mx-auto px-4 lg:px-0" >
        </div>
        
        <div class=" grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 mt-20 px-7 lg:px-16">   
        
            <div class="2xl:w-4/5 mx-auto md:w-3/4">
                <p class="text-2xl text-center md:text-right">اهدفنا</p>
                <hr class="border-t-2 border-yellow-300 w-14 mx-auto md:mx-0">
                <p style="color: #383838;" class="text-sm md:text-base lg:text-lg mt-3 md:mt-0 leading-6 md:leading-6 lg:leading-normal">تحقيق التنمية الثقافية واالجتماعية كجزء من التنمية المستدامة. ممارسة اللغة العربية الفصيحة من خالل ورش اللغة. لقاءات مع نماذج مشرفة وإبراز دورهم في المجتمع.</p>
            </div>
        
            <div class="2xl:w-4/5 mx-auto md:w-3/4 mt-4 md:mt-0">
                <p class="text-2xl text-center md:text-right">رؤيتنا</p>
                <hr class="border-t-2 border-yellow-300 w-14 mx-auto md:mx-0">
                <p style="color: #383838;" class="text-sm md:text-base lg:text-lg mt-3  md:mt-0 leading-6 md:leading-6 lg:leading-normal">نطمح إلى تشجيع ثقافة القراءة وإثراء المعرفة في المجتمع العربي. نسعى لأن نصبح المصدر الرئيسي والموجه لكل محبي القراءة في العالم العربي، ونسهم في بناء جيل قارئ مثقف ومبدع. </p>
            </div>
        
        </div>
        
        <div class="text-center mt-24 text-3xl md:text-5xl">
            <p>شركاء<span style="background:linear-gradient(90deg,#5367FF,#E553FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"> النجاح</span></p>
        </div>
        
        <div class=" w-11/12 py-16 mx-auto mt-12" style="background-color: #D9D9D91F;">
        
            <div class="grid grid-cols-4 ">
        
                <img src="../assets/Component1.png" alt="" class="mx-auto h-10 w-16 md:h-16 md:w-32 lg:h-auto lg:w-auto">
                <img src="../assets/mdarj.png" alt="" class="mx-auto h-14 w-14 md:h-20 md:w-20 lg:h-auto lg:w-auto">
                <img src="../assets/mezza.png" alt="" class="mx-auto h-14 w-14 md:h-20 md:w-20 lg:h-auto lg:w-auto">
                <img src="../assets/arabisk.png" alt="" class="mx-auto h-14 w-14 md:h-20 md:w-20 lg:h-auto lg:w-auto">
            </div>
        
        </div>
        
        <div class="text-center mt-24 text-3xl md:text-5xl">
            <p>فريق <span style="background:linear-gradient(90deg,#5367FF,#E553FF);-webkit-background-clip: text; -webkit-text-fill-color: transparent;"> العمل</span></p>
        </div>
        
        <swiper class="mt-12" :slides-per-view="isMobile ? 2 : 4" :spaceBetween="20" :slidesPerGroup="1"  :modules="modules" @swiper="onSwiper"  @slideChange="onSlideChange" navigation>
        
            <swiper-slide v-for="Team in Teams" :key="Team.id" class="">
                <img :src="Team.img" alt="" class="w-11/12">
                <p style="color: #383838;" class="font-semibold">{{ Team.Name }}</p>
                <small style="color: #383838B2;">{{Team.position}}</small>
            </swiper-slide>
        
        </swiper>   
    </div>

    <Footer/>

</template>

<script>
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

    data() {
        return {
            Teams:[],
            isMobile: false,
        }
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
            modules: [Navigation, Pagination, Scrollbar, A11y],
        };
    },
    
    created() {
    if (window.innerWidth < 768) {
        this.isMobile = true;
    }
    fetch('http://localhost:3000/Teams')
    .then(res => res.json())
    .then(data => {this.Teams = data})
    .catch(err => console.log(err));
    }
};

</script>
