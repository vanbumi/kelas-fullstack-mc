console.log('Hai React');

// membuat element dengan React
// const element = React.createElement('div', null, 'React element!');

//ReactDOM.render(element, document.body);
ReactDOM.render(element, document.getElementById('root'));

// menggunakan JSX
const element = <div>React element with JSX!</div>;

// hasilnya akan:
// Uncaught SyntaxError: Unexpected token '<'

// Solusinya gunakan 
// Babel : babeljs.io
// Parcel : parceljs.org
