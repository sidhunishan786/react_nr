const x={color : 'red'};
const y=React.createElement("div",{},[React.createElement('h1',{style:x},"hello")]);
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(y);