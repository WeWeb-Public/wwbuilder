<template>
    <div class="wwbuilder">
        <!-- wwManager:start -->
        <wwSectionEditMenu></wwSectionEditMenu>
        <!-- wwManager:end -->
        <wwObject :ww-object="wwSection.data.background" class="background" ww-category="background"></wwObject>

        <wwLayoutColumn tag="div" ww-default="ww-columns" :ww-list="wwSection.data.columns" class="wwobjects-wrapper" @ww-add="add($event)" @ww-remove="remove($event)">
            <wwObject v-for="columns in wwSection.data.columns" :key="columns.uniqueId" :ww-object="columns"></wwObject>
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
        }
    },
    computed: {
    },
    watch: {
    },
    methods: {
        wwData() {
            return {
                background: wwLib.wwObject.getDefault({ type: 'ww-color', data: { backgroundColor: 'transparent' } }),
                columns: []
            }
        },
        /* wwManager:start */
        add(options) {
            if (_.isEmpty(this.wwSection.data.columns)) {
                this.wwSection.data.columns = [];
            }

            this.wwSection.data.columns.splice(options.index, 0, options.wwObject);
        },
        remove(options) {
            if (_.isEmpty(this.wwSection.data.columns)) {
                this.wwSection.data.columns = [];
            }

            this.wwSection.data.columns.splice(options.index, 1);
        }
        /* wwManager:end */
    },
    beforeDestroy() {
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
