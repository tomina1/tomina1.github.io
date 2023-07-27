import{c as t,o as r,a as o}from"./index.99d27838.js";const n={class:"markdown-body"},c=o(`<p><strong>\u5F15\u5165</strong> \u501F\u9274redux\u72B6\u6001\u7BA1\u7406\u6A21\u5F0F \u914D\u4E0Arxjs\u6D41\u5F0F\u7F16\u7A0B <strong>\u72B6\u6001\u7BA1\u7406\u4E09\u4E2A\u539F\u5219</strong> Single source of truth(\u5355\u4E00\u72B6\u6001\u5BF9\u8C61) object tree\u5BF9\u8C61\u6811 \u5B58\u50A8\u65B9\u5F0F state is read-only(\u72B6\u6001\u53EA\u80FD\u662F\u53EA\u8BFB\u5F62\u5F0F) changes are made with pure functions(\u901A\u8FC7\u51FD\u6570\u6765\u6539\u53D8\u72B6\u6001) \u901A\u8FC7reducer(\u805A\u5408\u5668)\u4FEE\u6539\u72B6\u6001</p><p><strong>\u5B89\u88C5</strong></p><pre><code class="language-nginx">npm install @ngrx/store or yarn add @ngrx/store
</code></pre><p><strong>\u914D\u7F6E</strong> \u521B\u5EFAstate(\u72B6\u6001), action(\u65B9\u6CD5), reducer(\u5224\u65AD\u51B3\u7B56\u51FD\u6570) function(state, action) switch(action.type) \u6765\u5224\u65AD\u64CD\u4F5C</p><p><strong>\u6CE8\u518Cstore</strong></p><pre><code class="language-nginx">import { StoreModule } from &#39;@ngrx/store&#39;
imports:[StoreModule.forRoot({count:function})]  //\u628A\u51B3\u7B56\u51FD\u6570\u8DDF\u72B6\u6001\u7BA1\u7406\u5668\u5173\u8054
</code></pre><p><strong>\u4F7F\u7528store</strong></p><pre><code class="language-nginx">import { Store, select, createAction } from &#39;@ngrx/store&#39;
constructor(private store:Store&lt;&gt;){this.count$=store.pipe(select(&#39;count&#39;))}
this.store.dispatch({type: EventName}/eN)/eN=createAction(&#39;&#39;)		//\u66F4\u6539\u72B6\u6001
</code></pre><p>\u975E\u751F\u4EA7\u6A21\u5F0F\u8FD0\u884C\u51BB\u7ED3</p><pre><code class="language-nginx">StoreModule.forRoot(reducers, {metaReducers})
export const metaReducers: MetaReducer&lt;State&gt;[] = environment.production ? [] : [storeFreeze];
</code></pre><p>effect\u662F\u53EF\u4EE5\u76D1\u542Caction\u7684\u4E00\u4E2A\u6D41</p><p>\u7F16\u5199action \u52A8\u4F5C \u5DF2\u4FBF\u4E8E\u7B80\u5316\u52A8\u4F5C\u8F6C\u6362</p><pre><code class="language-nginx">import { createAction, props } from &#39;@ngrx/store&#39;;
export const login= createAction(&#39;eName&#39;,props&lt;{username:string;pwd:string}&gt;())
store.dispatch(login({username:,pwd:,}))
\u8FD4\u56DE\u5C31\u662F\u4E00\u4E2A\u5BF9\u8C61{type:&#39;name&#39;,username:,pwd}
</code></pre><p>reducer \u52A8\u4F5C\u76D1\u542C\u5668</p><pre><code class="language-nginx">import { Action, createReducer, on } from &#39;@ngrx/store&#39;;
import * as actions from &#39;../actions/scoreboard-page.actions&#39;;
export interface State { home: number;away: number;}
export const initialState: State = { home: 0,away: 0,};//\u5B9A\u4E49\u6A21\u578B\u5E76\u521D\u59CB\u5316
const reducers=createReducer(initialState,on(actions.e,state=&gt;   on 1\u6216\u591A\u4E2A\u52A8\u4F5C
(...state,home:state.home+1)))
export function reducer(state:State | undefined ,action:Action){reducers(s,a)}

</code></pre><p>\u5168\u5C40\u6CE8\u518C</p><pre><code>import { StoreModule } from &#39;@ngrx/store&#39;;
import { reducer } from &#39;&#39;
StoreModule.forRoot({game:reducer})
</code></pre><p>\u6CE8\u518C\u529F\u80FD\u72B6\u6001</p><pre><code class="language-nginx">export const reducerName=&#39;game&#39;
import { StoreModule } from &#39;@ngrx/store&#39;;		xxx.module.ts
import * as reducer from &#39;&#39;
StoreModule.forFeature(reducer.reducerName,reducer.reducer)
imports:[ xxx.module ~ xxxModule ]	appModule
</code></pre><p>selector:\u6709\u70B9\u50CFcomputed</p><pre><code class="language-nginx">import { createSelector } from &#39;@ngrx/store&#39;;
interface user/book/Appstate{selectedUser:user;allBooks:book}
selectUser/selectAllbooks=(state:AppState)=&gt;state.selectedUser/book\u4F20\u8FC7\u6765\u6A21\u578B\u72B6\u6001
export const selectVisibleBooks=createSelector(arg1,arg2,(arg1:User,book:)={
	\u64CD\u4F5C\u540E\u8FD4\u56DE\u65B0\u503C
})
\u9644\u52A0\u53C2\u6570  (arg1,arg2,(,props)=&gt;{props.a})
.release()\u6E05\u9664\u6240\u6709\u9009\u62E9\u5668(\u548C\u7956\u5148)

</code></pre><p>Meta-reducers\uFF1A\u94A9\u5B50\u51FD\u6570 action-&gt;reducer\u7684\u94A9\u5B50 \u9884\u5904\u7406</p><pre><code class="language-nginx">import { StoreModule, ActionReducer, MetaReducer } from &#39;@ngrx/store&#39;;
import { reducers } from &#39;./reducers&#39;;
export function debug(reducers:ActionReducer&lt;any&gt;):ActionReducer&lt;any&gt;{
	return fun(state,action)=&gt;clog()  return reducer(state,action)
}
export const metaReducers:MetaReducer&lt;any&gt;[]=[debug]
</code></pre><p>\u6CE8\u5165\u51CF\u901F\u5668</p><pre><code class="language-nginx">import { NgModule, InjectionToken* } from &#39;@angular/core&#39;;
import { StoreModule, ActionReducerMap* } from &#39;@ngrx/store&#39;;
//\u6839\u7EA7\u522B
export const REDUCER_TOKEN = new InjectionToken&lt;ActionReducerMap&lt;fromRoot.State&gt;&gt;(&#39;Registered Reducers&#39;, {
  factory: () =&gt; {
    const serv = inject(SomeService);
    // return reducers synchronously
    return serv.getReducers();
  }
});
imports: [StoreModule.forRoot(REDUCER_TOKEN)]
//\u901A\u8FC7\u7279\u5F81\u6A21\u5757\u7EC4\u6210\u72B6\u6001\u65F6\uFF0C\u4E5F\u4F1A\u6CE8\u5165reducers\u3002..
//\u6CE8\u5C04Meta-Reducers
import { MetaReducer, META_REDUCERS } from &#39;@ngrx/store&#39;;

export function metaReducerFactory(): MetaReducer&lt;fromRoot.State&gt; {
  return (reducer: ActionReducer&lt;any&gt;) =&gt; (state, action) =&gt; {
    console.log(&#39;state&#39;, state);
    console.log(&#39;action&#39;, action);
    return reducer(state, action);
  };
}
providers: [
    {
      provide: META_REDUCERS,
      deps: [SomeService],
      useFactory: metaReducerFactory,
      multi*: true,//\u53EF\u80FD\u88AB\u8BB8\u591A\u5E93\u540C\u65F6\u4F7F\u7528  \u91CD\u8981
    },
  ],
//\u6CE8\u5165\u529F\u80FD\u914D\u7F6E
import { StoreModule, StoreConfig } from &#39;@ngrx/store&#39;; 
export const FEATURE_CONFIG_TOKEN = new InjectionToken&lt;StoreConfig&lt;fromFeature.State&gt;&gt;(&#39;Feature Config&#39;);
 
export function getConfig(someService: SomeService): StoreConfig&lt;fromFeature.State&gt; {
  // return the config synchronously.
  return {
    initialState: someService.getInitialState(),
 
    metaReducers: [
      fromFeature.loggerFactory(someService.loggerConfig())
    ]
  };
}
imports: [StoreModule.forFeature(fromFeature.featureKey, fromFeature.reducers, FEATURE_CONFIG_TOKEN)],
  providers: [
    {
      provide: FEATURE_CONFIG_TOKEN,
      deps: [SomeService],
      useFactory: getConfig,
    },
  ],
</code></pre><p>\u8FD0\u884C\u65F6\u68C0\u67E5</p><pre><code>StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,		\u9A8C\u8BC1\u72B6\u6001\u662F\u5426\u53D1\u751F\u7A81\u53D8\u3002
        strictActionImmutability: true,		\u786E\u8BA4\u52A8\u4F5C\u6CA1\u6709\u7A81\u53D8
        strictStateSerializability: true,	\u9A8C\u8BC1\u72B6\u6001\u662F\u5426\u53EF\u5E8F\u5217\u5316
        strictActionSerializability: true,	\u9A8C\u8BC1\u64CD\u4F5C\u662F\u5426\u53EF\u5E8F\u5217\u5316
        strictActionWithinNgZone: true,		\u9A8C\u8BC1\u64CD\u4F5C\u662F\u5426\u5728NgZone\u4E2D\u8C03\u5EA6
        strictActionTypeUniqueness: true,	\u9A8C\u8BC1\u6CE8\u518C\u7684\u64CD\u4F5C\u7C7B\u578B\u662F\u5426\u552F\u4E00
      },
    }),
1.\u4E25\u683C\u72B6\u6001\u4E0D\u53EF\u53D8\u6027  \u4E0D\u80FD\u76F4\u63A5\u8D4B\u503C	state.todoInput = &#39;&#39;, ...state,todoInput: &#39;&#39;,
2.strictAction\u4E0D\u53EF\u53D8\u6027	todo.id = generateUniqueId();   \u5728\u7F16\u5199action\u65F6\u8BBE\u7F6E
3.strictStateSerializability \u662F\u5426\u53EF\u5E8F\u5217\u5316	completedOn: new Date(),  +.toJSON()
4.strictActionSerializability\u64CD\u4F5C\u662F\u5426\u53EF\u5E8F\u5217\u5316	\u4E0D\u8981\u5728\u64CD\u4F5C\u4E0A\u6DFB\u52A0\u529F\u80FD,\u56E0\u4E3A\u53EF\u4EE5\u5355\u72EC\u5199
	createAction(&#39;&#39;,todo=&gt;{todo=&gt;{}})
5.\u9A8C\u8BC1Action\u662F\u7531\u5728\u4E2D\u8FD0\u884C\u7684\u5F02\u6B65\u4EFB\u52A1\u8C03\u5EA6\u7684NgZone \u4E4B\u5916\u7684\u4EFB\u52A1\u8C03\u5EA6\u64CD\u4F5C\u4E0D\u89E6\u53D1ChangeDetection
	\u624B\u52A8 this.ngZone.run(()=&gt;{\u64CD\u4F5C})  \u5F3A\u5236\u8BC6\u522B
6.\u68C0\u67E5\u5BF9\u4F60\u6CE8\u518C\u76F8\u540C\u7684\u52A8\u4F5C\u7C7B\u578B\u4E0D\u6B62\u4E00\u6B21  
</code></pre><p>Testing\u6D4B\u8BD5 <a href="https://ngrx.io/guide/store/testing">https://ngrx.io/guide/store/testing</a></p><p>selectors\u9009\u62E9\u5668 \u8DDFcomputed\u8BA1\u7B97\u5C5E\u6027\u5DEE\u4E0D\u591A \u4F1A\u8BB0\u5FC6</p><pre><code class="language-nginx">import { createSelector, createFeatureSelector } from &#39;@ngrx/store&#39;;  						\u5207\u7247\u5C31\u662F\u72B6\u6001\u91CC\u7684\u6BCF\u4E00\u9879
\u53D6\u529F\u80FD\u7247\u7684\u4E00\u4E9B\u53C2\u6570
export const selectVisibleBooks = createSelector(selectUser, selectAllBooks, (selectedUser: User, allBooks: Books[])//\u4F20\u5165\u72B6\u6001\u91CC\u591A\u4E2A\u5207\u7247\u9009\u62E9\u6570\u636E \u56DE\u8C03\u8FD4\u56DE
\u53D6\u529F\u80FD\u7247						(state:State)=&gt;state.User
export const selectFeature =//\u672C\u6765\u662F\u4ECE\u72B6\u6001\u91CC\u53D6\u72B6\u6001\u529F\u80FD\u7247
createFeatureSelector&lt;FeatureState&gt;(&#39;feature&#39;);\u76F4\u53D6\u5BF9\u5E94k\u7684\u7247

\u91CD\u7F6E\u9009\u62E9\u5668\u8BB0\u5FC6	selectTotal.release()
constructor(private store: Store&lt;fromRoot.AppState&gt;)
this.counter = store.select(fromRoot.selectFeatureCount);
\u901A\u8FC7\u5BFC\u5165store\u7528select\u65B9\u6CD5\u9009\u62E9\u4E00\u4E2A\u9009\u62E9\u5668\u8C03\u7528
</code></pre><p>Store\u6CE8\u5165\u5230\u7EC4\u4EF6\u6216\u670D\u52A1,\u4F7F\u7528store.select \u9009\u62E9\u72B6\u6001\u5207\u7247</p><pre><code>constructor(private store: Store&lt;AppState&gt;){
		this.counter = store.select(&#39;counter&#39;);}
this.store.dispatch({type:&#39;eName&#39;}) \u89E6\u53D1action\u4E8B\u4EF6
</code></pre><p>Actions</p><pre><code class="language-nginx">import { Action } from &#39;@ngrx/store&#39;;
export class AddUsers implements Action {
  readonly type = ADD_USERS;//\u5B9E\u73B0\u65B9\u6CD5 \u5B9A\u4E49\u53C2\u6570\u4E3Ausers\u5B9E\u4F8B\u5BF9\u8C61

  constructor(public payload: { users: User[] }) {}}
</code></pre><p>Effects</p><pre><code class="language-ts">\u76D1\u542C@ngrx/store\u53D1\u51FA\u7684\u64CD\u4F5C  \u5C06\u526F\u4F5C\u7528\u4E0E\u7EC4\u4EF6\u9694\u79BB  \u63D0\u4F9B\u65B0\u884C\u52A8\u6765\u6E90 \u4EA4\u4E92
	\u5982\u7F51\u7EDC\u8BF7\u6C42\u3001web\u5957\u63A5\u5B57\u6D88\u606F\u548C\u57FA\u4E8E\u65F6\u95F4\u7684\u4E8B\u4EF6
ofType\u7B5B\u9009\u9009\u62E9\u64CD\u4F5C\u7C7B\u578B \u4EE5\u4FBF\u4E8E\u52A8\u4F5C\u5BF9\u5E94\u64CD\u4F5C
@Effect({ dispatch: false }\u963B\u6B62\u8C03\u5EA6) authActions$ = this.action$.ofType&lt;LoginAction | LogoutAction&gt;(&#39;LOGIN&#39;, &#39;LOGOUT&#39;).do(action=&gt;{})
Utilities
@Effect() authActions$ = this.action$.ofType(&#39;LOGIN&#39;, &#39;LOGOUT&#39;).map(action=&gt;action.payload).do(payload=&gt;{})
\u6620\u5C04\u5230action\u91CC\u7684payload \u4F20\u7ED9do
{mergeEffects} from  \u5408\u5E76\u6240\u6709\u6548\u679C\u4E3A\u4E00\u4E2A\u53EF\u89C2\u5BDF\u5BF9\u8C61
constructor(effects:SomeEffectsClass){
	mergeEffects(effects).subscribe(result=&gt;{clog(result)})
}
</code></pre>`,36),s=[c],g={__name:"Angular-ngrx-store",setup(a,{expose:e}){return e({frontmatter:{}}),(p,u)=>(r(),t("div",n,s))}};export{g as default};
