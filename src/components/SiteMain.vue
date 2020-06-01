<template>
    <main>
        <SiteHeader/>
        <router-view />
    </main>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'

export default {
    name: 'SiteMain',
    components: {
        SiteHeader
    }
}
</script>
