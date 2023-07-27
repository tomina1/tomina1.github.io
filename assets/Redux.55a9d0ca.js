import{c as e,o,a as n}from"./index.99d27838.js";const s={class:"markdown-body"},r=n(`<h2>\u57FA\u7840</h2><h4>Action\uFF1A\u8981\u6267\u884C\u7684\u52A8\u4F5C\uFF0C\u7528dispatch\u89E6\u53D1</h4><pre><code class="language-js">// action\u521B\u5EFA\u51FD\u6570
function addTo(){
	return {
		type: action_name,
        ...args
	}
}
// \u7ED1\u5B9A\u7684\u521B\u5EFA\u51FD\u6570
boundAddTodo = text =&gt; dispatch(addTodo(text))
</code></pre><h4>Reducer(state, action)\uFF1Astate \u52A8\u4F5C\u5BF9\u5E94\u7684\u5904\u7406\u8FC7\u7A0B</h4><pre><code class="language-js">// reducer\u4E3A\u7EAF\u51FD\u6570\uFF0C\u4E0D\u8981\u4FEE\u6539\u4F20\u5165\u53C2\u6570\u3002\u4E0D\u8981\u6267\u884C\u526F\u4F5C\u7528\u64CD\u4F5C\uFF0C\u5982API\u8BF7\u6C42\u548C\u8DEF\u7531\u8DF3\u8F6C\u3002\u4E0D\u8981\u4F7F\u7528\u975E\u7EAF\u51FD\u6570\uFF0C\u5982Date.now()\u6216Math.random()
// \u9ED8\u8BA4\u4E3Aundefined\uFF0C\u521D\u59CB\u5316\u72B6\u6001\uFF0C\u4E0D\u8981\u76F4\u63A5\u6539\u53D8state
function todoApp(state = initialState, action) {}
// \u62C6\u5206reducer\uFF0C\u5E76\u5728\u62C6\u5206\u540E\u4F20\u5165\u5BF9\u5E94\u7684\u64CD\u4F5C\u6570\u636E\uFF0Ctodos(state.todos, action)
todoApp = combineReducers({ visibilityFilter, todos })	//\u76F8\u5F53\u4E8E\u628A\u5BF9\u5E94\u7684\u72B6\u6001\u6A21\u5757\u4F20\u5165\u5BF9\u5E94\u7684Reducer\u4E2D
return { visibilityFilter: visibilityFilter(state.visibilityFilter, action) }
</code></pre><h4>Store\uFF1A1.getState()\u83B7\u53D6\u5B9E\u4F8B\u30022.dispatch(action)\u66F4\u65B0\u30023.subscribe(listener)\uFF1Ainstance \u6CE8\u518C\u5E76\u901A\u8FC7\u8FD4\u56DE\u9500\u6BC1\u76D1\u542C\u5668</h4><pre><code class="language-js">// \u53EF\u4EE5\u521D\u59CB\u5316state\uFF0C\u4E0E\u670D\u52A1\u5668\u4FDD\u6301\u4E00\u81F4
let store = createStore(todoApp, initialState?)	
// \u5F00\u59CB\u76D1\u542Cstate\u66F4\u65B0
const unsubscribe = store.subscribe(() =&gt; console.log(store.getState()))
// \u53D1\u8D77\u52A8\u4F5C
store.dispatch(addTodo(&#39;Learn about actions&#39;))
// \u505C\u6B62\u76D1\u542Cstate\u66F4\u65B0
unsubscribe()	
</code></pre><h4>\u642D\u914DReact</h4><pre><code class="language-js">// Link \u9700\u8981\u5BF9\u5E94\u7684\u4E8B\u4EF6\u548C\u5C5E\u6027\u4ECEPorp\u4F20\u5165\uFF0C\u8DDFstate\u5173\u8054
// connect\u5C31\u662F\u8C03\u7528\u65B9\u6CD5\u4F20\u5165((state, ownProps), (dispatch, ownProps))\u8FD4\u56DEProp\u5BF9\u8C61\u5E76\u5BF9\u7EC4\u4EF6\u8FDB\u884C\u7ED1\u5B9A
import { connect } from &quot;react-redux&quot;
// \u6839\u636Estate\u7684filter\u8FDB\u884Cactive\u5224\u65AD
const mapStateToProps = (state, ownProps) =&gt; {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}
// \u6839\u636Estate\u7684filter\u8FDB\u884C\u6570\u636E\u7B5B\u9009
const mapDispatchToProps = (dispatch, ownProps) =&gt; {
  return {
    onClick: () =&gt; {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
export default FilterLink
</code></pre><h2>\u9AD8\u7EA7</h2><h4>\u5F02\u6B65Action</h4><pre><code class="language-js">// \u5F02\u6B65API\u9700\u8981\u5BF9\u5E94\u81F3\u5C11\u4E09\u79CDaction,\u8981\u4E48\u5BF9\u5E94type\u52A0\u540E\u7F00\uFF0C\u6216\u8005\u52A0\u4E2A\u72B6\u6001\u7801
let action = {
    type: &quot;FETCH_POSTS&quot; | \`FETCH_POSTS_\${status}\`,
    status?: &quot;error&quot; | &quot;success&quot; | &quot;start&quot;
}
import { applyMiddleware } from &#39;redux&#39;	// applyMiddleware\u4F7F\u7528\u4E2D\u95F4\u4EF6
// \u7528\u6765\u5305\u88C5dispatch\u65B9\u6CD5\uFF0C\u4F7F\u5176\u9644\u52A0\u4E00\u4E9B\u5982\u51FD\u6570\u6216\u8005Promise\uFF0C\u6216\u62E6\u622APromise\u5F02\u6B65\u4E00\u5BF9begin\u3001end\u7684actions
</code></pre><h4>Middleware\uFF1A\u4E2D\u95F4\u4EF6</h4><p>\u5404\u79CD\u5728\u5F00\u59CB\u5230\u7ED3\u675F\u4E4B\u95F4\u7684\uFF0C\u5BF9\u6570\u636E\u8FDB\u884C\u5404\u79CD\u52A0\u5DE5\uFF0C\u5E76\u4EE5\u94FE\u5F0F\u7684\u65B9\u5F0F\u8FDB\u884C\u3002</p><p>\u8BB0\u5F55\u95EE\u9898</p><p>1.\u662F\u624B\u52A8\u524D\u540E\u6DFB\u52A0\u8BB0\u5F55</p><p>2.\u5C01\u88C5dispatch\uFF0C\u524D\u540E\u6DFB\u52A0\u8BB0\u5F55</p><p>3.\u76F4\u63A5\u8986\u5199\u539Fdispatch\u65B9\u6CD5</p><p>4.\u8FD4\u56DE\u4E00\u4E2A\u65B0dispatch\u65B9\u6CD5\uFF0C\u6267\u884C\u524D\u540E\u5E76\u8BB0\u5F55\uFF0C\u904D\u5386\u4E2D\u95F4\u4EF6\uFF0C\u5FAA\u73AF\u5305\u4E00\u5C42\u8BB0\u5F55\u65B9\u5F0F</p><p>5.\u4EE5\u65B9\u6CD5\u53C2\u6570\u7684\u5F62\u5F0F\u63A5\u6536\u4E00\u4E2Anext()\u65B9\u6CD5\uFF0C\u5B9E\u73B0\u94FE\u5F0F\u8C03\u7528\u7684\u6548\u679C\uFF0C\u8C03\u7528\u4E24\u6B21\u65B9\u6CD5\uFF0C\u628A\u5F53\u524Dstore\u548C\u4E0A\u4E00\u4E2Adispatch\u4F20\u5165\uFF0C\u4EE5\u514D\u5F02\u6B65\u4E2D\u95F4\u4EF6\u5F71\u54CD\u987A\u5E8F</p><h4>\u5F02\u6B65 dispatch</h4><p>redux-thunk\uFF1Amiddleware\u7F16\u5199\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\u7684action creator\uFF0C\u5C31\u662F\u63A8\u8FDFaction\uFF0C\u53EF\u8FDB\u884C\u5224\u65AD\u3002</p><pre><code class="language-js">function (){ return (dispatch, getState) =&gt; dispatch() }
</code></pre><p>redux-saga\uFF1A\u8BA9\u5E94\u7528\u7684\u201C\u526F\u4F5C\u7528\u201D\u7684\u6267\u884C\u66F4\u65B9\u4FBF\u9AD8\u6548\u3002</p><p>redux-observable\uFF1Adispatch\u51FD\u6570\uFF0C\u8FD4\u56DEObservable\u3001promise\u3001\u6216iterable\u5BF9\u8C61\uFF0C\u4E14\u5BF9\u8C61\u8FD4\u56DE\u4E00\u4E2AAction\uFF0C\u624D\u4F1A\u6B63\u5E38\u6267\u884C</p><h4>\u53EF\u8BB0\u5FC6\u7684Selectors\uFF1Areselect</h4><p>\u7EC4\u4EF6\u66F4\u65B0\u6240\u6709\u503C\u90FD\u91CD\u65B0\u8BA1\u7B97\uFF0C\u4F46 Selector \u7C7B\u4F3C Computed</p><pre><code class="language-js">const getVisibilityFilter = state =&gt; state.visibilityFilter
const getTodos = state =&gt; state.todos
export const getVisibleTodos = createSelector(
    [getVisibilityFilter, getTodos],	// input-selectotrs\uFF0C\u4F9D\u8D56\u7684\u6570\u636E\u6E90\uFF0C\u53D8\u5316\u5C31\u8FDB\u5165\u51FD\u6570\u91CD\u65B0\u5904\u7406
    (visibilityFilter, todos) =&gt; {		// \u6309\u987A\u5E8F\u4F20\u5165\u5904\u7406\uFF0C\u8FD4\u56DE\u53EF\u8BB0\u5FC6\u7684 selector
        switch(visibilityFilter){}
    }
)

// \u7EC4\u5408 Selector\uFF0C\u4F7F\u7528\u5176\u4ED6\u53EF\u8BB0\u5FC6\u7247\uFF0C\u4F5C\u4E3A\u6570\u636E\u6E90
// \u4F7F\u7528 key: getVisibleTodos(state)
</code></pre><p>\u5728 selector \u4E2D\u8BBF\u95EEprops\uFF1A \u521B\u5EFA\u8BB0\u5FC6\u7247\u5E94\u4E3A\u4E00\u4E2A\u51FD\u6570\u8FD4\u56DE\uFF0C\u4E0D\u7136\u5171\u7528\u4E14\u4F20\u5165\u4E0D\u540C\u53C2\u6570\uFF0C\u5BFC\u81F4\u5176\u53CD\u590D\u8BA1\u7B97\u3002 connect \u7684 mapStateToProps \u8FD4\u56DE\u7684\u4E0D\u662F\u5BF9\u8C61\u800C\u662F\u51FD\u6570\uFF0C\u5219\u4F1A\u4E3A\u6BCF\u4E2A\u5BB9\u5668\u521B\u5EFA\u5355\u72EC\u7684 mapStateToProps \u51FD\u6570\uFF0C\u8BB0\u5FC6\u7247\u53D8\u6210\u95ED\u5305</p><h4>Reducer enhancer \u63A5\u6536reducer\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8FD4\u56DE\u65B0\u7684reducer\uFF0C\u76F8\u5F53\u4E8E\u7ED9\u5B83\u9644\u52A0\u4E00\u4E9B\u5176\u4ED6action\uFF0C\u8FDB\u884C\u4E8C\u6B21\u5305\u88C5\u3002</h4><p>combineReducers()\u540C\u6837\u63A5\u6536\u591A\u4E2Areducer\u5E76\u8FD4\u56DE\u65B0\u7684reducer\u3002</p><p>\u5728undoable\u51FD\u6570\u4E2D\uFF0C\u9644\u52A0UNDO\u3001REDO \u7684 action\uFF0C\u5176\u4ED6\u7684\u653E\u7ED9\u539F\u6709\u7684 reducer\uFF0C\u5E76\u5728\u6B64\u521D\u59CB\u5316state</p><h4>Redux \u4EE3\u7801\u5206\u5272</h4><p>store.replaceReducer(newRootReducer)\uFF1A\u66FF\u6362\u5F53\u524D\u6D3B\u52A8\u7684 reducer\u3002</p><p>store.injectReducer\uFF1A\u6CE8\u5165 Reducer\uFF0C\u8BB0\u4F4F\u5185\u5BB9\uFF0C\u5728\u8C03\u7528\u65F6\u65B0\u589E\u5E76\u521B\u5EFA\u65B0\u7684 Reducer\uFF0C\u7136\u540E\u66FF\u6362\u5F53\u524D\u6D3B\u52A8\u7684 Reducer\u3002</p><p>Reducer Manager\uFF1A\u521B\u5EFA\u7BA1\u7406\u5BF9\u8C61\uFF0Cadd\uFF1A\u5F80\u6620\u5C04\u4E2D\u6DFB\u52A0\u5E76combine\u5408\u6210\u65B0\u7684\u5BF9\u8C61\u7F13\u5B58\uFF0Cremove\uFF1A\u5220\u9664\u6620\u5C04\u5E76\u6DFB\u52A0\u5230\u79FB\u9664\u961F\u5217\u4E2D\uFF0C\u751F\u6210\u3002reduce\uFF1A\u6E05\u7406\u5DF2\u79FB\u9664\u5BF9\u5E94\u7684state\uFF0C\u5E76\u6E05\u7A7A\u8FD4\u56DE\u5408\u6210Reducer\u3002</p>`,36),a=[r],u={__name:"Redux",setup(i,{expose:t}){return t({frontmatter:{}}),(p,d)=>(o(),e("div",s,a))}};export{u as default};