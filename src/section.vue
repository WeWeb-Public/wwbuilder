<template>
    <div class="_wwbuilder_A ww-section-height-100">
        <wwObject v-bind:ww-object="section.data.background" class="background" ww-category="background"></wwObject>

        <wwObject v-bind:ww-object="row" v-for="(row, index) in section.data.rows" :key="index" ww-row-default-height="100%"></wwObject>
    </div>
</template>

<script>
export default {
    name: "wwbuilder_A",
    props: {
        sectionRef: Object
    },
    computed: {
        section() {
            //return this.sectionRef.wwGet();
            return this.$store.state.sections[this.sectionRef.id];
        }
    },
    methods: {
        addRow: function () {
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
            newRow.uniqueId = wwUtils.getUniqueId();

            this.section.data.rows.push(newRow);
        },

        removeRow: function (row) {
            const index = this.section.data.rows.indexOf(row);
            this.section.data.rows.splice(index, 1);
        },
    },
    beforeDestroy: function () {

    },
    created: function () { },
    mounted: function () {

    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
._wwbuilder_A {
  position: relative;
  flex-basis: 100%;
}

._wwbuilder_A .background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
