<template>
    <div class="container">
        <header-component></header-component>
        <div class="main mt-4">
            <div class="row">
                <div class="col-md-8 offset-2 text-center">
                    <router-view></router-view>
                    <!-- // Chỗ này được hiểu là với mỗi route sẽ được load các component đã được khai báo trong file routes.js -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        computed: {
            pageTitle: function() {
                return this.$route.meta.title;
            }
        }
    }
</script>
