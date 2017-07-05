import {
  Component,
  OnInit
} from '@angular/core';


@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  selector: 'home',  // <home></home>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [ './home.component.css' ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
 
  public title: String;
  public text: String;
  /**
   * TypeScript public modifiers
   */
  constructor(
	
  ) {}

  public ngOnInit() {
	console.log('hello `Home` component');
	this.title = "Home";
	this.text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scaevolam M. Nunc agendum est subtilius.
				 Hanc quoque iucunditatem, si vis, transfer in animum; Tria genera bonorum; Quod totum contra est.
				 Peccata paria. An potest cupiditas finiri? Quid ad utilitatem tantae pecuniae? Certe non potest. 
				 Cui Tubuli nomen odio non est? Frater et T. Quid ad utilitatem tantae pecuniae? 
				 Videsne quam sit magna dissensio? Hoc tu nunc in illo probas. Quare conare, quaeso. 
				 Ea possunt paria non esse. Si quidem, inquit, tollerem, sed relinquo. Quod vestri non item. 
				 Duo Reges: constructio interrete. Praeteritis, inquit, gaudeo. 
				 Quamquam id quidem licebit iis existimare, qui legerint. 
				 An tu me de L. Nam quid possumus facere melius?`
  }

  
}
