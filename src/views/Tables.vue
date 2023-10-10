<template>
    <router-link to="/Add">
        <div class="container w-28 h-28 flex items-center justify-center">
            <span class="add-icon text-[48px] -mt-2">+</span>
        </div>
        <router-view></router-view>
    </router-link>
    <!-- <div class="mr-[273px] mt-8 grid-cols-3"> -->
            <!-- <div v-for="articale in articales" :key="articale.id"> -->

                <!-- <SingleArticale :articale="articale"  @delete="handledelete"/> -->
            <!-- </div> -->
        <!-- </div> -->

            <div class="grid grid-cols-3 gap-4">
                <div v-for="(articale, index) in articales" :key="articale.id"  dir="rtl">
                    <div class="max-w-sm mt-6 overflow-hidden bg-white rounded shadow-lg">
                        <img class="w-full" :src="articale.uri" alt="Sunset in the mountains">
                        <div class="px-6 py-4">
                            <div class="mb-2 text-xl font-bold text-gray-900"> {{ articale.title }}</div>
                            <p class="text-base text-gray-700">{{ snippts[index]}}</p>
                        </div>
                        <div class="flex px-6 pt-4 pb-2 justify-around">
                            <div class="w-9 h-9"><img src="../assets/delete.png" alt="" @click="deleteproject(articale.id)"></div>                            
                            <div class="w-9 h-9"><img src="../assets/pen.png" alt=""></div>                            
                        </div>
                    </div>
                </div>
            </div>
</template>



<script>
export default {
        data() {
            return {
                articales:[],
                //uri:'http://localhost:3000/TheNewestArticales/'+this.project.id
            }
        },

        mounted() {
        fetch('http://localhost:3000/TheNewestArticales')
        .then(res => res.json())
        .then(data =>this.articales=data)
        .catch( err =>console.log(err.message))
        },

        methods: {
            deleteproject(id){
            fetch('http://localhost:3000/TheNewestArticales/'+ id, {method:'DELETE'})
            .then(()=> this.articales = this.articales.filter((articale)=>{return articale.id !==id}))
            .catch(err => console.log(err))
        },
        },




        // methods: {
        //     deleteproject(){
        //     fetch(this.uri, {method:'DELETE'})
        //     .then(()=> this.$emit('delete' , this.project.id))
        //     .catch(err => console.log(err))
        //     },
        //     handledelete(id){
        //     this.articales = this.articales.filter((articale)=>{
        //         return articale.id !==id
        //     })
        //     }
        // },

        computed: {
        snippts() {
            return this.articales.map(article => {
            return article.body.substring(0, 70) + '...';
            });
        },
},
}
</script>

<style>
.container {
    border: 3px dashed gray; 
    border-radius: 10%; 
}

.add-icon {
    color: gray; 
}
</style>

