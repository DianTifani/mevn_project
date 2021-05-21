<template>    
    <div class="col-lg-6">
        <router-link :to="{name: 'category.create'}">
            <button class="btn btn-success mb-3">Create Category</button>
        </router-link>
        <table class="table table-striped">
            <thead class="thead-dark">
                <tr>
                    <th>No</th>
                    <th>Category</th>                    
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(category, index) in categorys" :key="category._id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ category.category }}</td>
                    <td>
                        <router-link :to="{name: 'category.edit', params: { id: category._id }}" class="btn btn-success mr-2">Edit</router-link>
                        <button @click.prevent="deleteCategory(category)" class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from "axios"
    import {baseApi} from '../../constants'

    export default {
        data() {
            return {
                categorys: []
            }
        },
        methods: {
            deleteCategory(category){
                if (!confirm('Apakah anda yakin?')) return
                axios.delete(baseApi + '/categorys/' + category._id)
                .then(() => {
                    this.fetchCategorys()
                })
                .catch((e) => {
                    console.error(e, e.response)
                })
            },
            async fetchCategorys() {
                try {
                    let {data} = await axios.get(baseApi + '/categorys')
                    this.categorys = data
                } catch (e) {
                    console.error(e, e.response)
                }
            }
        },
        mounted() {
            this.fetchCategorys()
        }
    }
</script>
