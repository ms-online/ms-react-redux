import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>这是我的第一个React应用程序！</h1>
      </header>
      <Contact name = "Henry" age="32" sex = "male"/>
      <Contact name = "Lucy" age="30" sex = "Female"/>
    </div>
  );
}

export default App;
