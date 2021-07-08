import React from 'react';
import Addroaster from './addroaster'
import { Button, Radio } from 'antd';
import { DownOutlined,PlusCircleOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
function Nav() {
    return (
        
        <div className="body_nav">
           
        <div className="lift_navber">
        
        <Button type="primary"  >Select a Dept. <div  className="DownOut" ><DownOutlined /></div> </Button >
        </div>
        <div className="right_navber">
        <Addroaster/>
        <Button type="primary"  > Exchange Schedule<div  className="PlusCircleOut" ><PlusCircleOutlined /></div> </Button >
        </div>
        
    </div>
    );
}

export default Nav;
