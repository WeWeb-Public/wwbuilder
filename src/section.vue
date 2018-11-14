<template>
    <div class="wwbuilder_A ww-section-height-100">
        <!-- wwManager:start -->
        <wwSectionEditMenu v-bind:sectionCtrl="sectionCtrl"></wwSectionEditMenu>
        <!-- wwManager:end -->

        <wwObject v-bind:ww-object="section.data.background" class="background" ww-category="background"></wwObject>

        <wwLayoutColumn tag='div' ww-default="ww-row" :ww-list="section.data.rows" class="wwobjects-wrapper">
            <wwObject v-for="row in section.data.rows" :key="row.uniqueId" v-bind:ww-object="row" ww-row-default-height="100"></wwObject>
        </wwLayoutColumn>
    </div>
</template>

<script>
export default {
    name: "wwbuilder_A",
    props: {
        sectionCtrl: Object
    },
    data() {
        return {

        }
    },
    computed: {
        section() {
            return this.sectionCtrl.get();
        }
    },
    watch: {
        section() {

        }
    },
    methods: {
    },
    beforeDestroy: function () {

    },
    created: function () {
    },
    mounted: function () {
    }
};
</script>

<style scoped>
.wwbuilder_A {
  position: relative;
  /*flex-basis: 100%;*/
}

.wwbuilder_A .background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.wwobjects-wrapper {
  min-height: 100%;
}
</style>
