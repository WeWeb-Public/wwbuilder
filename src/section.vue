<template>
    <div class="wwbuilder">
        <!-- wwManager:start -->
        <wwSectionEditMenu :sectionCtrl="sectionCtrl" :options="congifCards"></wwSectionEditMenu>
        <!-- wwManager:end -->
        <wwObject :ww-object="section.data.background" class="background" ww-category="background"></wwObject>

        <wwLayoutColumn tag="div" ww-default="ww-columns" :ww-list="section.data.columns" class="wwobjects-wrapper" @ww-add="add($event)" @ww-remove="remove($event)">
            <wwObject v-for="columns in section.data.columns" :key="columns.uniqueId" :ww-object="columns"></wwObject>
        </wwLayoutColumn>
    </div>
</template>

<script>
export default {
    name: "__COMPONENT_NAME__",
    props: {
    },
    data() {
        return {
        section() {
            return this.sectionCtrl.get();
        }
        }
    },
    computed: {
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
            if (_.isEmpty(this.section.data.columns)) {
                this.section.data.columns = [];
                needUpdate = true;
            }
        },
        add(options) {
            if (_.isEmpty(this.section.data.columns)) {
                this.section.data.columns = [];
            }

            this.section.data.columns.splice(options.index, 0, options.wwObject);
        },
        remove(options) {
            if (_.isEmpty(this.section.data.columns)) {
                this.section.data.columns = [];
            }

            this.section.data.columns.splice(options.index, 1);
        }
    },
    beforeDestroy() {

    },
    created() {
        this.initData();
    },
    mounted() {
    }
};
</script>

<style scoped>
.wwbuilder {
    position: relative;
    min-height: 60px;
}

.wwbuilder .background {
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
