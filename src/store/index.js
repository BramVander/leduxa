import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
    state: () => {
        return {
            imgIndex: 1,
        }
    },

    actions: {
        nextImg() {
            this.imgIndex++
        },

        prevImg() {
            this.imgIndex--
        }
    }
})