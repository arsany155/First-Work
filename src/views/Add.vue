<template>
            <div class="mt-4">
                <div class="p-6 bg-white rounded-md shadow-xl">
                    <form  dir="rtl" @submit.prevent="handleSubmit">
                                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                    <div>
                                        <label class="text-gray-700"  for="title">عنوان المقاله :</label>
                                        <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="text" id="title" name="title"  v-model="title">                      
                                    </div>
                    
                                    
                                    <!-- قائمة السحب للاختيار -->
                                    <div>
                                        <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">النوع:</label>
                                        <select class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                            <option>الأدب</option>
                                            <option>فلسفه</option>
                                            <option>تاريخ</option>
                                            <option>فنون</option>
                                            <option>شعر</option>
                                        </select>
                                    </div>
                    
                                    <!-- حقل التاريخ -->
                                    <div>
                                        <label class="text-gray-700" for="date">التاريخ:</label>
                                        <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="date" id="date" name="date" v-model="date"> 
                                    </div>
                                    
                                    
                                    <!-- حقل عنوان النص -->
                                    <div>
                                        <label class="text-gray-700" for="body-title">عنوان النص:</label>
                                        <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="text" id="body-title" name="body-title" v-model="bodyTitle">
                                    </div>
                                    
                                    <!-- مساحة النص -->
                                    <div>
                                        <label class="text-gray-700" for="body">النص:</label>
                                        <textarea class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" id="body" name="body" rows="4" v-model="body"> </textarea>
                                    </div>

                                    <!--الصوره  رابط-->
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700">رابط الصوره :</label>
                                        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                            <div class="space-y-1 text-center">
                                                <svg class="mx-auto h-12 w-12 text-gray-500" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <div class="flex text-sm text-gray-600">
                                                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                        <span class="">Upload a file</span>
                                                    </label>
                                                    <input id="file-upload" name="file-upload" type="file" @change="handleFileUpload">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    
                                </div>
                                    <div class="mt-7 flex justify-center">
                                        <button class="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Add Project</button>
                                        
                                    </div>                    
                    </form>
                </div>
            </div>

    </template>


<script>
export default{
    data() {
        return {
            title:'',
            image: null,
            type:'',
            creator:'',
            date:'',
            body:'',
            bodyTitle:''
        }
    },
    methods: {
        handleFileUpload(event) {
            this.image = event.target.files[0];
        },
        handleSubmit(){
            const formData = new FormData();
                formData.append('title', this.title);
                formData.append('uri', this.image);
                formData.append('bodyTitle', this.bodyTitle);
                formData.append('body', this.body);
                formData.append('createdby', this.creator);
                formData.append('date', this.date);
                formData.append('type', this.type);

            fetch('http://localhost:3000/TheNewestArticales',{
                method: 'POST',
                body: formData,
            })
            // .then(()=>{this.$router.push('/')})
            .catch(err => console.log(err))
        }
    },
}
</script>

<style>
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}
</style>
