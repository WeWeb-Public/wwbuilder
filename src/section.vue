<template>
    <div class="wwbuilder_A ww-section-height-100">
        <!-- wwManager:start -->
        <wwSectionEditMenu v-bind:sectionCtrl="sectionCtrl"></wwSectionEditMenu>
        <!-- wwManager:end -->

        <wwObject v-bind:ww-object="section.data.background" class="background" ww-category="background"></wwObject>

        <div ww-default="ww-image" ww-add="addRow" class="wwobjects-wrapper ww-layout-column">
            <wwObject v-for="row in section.data.rows" :key="row.uniqueId" v-bind:ww-object="row" ww-row-default-height="100"></wwObject>
        </div>
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
            section: this.sectionCtrl.get()
        }
    },
    computed: {
    },
    methods: {
        addRow: function () {

            console.log('ADD ROW')

            /*
            if (!this.section.data.rows) {
                this.section.data.rows = [];
            }

            const defaultRow = {
                config: {
                    count: 3,
                    xs: null,
                    sm: [{
                        offset: 0,
                        width: 33.2,
                        borders: [
                            {
                                width: 0,
                                color: "#000000",
                                style: "solid"
                            },
                            {
                                width: 0,
                                color: "#000000",
                                style: "solid"
                            },
                            {
                                width: 0,
                                color: "#000000",
                                style: "solid"
                            },
                            {
                                width: 0,
                                color: "#000000",
                                style: "solid"
                            },
                        ]
                    }, {
                        offset: 0,
                        width: 33.2,
                        borders: [
                            {
                                width: 0,
                                color: "#000000",
                                style: "solid"
                            },
                            {
                                width: 0,
                                color: "#000000",
                                style: "solid"
                            },
                            {
                                width: 0,
                                color: "#000000",
                                style: "solid"
                            },
                            {
                                width: 0,
                                color: "#000000",
                                style: "solid"
                            },
                        ]
                    }, {
                        offset: 0,
                        width: 33.2,
                        borders: [
                            {
                                width: 0,
                                color: "#000000",
                                style: "solid"
                            },
                            {
                                width: 0,
                                color: "#000000",
                                style: "solid"
                            },
                            {
                                width: 0,
                                color: "#000000",
                                style: "solid"
                            },
                            {
                                width: 0,
                                color: "#000000",
                                style: "solid"
                            },
                        ]
                    }
                    ],
                    md: null,
                    lg: null
                },
                data: [
                    {
                        background: null,
                        wwObjects: []
                    },
                    {
                        background: null,
                        wwObjects: []
                    },
                    {
                        background: null,
                        wwObjects: []
                    }
                ]
            };

            const newRow = JSON.parse(JSON.stringify(defaultRow));
            newRow.uniqueId = wwLib.wwUtils.getUniqueId();

            this.section.data.rows.push(newRow);

            */
        },

        removeRow: function (row) {
            const index = this.section.data.rows.indexOf(row);
            this.section.data.rows.splice(index, 1);
        },
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
