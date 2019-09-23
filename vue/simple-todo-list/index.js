import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.esm.browser.min.js';

new Vue({
    el: '#todo-list',
    data: {
        items: [],
        item: ''
    },
    methods: {
        addNew: function() {
            this.items.push({ text: this.item });
            this.item = '';
        }
    }
});