<template>
    <section id="data" class="blusher">
        <p class="card-title">Blusher</p>
        <accordion/>
    </section>
</template>

<script>
import Accordion from '@/components/Accordion.vue'
export default {
    name: 'Blusher',
    components: {
        Accordion
    }
}

</script>

<style scope lang='sass'>
  main
      overflow-x: hidden
</style>
