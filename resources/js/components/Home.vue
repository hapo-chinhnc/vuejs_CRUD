// Home.vue
<template>
    <div>
        <h3 class="text-center">All Posts</h3><br/>
        <div class="d-flex justify-content-center">
            <div class="dashed-loading" v-if="loading"></div>
        </div>
        <div v-show="!loading">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>ID</th>
                    <th class="table-title">Title</th>
                    <th>Description</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products.data" :key="product.id">
                        <td>{{ product.id }}</td>
                        <td>{{ product.name }}</td>
                        <td>{{ product.price }}</td>
                        <td>{{ product.created_at }}</td>
                        <td>{{ product.updated_at }}</td>
                        <td>
                            <div class="btn-group" role="group">
                                <router-link :to="{name: 'edit', params: { id: product.id }}" class="btn btn-primary">Edit
                                </router-link>
                                <button class="btn btn-danger" @click="deletePost(product.id)">Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
           <pagination
                :data="products"
                :limit="2"
                @pagination-change-page="getListProducts"
            >
                <span slot="prev-nav">&lt; Previous</span>
	            <span slot="next-nav">Next &gt;</span>
            </pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        data() {
            return {
                products: {},
                loading: true
            }
        },
        mounted() {
		// Fetch initial results
            this.getListProducts();
        },
        methods: {
            deletePost(id) {
                this.axios
                    .delete(`/api/products/${id}`)
                    .then(response => {
                        let i = this.products.map(item => item.id).indexOf(id); // find index of your object
                        this.products.splice(i, 1)
                    });
            },
            async getListProducts(page = 1) {
                try {
                    const response = await axios.get('/api/products?page=' + page)
                    var some = this.products = response.data
                    this.loading = false

                } catch (error) {
                    this.error = error.response.data
                }
            },
        }
    }
</script>
<style lang="scss">
    .table-title {
        padding: 0 70px !important;
    }
    .dashed-loading {
        position: relative;
        height: 50px;
        &::before, &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 50%;
            width: 50px;
            height: 50px;
        }

        &::before {
            z-index: 5;
            border: 3px dashed var(--blue);
            border-left: 3px solid transparent;
            border-bottom: 3px solid transparent;
            -webkit-animation: dashed 1s linear infinite;
            animation: dashed 1s linear infinite;
        }

        &::after {
            z-index: 10;
            border: 3px solid var(--blue);
            border-left: 3px solid transparent;
            border-bottom: 3px solid transparent;
            -webkit-animation: dashed 1s ease infinite;
            animation: dashed 1s ease infinite;
        }
    }

    @keyframes dashed {
        to {
            transform: rotate(360deg);
        }
    }

</style>
