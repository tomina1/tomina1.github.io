import{c as r,b as e,d as o,t as p,a as n,o as a}from"./index.99d27838.js";const s={class:"markdown-body"},c=n(`<h4>1.\u5B89\u88C5\\\u521B\u5EFA\\\u8FD0\u884C</h4><pre><code class="language-nginx">npm install -g @angular/cli
</code></pre><pre><code class="language-nginx">ng new [name]
</code></pre><pre><code class="language-nginx">ng serve --open
</code></pre><pre><code class="language-nginx">ng generate component/service name  //\u521B\u5EFA\u7EC4\u4EF6\u670D\u52A1cli
</code></pre><pre><code class="language-nginx">ng generate module app-routing --flat --module=app
--flat \u6587\u4EF6\u653E\u5230app\u4E2D \u4E0D\u662F\u5355\u72EC  
--module=app \u544A\u8BC9cli\u6CE8\u518C\u5230AppModule\u7684imports\u6570\u7EC4\u4E2D
</code></pre><pre><code class="language-nginx">ng g pipe filter/name  \u521B\u5EFA\u7BA1\u9053\u6587\u4EF6   |\u7BA1\u9053name:\u53C2\u6570
</code></pre><h4>2.\u57FA\u672C\u6982\u5FF5</h4><p>NgModule(\u5143\u6570\u636E) :\u7EC4\u4EF6\u63CF\u8FF0,\u7528\u4E86\u54EA\u4E2A\u670D\u52A1(service)\u548C\u89C6\u56FE(html)\u7F16\u8BD1\u4E0A\u4E0B\u6587</p><p>\u200B \u5BFC\u5165\u529F\u80FD,<strong>\u5F53\u524D</strong>\u7EC4\u4EF6\u53EF\u4EE5\u4F7F\u7528,\u5BFC\u5165\u5176\u4ED6NgModule(\u4F7F\u7528\u5B83<strong>\u5BFC\u51FA\u90E8\u5206</strong>)</p><p>\u200B \u8FD9\u4E9B\u53EF\u4EE5\u83B7\u5F97\u60F0\u6027\u52A0\u8F7D(\u6309\u9700\u52A0\u8F7D) \u51CF\u5C11\u542F\u52A8\u52A0\u8F7D\u5185\u5BB9\u6570\u91CF</p><pre><code class="language-nginx">declarations //\u58F0\u660E\u7528\u5230\u7684\u7EC4\u4EF6
exports  //\u80FD\u591F\u5728[\u5176\u4ED6\u6A21\u677F\u7684\u7EC4\u4EF6\u6A21\u677F\u4E2D\u4F7F\u7528]\u7684\u53EF\u58F0\u660E[\u5BF9\u8C61\u5B50\u96C6]
imports  //\u5BFC\u5165(\u4E86\u672C\u6A21\u5757\u4E2D)\u7EC4\u4EF6\u6A21\u677F\u6240\u9700\u8981(\u7684\u7C7B\u7684\u5176\u4ED6)\u6A21\u5757
providers //\u58F0\u660E\u80FD\u88AB\u672C\u7EC4\u4EF6\u4F7F\u7528\u7684\u670D\u52A1
bootstrap //\u4E3B\u89C6\u56FE,\u6839\u7EC4\u4EF6\u3002\u53EA\u6709\u6839\u6A21\u5757\u624D\u5E94\u8BE5\u4F7F\u7528
</code></pre><p>\u6839\u6A21\u5757:\u901A\u5E38\u4E3AAppMdule,\u542F\u52A8\u5E94\u7528\u5F15\u5BFC\u673A\u5236</p><p>\u7EC4\u4EF6:@Component()\u88C5\u9970\u5668\u8868\u9762\u7C7B\u662F\u4E00\u4E2A\u7EC4\u4EF6</p><pre><code class="language-nginx">@Component({
    selector:&#39;&#39;,//\u66FF\u6362\u6389\u54EA\u4E2A\u6807\u7B7E\u7684\u5185\u5BB9\u4E3A\u6A21\u677F\u5185\u5BB9
    templateUrl:&#39;&#39;,//\u4ECE\u54EA\u79BB\u83B7\u5F97\u6A21\u677F
    providers:&#39;&#39;//\u4ECE\u54EA\u91CC\u670D\u52A1\u83B7\u5F97\u6570\u636E
})
export class ComponentName implements OnInit{}
</code></pre><p><strong>\u7BA1\u9053</strong>\uFF1A\u8FC7\u6EE4\u5668,\u628A\u6570\u636E\u8F6C\u6362\u51FA\u60F3\u8981\u7684\u5185\u5BB9,\u8FD8\u53EF\u4EE5\u8F93\u5165\u53C2\u6570</p><blockquote><pre><code class="language-nginx">&lt;p&gt;The date is {{today | date:&#39;fullDate&#39;}}&lt;/p&gt;
</code></pre></blockquote><p>\u6307\u4EE4:@Directive()\u88C5\u9970\u5668\u7684\u7C7B</p><blockquote><p>\u7ED3\u6784\u6307\u4EE4\uFF1A*ngFor *ngIf</p><p>\u5C5E\u6027\u6307\u4EE4\uFF1A\u6570\u636E\u53CC\u5411\u7ED1\u5B9A [(ngMoudel)]=&quot;hero.name&quot;\u54CD\u5E94change</p><p>\u5176\u4ED6\u9884\u5B9A\u4E49\u6307\u4EE4:\u4FEE\u6539\u5E03\u5C40\u7ED3\u6784(ngSwitch) \u4FEE\u6539DOM\u5143\u7D20\u548C\u7EC4\u4EF6\u7684\u6837\u5B50(ngStyle\u548CngClass)</p></blockquote><p>\u670D\u52A1\u7C7B:@Injectable()\u5E94\u7528\u6240\u9700\u503C\u3001\u51FD\u6570\u548C\u7279\u6027</p><blockquote><p>\u670D\u52A1<strong>\u6CE8\u5165</strong>\u5230\u7EC4\u4EF6,\u590D\u7528.</p><p><strong>\u6CE8\u5165\u5668</strong>\uFF1A\u5168\u5E94\u7528\u7EA7\u6CE8\u5165\u5668\u548C\u5176\u4ED6\u6CE8\u5165\u5668,\u4F1A\u521B\u5EFA<strong>\u4F9D\u8D56\u3001\u7EF4\u62A4\u5BB9\u5668</strong>\u6765\u7BA1\u7406\u8FD9\u4E9B\u5E94\u7528(<strong>\u5BB9\u5668:\u542B\u6709\u5404\u79CD\u4F9D\u8D56\u63CF\u8FF0</strong>)</p><p><strong>\u63D0\u4F9B\u8005</strong>\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u544A\u8BC9\u6CE8\u5165\u5668<strong>\u5982\u4F55\u83B7\u53D6\u6216\u521B\u5EFA\u4F9D\u8D56</strong></p><blockquote><p>\u6784\u9020\u5668\u58F0\u660E\u670D\u52A1\u5BF9\u8C61,\u81EA\u52A8\u68C0\u6D4B\u7C7B\u578B\u6CE8\u5165</p><pre><code class="language-nginx">constructor(private service:HeroService){}
\u5B8C\u6210\u4E86\u58F0\u660E\u548C
</code></pre><p>\u81EA\u5DF1\u58F0\u660E\u63D0\u4F9B\u8005\u6A21\u5757\u6216\u7EC4\u4EF6\u6CE8\u518C\u63D0\u4F9B\u8005</p><pre><code class="language-nginx">@Injectable({
  providedIn:&#39;root&#39;	//\u6CE8\u5165\u5230\u6839\u7EC4\u4EF6\u4E2D \u63D0\u4F9B\u8005\u7531\u54EA\u4E2A\u7EC4\u4EF6\u63D0\u4F9B
})
</code></pre></blockquote></blockquote><p><strong>\u670D\u52A1\u4E4B\u95F4\u76F8\u4E92\u4F7F\u7528</strong></p><pre><code class="language-nginx">export class HeroService(){
    private heroes:Hero[]=[];
    constructor(
        private backend:BackendService,
        private logger:Logger){}
    getHeroes(){return 0}
}
</code></pre><p><strong>\u7EC4\u4EF6\u6CE8\u518C\u670D\u52A1:\u7EC4\u4EF6\u6BCF\u4E2A\u5B9E\u4F8B\u63D0\u4F9B\u65B0\u670D\u52A1\u5B9E\u4F8B</strong></p><pre><code class="language-nginx">@Component({
  selector:    &#39;app-hero-list&#39;,
  templateUrl: &#39;./hero-list.component.html&#39;,
  providers:  [ HeroService ]//\u4E3A\u7EC4\u4EF6\u63D0\u4F9B\u6307\u5B9A\u670D\u52A1\u5B9E\u4F8B
})
</code></pre><h4>3.\u76EE\u5F55\u57FA\u672C\u7ED3\u6784\u548C\u4F7F\u7528</h4><p>.css\u63CF\u8FF0 .html\u6A21\u677F .ts\u7F16\u8BD1\u4E0A\u4E0B\u6587</p><p><strong>@Input()</strong> name \u6307\u51FA\u7236\u7EC4\u4EF6\u4F20\u5165\u5C5E\u6027\u503C \u4ECE**[name]**=\u201C\u201D\u63A5\u6536</p><p>\u4E8B\u4EF6\u54CD\u5E94</p><pre><code class="language-nginx">@Output() notify=new EventEmitter()
//\u65B0\u5EFA\u4E00\u4E2A\u4E8B\u4EF6\u53D1\u5C04\u5668\u4E3A\u8F93\u51FA\u5C5E\u6027  \u5B50\u7EC4\u4EF6
(click)=&quot;notify.emit()&quot;  \u6307\u5B9Anotify\u5BF9\u8C61\u89E6\u53D1
//\u5355\u51FB\u89E6\u53D1notify\u4E8B\u4EF6  \u5B50\u7EC4\u4EF6
(notify)=&quot;onNotify()&quot;	\u76D1\u542Cnotify \u89E6\u53D1\u4E8B\u4EF6
//\u63A5\u6536notify\u4E8B\u4EF6\u89E6\u53D1\u5E76\u6267\u884C\u76F8\u5173\u4E8B\u4EF6  \u7236\u7EC4\u4EF6
</code></pre>`,30),i=e("strong",null,"\u6570\u636E\u7ED1\u5B9A",-1),g=n(`<p>\u8F93\u5165\uFF1A\u5BFC\u5165Input Input() name\u58F0\u660E [\u50CFprops] [name]\u4F20\u5165\u503C <strong>\u7236\u4F20\u5B50</strong></p><p>\u8F93\u51FA\uFF1Anew EventEmitter\u521B\u5EFA\u4E00\u4E2AOutput()\u7C7B\u578B\u7684\u8F93\u51FA\u5BF9\u8C61 \u89E6\u53D1click</p><p>\u8C03\u7528notify.emit() (notify)\u63A5\u6536\u89E6\u53D1 \u6709\u7684\u50CFbusevent emit\u89E6\u53D1 on\u63A5\u6536</p><hr><p>[routerLink]=\u201C[\u2018/url\u2019,args]\u201D routerLink=\u201C/url\u201D</p><p><strong>\u8DEF\u7531</strong>\uFF1A app.module.ts\u5199\u8DEF\u5F84 \u5BFC\u5165{ActivatedRoute} from \u2018@angular/router\u2019 \u6784\u9020\u51FD\u6570\u58F0\u660E<strong>\u52A0\u5165\u8DEF\u7531</strong> private route:Activated\u2026 this.route.paramMap.subscribe(params=&gt;{params.get(name)}) \u904D\u5386router\u53C2\u6570\u83B7\u53D6\u503C</p><pre><code class="language-nginx">import {Routes, RouterModule } from &#39;@angular/router&#39;;
//\u8DEF\u7531\u6A21\u578B\u5BF9\u8C61\u548C\u8DEF\u7531\u529F\u80FD\u6A21\u5757
RouterModule.forRoot([//\u4F20\u5165\u4E00\u4E2A\u6A21\u578B\u5BF9\u8C61
{path:&#39;products/:productId&#39;,component:ProductDetailsComponent}])

import { ActivatedRoute } from &#39;@angular/router&#39;
import { Location } from &#39;@angular/common&#39;//\u5173\u4E8E\u6D4F\u89C8\u5668\u64CD\u4F5C
private route:ActivatedRoute,//\u8DEF\u7531\u5B9E\u4F8B\u4FE1\u606F
this.route.paramMap.subscribe(params=&gt;{
\u904D\u5386\u53C2\u6570 this.product=products[+params.get(&#39;productId&#39;)] })
this.route.snapshot.paramMap.get(&#39;id&#39;)
snapshot \u8DEF\u7531\u4FE1\u606F\u5FEB\u7167  paramMap \u4ECEURL\u63D0\u53D6\u8DEF\u7531\u53C2\u6570
location.back
</code></pre><p><strong>\u670D\u52A1</strong> @Injectable({providedIn:&#39;root\u2019\u6CE8\u5165\u5230\u6839\u7EC4\u4EF6}) \u4F9D\u8D56\u6CE8\u5165\u7CFB\u7EDF\u53C2\u4E0E\u8005 \u4F7F\u7528-&gt;\u5BFC\u5165\u670D\u52A1\u5BF9\u8C61 private cartService:\u5BF9\u8C61 \u4F9D\u8D56\u6CE8\u5165 this. cartService.\u65B9\u6CD5 \u5C31\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u4E86</p><pre><code class="language-nginx">import { CartService } from &#39;../cart.service&#39;

private cartService:CartService

this.cartService.getShippingPrices()
</code></pre><p><strong>HTTP</strong>\uFF1A\u5BFC\u5165HttpClientModule\u6A21\u5757\u4ECE @\u2026/common/http \u5199\u5728imports\u4E2D \u5728\u7EC4\u4EF6\u6216\u670D\u52A1\u4E2D\u5F15\u5165HttpClient\u6A21\u5757 \u58F0\u660E private http:HttpClient \u76F4\u63A5\u4F7F\u7528 async\u7BA1\u9053 \u4ECE\u6570\u636E\u6D41\u4E2D\u8FD4\u56DE\u6700\u65B0\u6570\u636E,\u5E76\u5728\u751F\u547D\u5468\u671F\u91CC\u6301\u7EED\u8FD4\u56DE</p><pre><code class="language-nginx">import { HttpClientModule } from &#39;@angular/common/http&#39;

imports: [HttpClientModule]//app.modues

import { HttpClient } from &quot;@angular/common/http&quot;;
private http: HttpClient
this.http.get(url)
</code></pre><p><strong>\u8868\u5355</strong> \uFF1A\u5BFC\u5165FormBuilder\u8868\u5355\u6784\u9020\u5668 \u4ECE \u2018@\u2026/forms\u2019 moudle\u7684\u8BDDreactiveFormsModule\u4E2D\u6709\u5BFC\u5165 <strong>\u58F0\u660E</strong> \u5BF9\u8C61 , \u5B9A\u4E49\u6A21\u578B\u5BF9\u8C61 -&gt;\u7528\u5BF9\u8C61.group({\u5B57\u6BB5})\u6765\u751F\u6210\u4E00\u4E2A\u6A21\u578B\u5BF9\u8C61 \u81EA\u5E26reset<strong>\u91CD\u7F6E</strong> formGroup=&quot;\u6A21\u677F\u5BF9\u8C61&quot;\u7ED1\u5B9A (ngSubmit)\u6765\u76D1\u542C\u63D0\u4EA4\u4E8B\u4EF6 formCotrolName=\u201C\u5B57\u6BB5\u540D\u201D \u7ED1\u5B9A\u5BF9\u5E94\u5C5E\u6027\u5B57\u6BB5</p><pre><code class="language-nginx">import { FormBuilder } from &#39;@angular/forms&#39;

checkoutForm //\u5B9A\u4E49
this.checkoutForm=this.formBuilder.group({
      name:&#39;&#39;,address:&#39;&#39;})
      
[formGroup]=&quot;checkoutForm&quot; (ngSubmit)=&quot;onSubmit(checkoutForm.value)&quot;
&lt;input formControlName=&quot;name&quot;&gt;
</code></pre><p><strong>\u6570\u636E\u53CC\u5411\u7ED1\u5B9A</strong>\uFF1A [(ngModel)]=\u201Chero.name\u201D</p><pre><code>import { FormsModule } from &#39;@angular/forms&#39;
imports:FormsModule
</code></pre><p><strong>\u5F02\u6B65\u64CD\u4F5C</strong> \uFF1AObservable&lt;Hero[]&gt; return of(\u5BF9\u8C61)</p><pre><code class="language-nginx">import { Observable, of } from &#39;rxjs&#39;;
getHeroes(): Observable&lt;Hero[]&gt; {return of(HEROES);}
this.heroService.getHeroes()
      .subscribe(heroes =&gt; this.heroes = heroes);
</code></pre><p>\u5BFC\u5165\u6A21\u5757 \u58F0\u660Epublic \u53EF\u4EE5\u76F4\u63A5\u5728\u6A21\u677F\u4E0A\u5F15\u7528\u6A21\u5757\u5C5E\u6027\u548C\u65B9\u6CD5</p><p><strong>Web API</strong> \u6A21\u62DF\u670D\u52A1\u5668\u6570\u636E\u54CD\u5E94</p><pre><code class="language-nginx">---\u6A21\u62DF\u6570\u636E\u90E8\u7F72
npm install angular-in-memory-web-api --save
import { HttpClientInMemoryWebApiModule } from &#39;angular-in-memory-web-api&#39;//\u5BFC\u5165
imports\u914D\u7F6E: HttpClientInMemoryWebApiModule.forRoot(
		InMemoryDataService,{dataEncapsulation:false}
	)
ng generate service InMemoryData
...implements InMemoryDbService  
\u53EF\u4EE5\u76F4\u63A5\u5199\u65B9\u6CD5\u4E86 createDb()\u5FC5\u987B \u521B\u5EFA\u6570\u636E\u5E93 \u8FD4\u56DE\u4E00\u4E2A\u96C6\u5408\u5BF9\u8C61
:base/:collectionName  api/heroes \u8BFB\u53D6\u96C6\u5408\u5BF9\u8C61
---\u8BF7\u6C42
import { HttpClient, HttpHeaders } from &#39;@angular/common/http&#39;//\u5BFC\u5165 \u5B9E\u4F8B\u5316\u4F9D\u8D56\u6CE8\u5165
this.http.get&lt;Hero[]&gt;(url) of\u548Cget \u90FD\u8FD4\u56DEObservable\u5BF9\u8C61 of
</code></pre><p>\u9519\u8BEF\u5904\u7406catchError()</p><pre><code class="language-nginx">import { catchError, map ,tap} from &#39;rxjs/operators&#39;
	.pipe(
tap(_=&gt;this.log())\u76D1\u542CObservable\u751F\u547D\u5468\u671F  \u5B8C\u6210\u4E00\u4E9B\u6267\u884C\u540E\u8BB0\u5F55
catchError(this.handleError&lt;Hero[]&gt;(&#39;getHeroes&#39;,[]))) //catchError \u4F1A\u628A\u9519\u8BEF\u5BF9\u8C61\u4F20\u7ED9\u9519\u8BEF\u5904\u7406\u5668 
		handleError\u62A5\u544A\u9519\u8BEF\uFF0C\u5E76\u8FD4\u56DE\u7ED3\u679C
http\u5E38\u89C4\u65B9\u6CD5
.get :baseURL/:id  \u6839\u636EID\u83B7\u53D6\u8FDB\u884C\u83B7\u53D6
	:baseURL/?name=\${} \u6839\u636E\u540D\u5B57\u83B7\u53D6\u6570\u636E
.put :baseURL \u4FEE\u6539\u540E\u7684\u6570\u636E  \u914D\u7F6E\u9009\u9879
.post :baseURl \u4FDD\u5B58\u7684\u6570\u636E \u914D\u7F6E\u9009\u9879
.post :baseURL/:id \u5220\u9664\u6570\u636E \u914D\u7F6E\u9009\u9879
</code></pre><p>subscribe() \u548C Observable() \u8BA2\u9605\u8005\u548C\u89C2\u5BDF\u8005 \u89C2\u5BDF\u8005\u6CA1\u6709\u8BA2\u9605\u4E0D\u4F1A\u89E6\u53D1 heroes$ \u58F0\u660Eheroes\u4E3A\u89C2\u5BDF\u8005Obser \u800C\u4E0D\u662F\u6570\u7EC4 | async AsyncPipe\u7BA1\u9053\u4F1A\u81EA\u52A8\u8BA2\u9605Observable</p><pre><code class="language-nginx">heroes$ |async
import { 
	debounceTime, distinctUntilChanged, switchMap 
	} from &#39;rxjs/operators&#39;
import { Observable, Subject} from &#39;rxjs&#39;
heroes$: Observable&lt;Hero[]&gt;
private searchTerms = new Subject&lt;string&gt;();

this.searchTerms.next(term) //\u7A33\u5B9A\u7684\u6D41 \u653E\u5165\u65B0\u8FC7\u6EE4\u6761\u4EF6
this.heroes$=this.searchTerms.pipe(
debounceTime(300), //\u7B49\u5F85\u5230\u64CD\u4F5C\u95F4\u9694\u5927\u4E8E300ms
//\u6761\u4EF6\u53D8\u5316\u4E14\u5927\u4E8E300ms\u53D1\u9001\u8BF7\u6C42
distinctUntilChanged(), //\u5728\u8FC7\u6EE4\u6761\u4EF6\u53D8\u5316\u65F6\u624D\u53D1\u9001\u8BF7\u6C42
//\u89C2\u5BDF\u8005\u88AB\u8BA2\u9605\u8005async\u89E6\u53D1 \u6761\u4EF6\u6CA1\u53D8  \u4E0D\u53D1\u9001\u8BF7\u6C42
switchMap((term:string)=&gt;this.heroService.searchHeroes(term) 
//\u4F7F\u7528\u6700\u8FD1\u7684\uFF0C\u5176\u4ED6\u7528\u8FC7\u7684\u4E22\u5F03 
//\u4E0D\u4F1A\u4E2D\u6B62\u8BF7\u6C42  \u4E0D\u8981\u7684\u7ED3\u679C\u4F1A\u62B5\u8FBE\u524D\u820D\u5F03 \u53EA\u53D6\u6700\u540E\u4E00\u4E2A))
</code></pre><p>#name \u5F15\u7528\u5F53\u524D\u5143\u7D20 #name=&#39;ngForm\u2019\u7528\u5728\u8868\u5355\u4E0A \u628A\u6570\u636E\u96C6\u6210\u5728#\u5F15\u7528\u91CC</p><h4>\u751F\u547D\u5468\u671F</h4><pre><code class="language-nginx">\u6784\u9020\u51FD\u6570\u9996\u5148
ngOnChanges() //\u6570\u636E\u53D1\u751F\u53D8\u5316\u4E4B\u65F6\u5C31\u4F1A\u8C03\u7528\u6B64\u51FD\u6570	\u7236\u5B50\u7EC4\u4EF6\u4F20\u503C\u65F6\u89E6\u53D1
ngOnInit()  //\u521D\u59CB\u5316,\u7B2C\u4E00\u6B21\u663E\u793A\u6570\u636E\u7ED1\u5B9A\u548C\u6307\u4EE4\u8F93\u5165\u5C5E\u6027\u4E4B\u540E
ngDoCheck()	//\u5728\u521D\u59CB\u5316,\u6570\u636E\u53D1\u751F\u53D8\u5316\u4E4B\u540E\u8FDB\u884C\u4E00\u6B21\u68C0\u6D4B
ngAfterContentInit()	//	\u6570\u636E\u5185\u5BB9\u6E32\u67D3\u5728\u9875\u9762\u4E0A\u89E6\u53D1
ngAfterContentChecked()	//\u6570\u636E\u5185\u5BB9\u6E32\u67D3\u5230\u89C6\u56FE\u68C0\u6D4B\u4E4B\u540E
ngAfterViewInit()	//\u5B8C\u6210\u7EC4\u4EF6\u548C\u5B50\u7EC4\u4EF6\u521D\u59CB\u5316
ngAfterViewChecked()	//\u5B8C\u6210\u7EC4\u4EF6\u548C\u5B50\u7EC4\u4EF6\u521D\u59CB\u5316\u540E\u68C0\u6D4B
ngOnDestory()	//\u9500\u6BC1\u7EC4\u4EF6
</code></pre>`,27),b={__name:"Angular",setup(l,{expose:t}){return t({frontmatter:{}}),(m,d)=>(a(),r("div",s,[c,e("p",null,[i,o("\uFF1A"+p()+" [name] \u4F20\u5165\u503C (click)\u7ED1\u5B9A\u4E8B\u4EF6 ([name])\u53CC\u5411\u7ED1\u5B9A",1)]),g]))}};export{b as default};
