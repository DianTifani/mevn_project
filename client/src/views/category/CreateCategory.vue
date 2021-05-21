<template>
    <div class="col-lg-6">
       <h3 class="text-center">Create Category</h3>
        <form @submit.prevent="submitCategory">
            <div class="form-group">
                <label>Category</label>
                <input type="text" class="form-control" v-model="category.category" required>
            </div>            
            <div class="form-group">
                <button class="btn btn-danger btn-block">Create</button>
            </div>
            <router-link :to="{name: 'category.list'}">
                <button class="btn btn-dark mb-3">Back</button>
            </router-link>
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
                try {
                    let payload = new FormData()
                    payload.append('category', this.category.category)  

                    await axios.post(baseApi + '/categorys', this.category)
                    this.$router.push({name: 'category.list'})
                } catch (e) {
                    console.error(e, e.response)
                }
            }
        }
    }
</script>