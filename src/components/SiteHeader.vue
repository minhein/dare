<template>
    <header>
        <nav>
            <router-link to="/blusher">Blusher</router-link>
            <router-link to="/brushes">Brushes</router-link>
            <router-link to="/mascara">Mascara</router-link>
            <router-link to="/perfume">Perfume</router-link>
            <router-link to="/hair">Hair</router-link>
        </nav>
        <div id="mobile-menu">
            <button id="openMenu" @click='toggle = !toggle'>Menu</button>
            <div v-show='toggle' class="mobile-menu-nav">
                <router-link to="/blusher">Blusher</router-link>
                <router-link to="/brushes">Brushes</router-link>
                <router-link to="/mascara">Mascara</router-link>
                <router-link to="/perfume">Perfume</router-link>
                <router-link to="/hair">Hair</router-link>
            </div>
        </div>
    </header>
</template>

<script>
import $ from 'jquery'
$(function () {
    $('.mobile-menu-nav a').click(function () {
        $(this).parents('.mobile-menu-nav').css('display', 'none')
    })
})
export default {
    name: 'SiteHeader',
    data () {
        return {
            toggle: true
        }
    }
}
</script>
<style lang="sass">
    .mobile-menu-nav
      @include flexbox
      @include justify-content(center)
      @include align-items(center)
      @include flex-direction(column)
      position: fixed
      text-align: center
      width: 100%
      height: 100%
      background: rgba(0, 0, 0, 0.85)
      left: 0
      top: 0
      z-index: -1

      a
        color: $primary-color
        margin: 20px
        padding: 5px
        text-transform: uppercase
        text-decoration: none

      @media (min-width: 768px)
          display: none

    #mobile-menu
      display: block
      right: 25px
      position: absolute
      top: 10px
      padding: 15px 20px
      z-index: 1

      button
        background: none
        border: 1px solid $primary-color
        padding: 7px 20px
        color: $primary-color
        cursor: pointer
        outline: 0

      @media (min-width: 768px)
          display: none

    header
        background: rgba(0, 0, 0, 0)
        text-align: center

        @media (min-width: 768px)
          background: rgba(0, 0, 0, 0.4)

        nav
            display: none
            @include justify-content(center)
            @include align-items(center)
            text-align: center
            padding: 25px 20px
            margin: 0 auto

            &.open-menu
              display: block

            @media (min-width: 768px)
              @include flexbox

            a
              color: $primary-color
              text-transform: uppercase
              display: inline-block
              font-size: $base-font-size
              line-height: 22px
              text-decoration: none
              font-weight: 600
              margin-left: 70px
              letter-spacing: 0.73px
              border-bottom: 1px solid transparent

              &.router-link-active,
              &:hover
                border-bottom: 1px solid $primary-color

</style>
