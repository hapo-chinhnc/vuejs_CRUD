<template lang="">
    <div class="header">
        <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">Navbar</span>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <router-link
                        class="nav-link"
                        :class="[{active: $route.name === 'index'}]"
                        :to="{name: 'index'}"
                    >
                    <!-- // Đây là 1 route điều hướng chúng ta đến route có name là index
                    // và sẽ thêm class là active nếu route name là index -->
                        Home
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link
                        class="nav-link"
                        :class="[{active: $route.name === 'post'}]"
                        :to="{name: 'post'}"
                    >
                        Post
                    </router-link>
                </li>
            </ul>
        </nav>

    </div>
</template>
<script>
export default {
    name: 'Header'
}
</script>
<style lang="">

</style>
