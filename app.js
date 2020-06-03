let data = {
  title: 'The VueJS Instance',
  showParagraph: false,
}

let vm1 = new Vue({
  el: '#app1',
  data: data,
  methods: {
    show: function () {
      this.showParagraph = true
      this.updateTitle('The VueJS Instance (Updated)')
      this.$refs.myButton.innerText = 'Test'
    },
    updateTitle: function (title) {
      this.title = title
    },
  },
  computed: {
    lowercaseTitle: function () {
      return this.title.toLowerCase()
    },
  },
  watch: {
    title: function (value) {
      alert('Title changed, new value: ' + value)
    },
  },
})

console.log(vm1.$data === data)
vm1.$refs.heading.innerText = "Something Else"

setTimeout(() => {
  vm1.title = 'Changed By Timer'
  vm1.show()
}, 3000)

let vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The second instance',
  },
  methods: {
    onChange() {
      vm1.title = 'Changed!'
    },
  },
})
