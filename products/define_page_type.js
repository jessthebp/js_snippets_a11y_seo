/* get pathname  */ 
var docurl = document.URL;
let thispath = new URL(docurl).pathname;
let path = thispath.toLowerCase()

//we have it in lower case bc "includes" is case sensitive
// go through and set based on what you need baby
// does anyone have a list of common url conventions for this kind of thing

switch (true) {
   case path.includes('guide'):
   case path.includes('blogpost'):
  case path.includes('blog'): return('blog')
    break;
    case path.includes('cat'):
   case path.includes('plp'):
  case path.includes('listing'): return('plp')
    break;
        case path.includes('product'):
   case path.includes('pdp'):
  case path.includes('detail'): return('pdp')
    break;
  case docurl.includes('dev'):return('dev')
    break;
  default:
    return('unknown');
}
