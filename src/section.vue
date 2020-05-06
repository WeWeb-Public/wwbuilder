<template>
    <div class="wwbuilder">
        <!-- wwManager:start -->
        <wwSectionEditMenu :sectionCtrl="sectionCtrl"></wwSectionEditMenu>
        <!-- wwManager:end -->
        Coucou !

        <wwLayoutColumn tag="div" ww-default="ww-columns" :ww-list="section.data.columns" class="wwobjects-wrapper" @ww-add="add($event)" @ww-remove="remove($event)">
            <wwObject v-for="columns in section.data.columns" :key="columns.uniqueId" :ww-object="columns"></wwObject>
        </wwLayoutColumn>
    </div>
</template>

<script>
export default {
    name: '__COMPONENT_NAME__',
    props: {
        sectionCtrl: Object
    },
    data() {
        return {};
    },
    computed: {
        section() {
            return this.sectionCtrl.get();
        }
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

            if (needUpdate) {
                this.sectionCtrl.update(this.section);
            }
        },
        /* wwManager:start */
        add(options) {
            if (_.isEmpty(this.section.data.columns)) {
                this.section.data.columns = [];
            }

            this.section.data.columns.splice(options.index, 0, options.wwObject);

            this.sectionCtrl.update(this.section);
        },
        remove(options) {
            if (_.isEmpty(this.section.data.columns)) {
                this.section.data.columns = [];
            }

            this.section.data.columns.splice(options.index, 1);

            this.sectionCtrl.update(this.section);
        }
        /* wwManager:end */
    },
    created() {
        this.initData();
    }
};
</script>

<style lang="scss" scoped>
.wwbuilder {
    position: relative;
    min-height: 60px;
    .background {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    .wwobjects-wrapper {
        min-height: 100%;
    }
}
</style>
