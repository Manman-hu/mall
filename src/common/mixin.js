import { debounce } from 'common/utils.js'

import { POP, NEW, SELL } from "./const";

import BackTop from 'components/content/backtop/BackTop'
export const imgloadlistenerMix = {
    mounted() {
        const refresh = debounce(this.$refs.scroll.refresh, 200)
        this.imgloadlistener = () => { refresh() }
        this.$bus.$on('itemImageLoad', this.imgloadlistener)

    }
}

export const backtopMix = {
    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false,
        }
    },
    methods: {
        backclick() {
            this.$refs.scroll.scrollTo(0, 0, 500)
        }
    }
}

export const tabControlMixin = {
    data: function() {
        return {
            currentType: POP
        }
    },
    methods: {
        tabClick(index) {
            switch (index) {
                case 0:
                    this.currentType = POP
                    break
                case 1:
                    this.currentType = NEW
                    break
                case 2:
                    this.currentType = SELL
                    break
            }
            console.log(this.currentType);
        }
    }
}