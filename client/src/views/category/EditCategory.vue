<template>
    <div class="col-lg-6">
       <h3 class="text-center">Edit Category</h3>
       <router-link :to="{name: 'category.list'}">
           <button class="btn btn-dark mb-3">Back</button>
       </router-link>
        <form @submit.prevent="submitCategory">
            <div class="form-group">
                <label>Category</label>
                <input type="text" class="form-control" v-model="category.category" required>
            </div>            
            <div class="form-group">
                <button class="btn btn-danger btn-block">Create</button>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'
    import {baseApi} from '../../constants'
    export default {
        data() {
            return {
                category: {
                   category: ''                   
                }
            }
        },
        methods: {
            async submitCategory() {                
                await axios.put(baseApi + '/categorys/' + this.$route.params.id, this.category)
                this.$router.push({name: 'category.list'})
            },
            async fetchCategory() {
                let {data} = await axios.get(baseApi + '/categorys/' + this.$route.params.id)
                this.category = data
            }
        },
        mounted(){
            this.fetchCategory()
        }
    }
</script>