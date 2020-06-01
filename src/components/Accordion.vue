<template>
    <div id="accordion">
        <h3>The products and how it works</h3>
        <div class="first">
            <h5><span class="bullet">Q.</span>How is my MakeUp™ delivered?</h5>
            <p><span class="bullet">A.</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum lacinia massa, a venenatis justo aliquet et. Curabitur vehicula iaculis lacus, ut hendrerit tortor posuere vitae. Duis tempus pellentesque efficitur. Sed eu euismod sapien. Nam ultrices, ipsum id rutrum posuere, risus lacus commodo lectus, quis eleifend lorem justo in risus. Sed et mi eu purus fringilla interdum. Donec et lacus nec nisi ullamcorper suscipit. Vivamus maximus viverra ligula nec fringilla. Sed nec turpis sed enim cursus luctus. Curabitur egestas nunc eu ante accumsan finibus. Cras non auctor lacus. Ut sit amet quam lacus. Ut tempor interdum enim, quis efficitur nibh bibendum vel.</p>
        </div>
        <h3>Ordering</h3>
        <div>
            <h5><span class="bullet">Q.</span>How is my MakeUp™ delivered?</h5>
            <p><span class="bullet">A.</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum lacinia massa, a venenatis justo aliquet et. Curabitur vehicula iaculis lacus, ut hendrerit tortor posuere vitae. Duis tempus pellentesque efficitur. Sed eu euismod sapien. Nam ultrices, ipsum id rutrum posuere, risus lacus commodo lectus, quis eleifend lorem justo in risus. Sed et mi eu purus fringilla interdum. Donec et lacus nec nisi ullamcorper suscipit. Vivamus maximus viverra ligula nec fringilla. Sed nec turpis sed enim cursus luctus. Curabitur egestas nunc eu ante accumsan finibus. Cras non auctor lacus. Ut sit amet quam lacus. Ut tempor interdum enim, quis efficitur nibh bibendum vel.</p>
        </div>
        <h3>Delivery</h3>
        <div>
            <h5><span class="bullet">Q.</span>How is my MakeUp™ delivered?</h5>
            <p><span class="bullet">A.</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum lacinia massa, a venenatis justo aliquet et. Curabitur vehicula iaculis lacus, ut hendrerit tortor posuere vitae. Duis tempus pellentesque efficitur. Sed eu euismod sapien. Nam ultrices, ipsum id rutrum posuere, risus lacus commodo lectus, quis eleifend lorem justo in risus. Sed et mi eu purus fringilla interdum. Donec et lacus nec nisi ullamcorper suscipit. Vivamus maximus viverra ligula nec fringilla. Sed nec turpis sed enim cursus luctus. Curabitur egestas nunc eu ante accumsan finibus. Cras non auctor lacus. Ut sit amet quam lacus. Ut tempor interdum enim, quis efficitur nibh bibendum vel.</p>
        </div>
        <h3>Returns and Refunds</h3>
        <div>
            <h5><span class="bullet">Q.</span>How is my MakeUp™ delivered?</h5>
            <p><span class="bullet">A.</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum lacinia massa, a venenatis justo aliquet et. Curabitur vehicula iaculis lacus, ut hendrerit tortor posuere vitae. Duis tempus pellentesque efficitur. Sed eu euismod sapien. Nam ultrices, ipsum id rutrum posuere, risus lacus commodo lectus, quis eleifend lorem justo in risus. Sed et mi eu purus fringilla interdum. Donec et lacus nec nisi ullamcorper suscipit. Vivamus maximus viverra ligula nec fringilla. Sed nec turpis sed enim cursus luctus. Curabitur egestas nunc eu ante accumsan finibus. Cras non auctor lacus. Ut sit amet quam lacus. Ut tempor interdum enim, quis efficitur nibh bibendum vel.</p>
        </div>
        <hr/>
    </div>
</template>

<script>
import $ from 'jquery'
$(function () {
    $('#accordion h3').on('click', function () {
        $(this).toggleClass('active')
        $(this).next('div').toggleClass('open')
    })
})
export default {
    name: 'Accordion'
}
</script>

<style scope lang='sass'>
    #accordion
        min-width: 50%
        max-width: 775px
        margin: 60px auto
        padding: 30px
        position: relative
        z-index: 1

        hr
          border: 0px
          background: #E6E7E9
          height: 1px
          margin: 0

        .open
          display: block

          h5,
          p
            position: relative
            padding-left: 50px

            span
              position: absolute
              left: 10px

        h3
          font-size: 20px
          line-height: 24px
          font-weight: normal
          padding: 20px 0
          color: #5F6062
          cursor: pointer
          border-top: 1px solid #E6E7E9
          position: relative

          @media (min-width: 768px)
              font-size: 24px

          &::after
              content: ''
              background-image: url('../assets/svgs/arrow.svg')
              background-repeat: no-repeat
              background-position: 97% 55%
              padding: 10px 7px
              background-size: contain
              position: absolute
              right: 20px

          &.active
            &::after
                background-position: 97% 50%
                transform: rotate(177deg)

          &:last-child
            border-bottom: 1px solid #E6E7E9

          + div
            display: none
            padding: 20px 20px
            background: rgba(230, 231, 233, 0.5)
            transition: 0.4s

            h5
              margin-top: 0
              color: #6A6B6D

            p
              font-size: 14px
              line-height: 20px
              color: #818284
              -webkit-touch-callout: none; /* iOS Safari */
              -webkit-user-select: none; /* Safari */
              -khtml-user-select: none; /* Konqueror HTML */
              -moz-user-select: none; /* Old versions of Firefox */
              -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
</style>
