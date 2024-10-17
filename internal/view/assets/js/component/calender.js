var template = `
<div>
<div id="cal-heatmap"></div>
<div>
    <div id="ex-1" class="margin-bottom--md"></div>
    <a
      class="button button--sm button--secondary"
      href="#"
      @click="previous"
    >
      ← Previous
    </a>
    <a
      class="button button--sm button--secondary margin-left--xs"
      href="#"
      @click="next"
    >
      Next →
    </a>
</div></div>`;


export default {
    template: template,
    props: {
        calData: {},
        calOpts: [],
    },
    data() {
        return {
            formFields: [],
            cal: new CalHeatmap(),
        };
    },
    created() {
        this.calPaint()
    },
    methods: {
        calPaint() {
            this.cal.paint(this.calData, this.calOpts);
        },
        previous(e) {
            e.preventDefault();
            this.cal.previous();
        },
        next(e) {
            e.preventDefault();
            this.cal.next();
        },
    },
};
