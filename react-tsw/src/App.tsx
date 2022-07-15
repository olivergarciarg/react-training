import Todos from './components/Todos';

const items = [
  'react',
  'typescript'
]

function App() {
  return (
    <div>
      <Todos items={items}/>
    </div>
  );
}

export default App;
