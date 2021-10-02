module.exports = {
    methods: {
        url(path) {
            return 'http://127.0.0.1:8080/uploads/product/1632555243895-905498999.png';
        }
    }
}


## In template

<script>
import axios from 'axios'
import Categores from "../home/categores.vue";
import url from '../../mixins/url'
export default {
  name: "HomeComponent",
  mounted(){
    this.getProducts();
  },
  components: {
    Categores,
  },
  computed: {
    randomNumber: function () {
      return `https://picsum.photos/id/${Math.floor(Math.random() * 10)}/500/500`
    },
  },
  mixins:[url],
  methods:{
    getProducts:async function(){
      await axios.get('/product')
      .then((result)=>{
        console.log(result)
        
      })
    }
  }
};
</script>


<img class="img-fluid" :src="url('/')" alt="" />
