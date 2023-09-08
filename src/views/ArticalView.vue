<template>
    <div dir="rtl">
            <NavBar/>

            <div class="bg-gradient-to-b v  w-full absolute " style="height: 2740px;"></div>

        <div v-if="post">
            <div class="mt-8 lg:mt-32 relative">
                <p class="text-2xl  lg:text-5xl lg:pr-80 text-center lg:text-right" style="color: #383838;">{{ post.title }}</p>
                <hr class="border-t-2 lg:border-t-4 border-yellow-400 w-32 mt-2 lg:w-28 lg:mr-72 lg:mt-4 mx-auto">
                <div class="flex lg:pr-80 items-center place-content-center lg:place-content-start gap-x-2 lg:gap-x-3 lg:mt-4">
                    <small style="color: #38383880;">{{ post.date }}</small>
                    <small style="color: #38383880;">5 دقائق قراءة</small>
                    <hr class="flex md:w-6 w-3 self-end" style="color: #38383880; border-bottom: 1px solid;">
                    <small style="color: #383838CC;">{{ post.createdby }}</small>
                </div>
            </div>
            
            <section class="mt-8 lg:mt-20 px-3 lg:px-0 relative">
                <img :src="post.uri" alt="" class="mx-auto">
                <!-- <p style="color: #383838;" class="lg:w-2/3 text-sm px-2 lg:text-lg mx-auto lg:px-8 mt-8 lg:mt-16 font-semibold"> القراءة هي نافذتنا إلى العالم، إنها رحلة سحرية تأخذنا في استكشاف أفكار الآخرين وتعلم ثقافات جديدة. في العالم العربي، يتمتع الكتاب والأدب بمكانة خاصة، حيث يتميزون بإبداعهم وقدرتهم على صياغة الكلمات بأناقة وجمال. ومن خلال هذا المقال، سنستكشف سحر القراءة في اكتشاف العالم العربي وأهميتها في بناء المعرفة وتعزيز الثقافة.</p> -->
                <div class="lg:w-2/3 mx-auto space-y-12 mt-7">
                    <div style="color: #383838;" class="flex flex-col gap-y-2 md:gap-y-1">
                        <p class="lg:text-lg text-sm lg:px-8 font-semibold ">{{ post.bodyTitle }}</p>
                        <p class="lg:text-base text-sm mx-auto lg:px-8">{{ post.body }}</p>
                    </div>
                    <div class="border-b-2  mx-auto" style="color: #D9DBE9;"></div>
                </div>
            
            </section>
        </div>

        <section class="flex flex-col md:flex-row mt-16 lg:gap-x-20 lg:w-2/3 mx-auto px-4 gap-y-10 md:px-6 relative">
            <div class="flex gap-x-5 items-center">
                <p style="color: #383838;" class="text-xl">هل اعجبك المقال :</p>
                <img src="../assets/Group1.png" alt="" class="w-5 h-5">
                <img src="../assets/like-icon.png" alt="" class="w-5 h-5">
            </div>

            <div class="flex gap-x-5 items-center">
                <p style="color: #383838;" class="text-xl">شارك المقال :</p>
                <img src="../assets/104498_facebook_icon.png" alt="" class="w-5 h-5">
                <img src="../assets/104501_twitter_bird_icon.png" alt="" class="w-5 h-5">
                <img src="../assets/367593_linkedin_business_network_social_icon.png" alt="" class="w-5 h-5">
                <img src="../assets/share1.png" alt="" class="w-5 h-5">
            </div>
        </section>

        <div class=" flex flex-col mt-12 md:w-2/3 mx-auto md:mx-0 lg:mx-auto md:px-6 relative">
            <div class="flex flex-col gap-y-4 mt-5 w-72 mx-auto md:mx-0 md:w-96 ">
                <p class="">أترك تعليقاً:</p>
                <input v-model="comments.name" type="text" placeholder="الأسم" style="background-color: #F6F6F6;" class="h-12 pr-5 rounded-md outline-none">
                <input v-model="comments.email" type="email" placeholder="البريد الإلكتروني" style="background-color: #F6F6F6;" class="pr-5 h-12 rounded-md outline-none">
                <input v-model="comments.comment" type="text" placeholder="التعليق" style="background-color: #F6F6F6;min-height: 150px; white-space: nowrap; overflow: hidden;" class="pb-28 pt-2 pr-5 rounded-md outline-none">
                <div class="">
                    <button @click="submitComment" style="background-color: #5165FD; color:#FFFFFF;" class="mt-4 flex font-normal text-lg py-2 rounded-sm justify-center w-40"> إرسل</button>
                </div>
            </div>
        </div>

        <div class="flex flex-col mt-12 md:w-2/3 mx-auto px-6 relative gap-y-6">

            <div v-for="(comment, index) in visibleComments" :key="index" class="py-10 rounded-lg space-y-3" style="background-color: #F6F6F6;">
                <p class="inline text-xl font-semibold pr-20" style="color: #383838;">{{ comment.name }}</p>
                <div class="px-5 md:px-24 md:text-base">
                    <small style="color: #383838CC;">{{ comment.comment }}</small>
                </div>
            </div>

            <div class="flex justify-center">
                <button @click="toggleCommentsVisibility" style="color: #5165FD; text-decoration: underline;">{{ showAllComments ? 'عرض أقل' : 'عرض المزيد' }}</button>
            </div>
            
        </div>
    </div>
    

        <Footer/>

</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

    export default {
    props:['id'],
    name: 'HomeView',
    components: {
        NavBar,
        Footer
    },
    data() {
        return {
        comments: {
            name: '',
            email: '',
            comment: ''
        },
        commentsList: [],
        showAllComments: false,
        maxVisibleComments: 2,
        post:null,
        ReadPost: null
        }
    },
    computed:{
        visibleComments() {
            return this.showAllComments ? this.commentsList : this.commentsList.slice(0, this.maxVisibleComments);
    }

    },

    methods: {
        submitComment() {
        this.commentsList.push({
            name: this.comments.name,
            email: this.comments.email,
            comment: this.comments.comment
        });

        this.comments.name = '';
        this.comments.email = '';
        this.comments.comment = '';
        },

        toggleCommentsVisibility() {
            this.showAllComments = !this.showAllComments;
        }
    },
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
    .v{
        --tw-gradient-from: #FECE2F15 var(--tw-gradient-from-position);
        --tw-gradient-to: #FECE2F00 var(--tw-gradient-to-position);
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    }
</style>















    <!-- <div class="py-10 rounded-lg space-y-3" style="background-color: #F6F6F6;">
        <img src="../assets/Ellipse144.png" alt="" class="px-6 inline">
        <p class="inline text-xl font-semibold" style="color: #383838;">احمد محمد</p>
        <div class="px-5 md:px-24">
            <small style="color: #383838CC;">مقال رائع!</small>
        </div>
    </div>

    <div class="py-10 rounded-lg space-y-3 " style="background-color: #F6F6F6;">
        <img src="../assets/Ellipse145.png" alt="" class="px-6 inline">
        <p class="inline text-xl font-semibold" style="color: #383838;">نيهال احمد</p>
        <div class="px-5 md:px-24">
            <small  style="color: #383838CC;">"القراءة تنقلنا إلى عوالم بديلة وتزرع فينا بذور الخيال والتفكير النقدي. أنا ممتنة لهذا الموقع الذي يلهمني دائمًا للغوص في صفحات الكتب واكتشاف عوالم جديدة. شكرًا لكم على هذا الإثراء الثقافي الرائع!"</small>
        </div>
    </div> -->