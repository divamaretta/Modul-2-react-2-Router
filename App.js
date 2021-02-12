import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';
import { Layout, Header, Navigation, Content, Drawer } from 'react-mdl';
import './App.css';
import background from './Components/image/sunflowers.jpg';

class App extends React.Component{
  render(){
    return(
      <div>
      <Layout style={{background: `url(${background}) center / cover`}}>

        <Header transparent title="Your QUEEN" style ={{color: 'white'}}>
            <Navigation style= {{color:'white'}}>
            <Link to = "/">Beranda</Link>
            <Link to = "/tentangsaya"> Tentang Saya</Link>
            <Link to = "/karya">Karya</Link>
            <Link to = "/kontak">Kontak</Link>
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>
            <Link to = "/">Beranda</Link>
            <Link to = "/biografi"> Biografi</Link>
            <Link to = "/hobby">Hobby</Link>
            
            </Navigation>
        </Drawer>
        <Content>
        <div className="page-content" />
                  <Utama />
        <div class="container">

        </div>
        </Content>
    </Layout>
      </div>
    );
  }
}

export default App;