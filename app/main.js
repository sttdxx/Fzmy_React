import React from 'react';
import ReactDOM from  'react-dom';
import { Router, Route, hashHistory} from 'react-router'
import { Navbar , View} from 'amazeui-react';
import Home  from './home.js';
import Fzdt  from './fzdt.js';
import Flfw  from './flfw.js';
import Pfjy  from './pfjy.js';
import Pfwh  from './pfwh.js';
import Login  from './login.js';
import Reg  from './reg.js';
import Bkbt from './bkbt.js';
import Dayy from './dayy.js';
import Dhrx from './dhrx.js';
import Fffw from './fffw.js';
import Fwgj from './fwgj.js';
import Kstw from './kstw.js';
import Zjzx from './zjzx.js';
import Zxfw from './zxfw.js';
class App extends React.Component{
	render(){
		return(
			<Router history={hashHistory}>
    			<Route path="/" component={Home} />
    			<Route path="/fzdt" component={Fzdt} />
    			<Route path="/flfw" component={Flfw} />
    			<Route path="/pfjy" component={Pfjy} />
    			<Route path="/pfwh" component={Pfwh} />
          <Route path="/login" component={Login} />
          <Route path="/reg" component={Reg} />
          <Route path="/bkbt" component={Bkbt} />
          <Route path="/dayy" component={Dayy} />
          <Route path="/dhrx" component={Dhrx} />
          <Route path="/fffw" component={Fffw} />
          <Route path="/fwgj" component={Fwgj} />
          <Route path="/kstw" component={Kstw} />
          <Route path="/zjzx" component={Zjzx} />
          <Route path="/zxfw" component={Zxfw} />
  			</Router>
  		);
	}
}
ReactDOM.render(<App />, document.querySelector("#app"));
