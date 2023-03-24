
const root=ReactDOM.createRoot(document.getElementById('root'));


const parent=React.createElement('div',
{id:'parent'},
[React.createElement('div',
{id:'child'},
[React.createElement('h1',
{id:'hehe'},'im h1 tag'),
React.createElement('h1',
{id:'h2o'},
"2nd heading ")])
,
React.createElement('div',
{id:'child'},
[React.createElement('h1',
{id:'hehe'},'im h1 tag'),
React.createElement('h1',
{id:'h2o'},
"2nd heading ")])]);
root.render(parent);
/*
<div id="parent">
<div id="child">
React element is object and 
<h1></h1>
<h1></h1>
</div>

</div>

<div id="parent">
<div id="child">
React element is object and 
<h1></h1>
<h1></h1>
</div>

</div>
*/