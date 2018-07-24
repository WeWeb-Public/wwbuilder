<template>
    <div class="_wwbuilder_A  " v-ww-min-height="100">
        <wwObject v-bind:ww-object="section.data.background" class="background" ww-category="background"></wwObject>

        <div v-ww-vertical-align>
            <div class="contents">
                <div class="row-container container-fluid" v-for="(row, index) in section.data.rows" :key="index">
                    <wwColumns v-bind:ww-columns="row" v-ww-min-height="100"></wwColumns>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "wwbuilder_A",
    props: {
        section: Object
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
    created: function () {
        console.log('CREATED :', JSON.parse(JSON.stringify(this.section.data.rows[0])))
    },
    mounted: function () {

    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
._wwbuilder_A {
  position: relative;
}

._wwbuilder_A .background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

._wwbuilder_A .contents {
  position: relative;
  width: 100%;
}

._wwbuilder_A .top-padding-edit {
  height: 50px;
  width: 100%;
}

._wwbuilder_A .ww-add-block-container {
  position: relative;
  text-align: center;
  padding: 15px;
}

._wwbuilder_A .ww-add-block {
  position: relative;
  height: 100px;
  width: 100px;
  display: inline-block;
}

._wwbuilder_A .row-container {
  width: 100%;
  position: relative;
}

._wwbuilder_A .row-container.editing {
  padding-left: 100px;
}

._wwbuilder_A .row-container > .edit-button-top-left {
  top: 2px;
  left: 2px;
}
</style>
