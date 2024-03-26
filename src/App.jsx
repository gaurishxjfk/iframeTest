import "./App.css";

function App() {

  return (
    <div>
      <p>This is a demonstration of embedding an iframe:</p>
      <iframe
        title="Embedded Content"
        src="https://docs.tibco.com/products/ibi"
        width="1200"
        height="600"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default App;
