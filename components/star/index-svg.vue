 <template>
	<div class="rating_container">
        <section class="star_container">
            <!-- <svg-icon icon-class="star" class="grey_fill" v-for="num in 5" :key="num"></svg-icon> -->
        </section>
        <div :style="'width:' + 3.5*2/5*100 + 'px'" class="star_overflow">
            <section class="star_container" >
                <!-- <svg-icon icon-class="star_on" class="orange_fill" v-for="num in 5" :key="num"></svg-icon> -->
            </section>
        </div>
    </div>
</template>

<script>export default {
  name: 'n22-star',
  data() {
    return {}
  },
  mounted() {},
  props: ['rating'],
}
</script>

<style lang="stylus" scoped>
	.rating_container{
        position: relative;
        top: 20px;
        width: 200px;
        height: 40px;
        // @include wh(200px, 40px);
        .star_overflow{
            overflow: hidden;
            position: relative;
            height: 100%;
        }
        .star_container{
            position: absolute;
            display: flex;
            width: 200px;
            height: 40px;
            top: -2px;
            left: -2px;
            .grey_fill{
                fill: #d1d1d1;
            }
            .orange_fill{
                fill: #ff9a0d;
            }
        }
    }
</style>
