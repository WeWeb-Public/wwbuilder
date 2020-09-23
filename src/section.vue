<template>
    <div class="wwbuilder">
        <wwObject v-if="content.background" isBackground v-bind="content.background" class="background"></wwObject>
        <wwLayout path="columns" />
    </div>
</template>

<script>
export default {
    name: "__COMPONENT_NAME__",
    props: {
        uid: String,
        content: Object,
    },
    wwDefaultContent() {
        return {
            background: { isWwObject: true, type: "ww-color" },
            columns: [],
        };
    },
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
