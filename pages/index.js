import react, { useState } from 'react';
import Menu from '../comps/Menu';
import Content from '../comps/Content';

export default function Home() {
  const [contentColor, setContentColor] = useState(false);
  const [contentImage, setContentImage] = useState(false);
  const [contentChildren, setContentChildren] = useState(false);

  const HandleMenu = (str) => {
    //capture what happened in the menu and change the page state based on it
    //alert(str);
    if (str === 'bg') {
      setContentColor("#DCA877");
    }
    else if (str === 'img') {
      setContentImage("url('bgimg.jpg')");
    } else if (str === 'help'){
      setContentChildren("I'm so fucked up.")
    }
  }


  return <div className="home">
    <div className="content">
      <Content bgcolor={contentColor} bgimage={contentImage} children={contentChildren}>
        <h1>{contentChildren}</h1>
      </Content>
    </div>
    <div className="menu">
      <Menu onMenuSelect={HandleMenu} />
    </div>
  </div>
}
