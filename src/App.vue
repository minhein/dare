<template>
    <div id="app" :class="'page-'+$route.name">
        <SiteMain />
    </div>
</template>

<script>
import SiteMain from '@/components/SiteMain.vue'
export default {
    name: 'App',
    components: {
        SiteMain
    }
}
</script>
<style lang="sass">
    html,
    body
      height: 100vh

    #app
      @include flexbox
      @include justify-content(center)
      @include align-items(center)
      width: 100%
      height: 100%
      overflow: hidden
      padding-top: 0

      .card-title
          @include flexbox
          @include justify-content(center)
          @include align-items(center)
          height: 90vh
          font-size: 50px
          line-height: 58px
          font-weight: 600
          text-align: center
          color: $primary-color
          margin: 0
          padding: 0
          background-size: cover
          background-repeat: no-repeat
          background-position: 50% 100%
          margin-top: -72px
          position: relative
          z-index: -1
          height: 100vh

          &:after
            content: ""
            padding: 1px
            width: 100%
            height: 100%
            position: absolute
            background-color: rgba(0, 0, 0, 0.3)
            z-index: -1
            top: 0
            left: 0

      &.page-home
          main
              overflow: hidden

          .card-title
            background-image: url('assets/images/image-01.jpg')

      &.page-blusher

        .card-title
            background-image: url('assets/images/image-02.jpg')

      &.page-brushes

          .card-title
              background-image: url('assets/images/image-03.jpg')

      &.page-mascara

          .card-title
              background-image: url('assets/images/image-04.jpg')

      &.page-perfume

          .card-title
              background-image: url('assets/images/image-05.jpg')

      &.page-hair

          .card-title
              background-image: url('assets/images/image-06.jpg')

    main
        height: 100%
        width: 100%

</style>
