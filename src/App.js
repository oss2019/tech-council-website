import logo from './logo.svg';
import './App.css';
// import './css/bootstrap.css'
function Car() {
  return (<MovingComponent
  type="flipSlowDown"
  duration="600ms"
  delay="0s"
  direction="normal"
  timing="linear"
  iteration="1"
  fillMode="forwards">
  React-Moving-Text
</MovingComponent>
);
}
function App() {
  return (
    <div className="App">
    <div class="container">
      <div class="headh animated bounce">
        How to Join ?
      </div>
      <div class="box">
        <div class=""></div>
        <div class=""></div>
        <div class=""></div>
        <div class=""></div>
        <div class=""></div>
        <div class=""></div>
        <div class=""></div>
        <div class=""></div>
        <div class=""></div>
        <div class=""></div>
        <div class=""></div>
        <div class=""></div>
      </div>
      
      <div class="jmatter">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem.
      </div>
    </div>
    </div>
  );
}

export default App;
