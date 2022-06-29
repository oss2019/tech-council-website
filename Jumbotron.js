import React from 'react'
import Zoom from 'react-reveal/Zoom';
const myStyle={
  backgroundImage: 
"url('http://jimkulakowski.com/web-design/img/parallax-backgrounds/space.jpg')",
height:'55vh',
width: '100%'
}
class ZoomExample extends React.Component {
  render() { let className = 'hr-color';
  if (this.props.isActive) {
    className += ' foo';
  }
    return (<>
      <div style={myStyle} className='text'>

        <Zoom left cascade>
          Indian Institute Council 
          <hr className={className}/>
        </Zoom>
        <h4> Welcomes you!</h4>
        
      </div>
      </>
    );
  }
}
export default ZoomExample;

    


