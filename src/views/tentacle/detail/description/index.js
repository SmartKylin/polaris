import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
    }
  },
  methods: {
    selectLabel (event) {
      var src = event.target;
      if (src.tagName.toLowerCase() === "span"){
        let par = src.parentNode;
        let spans = par.getElementsByTagName('span');
        spans = Array.from(spans);
        spans.forEach(sp=>(sp.className = ''));
        src.className += 'active';
      }
    }
  }
})
