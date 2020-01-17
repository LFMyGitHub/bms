<template>
    <div class="wrapper">
        <v-head/>
        <v-sidebar/>
    </div>
</template>

<script>
    import vHead from './header.vue';
    import vSidebar from './sidebar.vue';
    export default{
        components:{
            vHead, vSidebar
        }
    }
</script>

