r<template>
    <NavBar/>

    <div dir="rtl">
        <section class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20">
        
                <div class="flex flex-col gap-y-5  pt-14  mx-auto"> 
                        
                    <p style="color: #383838;" class="text-4xl lg:text-5xl text-center ">تواصل معنا</p>
                    <p class="text-center text-sm md:text-base w-72 md:w-96 " style="color: #383838BD;">نحن نتطلع لسماع أخباركم والاستماع إلى ما لديكم لتقولوه.
                            لا تترددوا في التواصل معنا</p>
                    
                    <img src="../assets/الجريدة2.png" alt="" class="  lg:h-80 lg:w-80 mx-auto">
                    
                    </div>
                
        
                <form class="flex flex-col gap-y-6 mt-14 mx-auto lg:mx-0 lg:pr-12">
        
                    <div class="flex flex-col gap-y-2">
                        <label for="name" style="color: #3F3F3F;" class="font-semibold text-lg" >الأسم</label>
                        <input type="text" name="" id="name" style="background-color: #F6F6F6;" class="w-72 lg:w-11/12 h-9 outline-none lg:px-3 rounded-lg" v-model="name">
                    </div>
                    <div class="flex flex-col gap-y-2">
                        <label for="email" style="color: #3F3F3F;" class="font-semibold text-lg">البريد الألكتروني</label>
                        <input type="email" name="" id="email" style="background-color: #F6F6F6;" class="w-72 lg:w-11/12 h-9 outline-none px-3 rounded-lg" v-model="email">
                    </div>
                    <div class="flex flex-col gap-y-2">
                        <label for="address" style="color: #3F3F3F;" class="font-semibold text-lg">عنوان الرسالة</label>
                        <input type="text" name="" id="address" style="background-color: #F6F6F6;" class="w-72 lg:w-11/12 h-9 outline-none px-3 rounded-lg" v-model="address">
                    </div>
                    <div class="flex flex-col gap-y-2">
                        <label for="msg" style="color: #3F3F3F;" class="font-semibold text-lg">الرسالة</label>
                        <input type="text" name="" id="msg" style="background-color: #F6F6F6;" class="pb-32 w-72 lg:w-11/12 h-9 outline-none px-3 rounded-lg pt-6" v-model="msg">
                    </div>
                    <div class="">
                        <button style="background-color: #5165FD; color:#FFFFFF;" class=" mt-4 flex font-normal text-lg py-2 rounded-sm justify-center w-40"> إرسل</button>
                    </div>
        
                </form>
        
        </section>
    </div>
    
    <Footer/>

</template>

<script>
    import NavBar from '@/components/NavBar.vue'
    import Footer from '@/components/Footer.vue'
export default {
    data() {
        return {
            name: '',
            email: '',
            address: '',
            msg: ''
        }
    },
    components: {
        NavBar,
        Footer
    }

};
</script>

<style>
</style>