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

        <aside class="lg:hidden">
            <div class="flex text-xl mt-7 gap-x-3 md:gap-x-5 px-3 overflow-hidden">
                <buttom class="c rounded-sm" @click="UpdateFilter('فن')" >فن</buttom>
                <buttom class="c rounded-sm" @click="UpdateFilter('موسيقي')">موسيقي</buttom>
                <buttom class="c rounded-sm" @click="UpdateFilter('لغة')">لغة</buttom>
                <buttom class="c rounded-sm" @click="UpdateFilter('فلسفه')" >فلسفة</buttom>
                <buttom class="c rounded-sm" @click="UpdateFilter('الأدب')">أدب</buttom>
                <buttom class="c rounded-sm" @click="UpdateFilter('تاريخ')">تاريخ</buttom>
                <buttom class="c rounded-sm" @click="UpdateFilter('الكل')">الكل</buttom>
            </div>
        </aside>
</template>

<script>
export default {
    name:'UpdateFilter',
    methods: {  
        UpdateFilter(by){
            this.$emit('filterchange' , by)
        }
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