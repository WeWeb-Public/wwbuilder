<template>
    <div class="wwbuilder_A">
        <!-- wwManager:start -->
        <wwSectionEditMenu :sectionCtrl="sectionCtrl"></wwSectionEditMenu>
        <!-- wwManager:end -->
        <wwObject :ww-object="section.data.background" class="background" ww-category="background"></wwObject>

        <wwLayoutColumn tag="div" ww-default="ww-row" :ww-list="section.data.rows" class="wwobjects-wrapper" @ww-add="add($event)" @ww-remove="remove($event)">
            <wwObject v-for="row in section.data.rows" :key="row.uniqueId" :ww-object="row" ww-row-default-height="100"></wwObject>
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
    },
    methods: {
        initData() {
            //Init objects
            let needUpdate = false;
            if (!this.section.data.background) {
                this.section.data.background = wwLib.wwObject.getDefault({ type: 'ww-color', data: { color: 'white' } });
                needUpdate = true;
            }
            if (_.isEmpty(this.section.data.rows)) {
                this.section.data.rows = [];
                needUpdate = true;
            }
            if (needUpdate) {
                this.sectionCtrl.update(this.section);
            }
        },
        add(options) {
            if (_.isEmpty(this.section.data.rows)) {
                this.section.data.rows = [];
            }

            this.section.data.rows.splice(options.index, 0, options.wwObject);

            this.sectionCtrl.update(this.section);
        },
        remove(options) {
            if (_.isEmpty(this.section.data.rows)) {
                this.section.data.rows = [];
            }

            this.section.data.rows.splice(options.index, 1);

            this.sectionCtrl.update(this.section);
        }
    },
    beforeDestroy: function () {

    },
    created: function () {
        this.initData();
    },
    mounted: function () {
    }
};
</script>

<style scoped>
.wwbuilder_A {
    position: relative;
    min-height: 60px;
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
