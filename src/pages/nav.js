import React from 'react';
import img1 from '../icon/1.png';
import { Button, Radio } from 'antd';
import { DownloadOutlined ,BlockOutlined,CalendarOutlined,DownOutlined,PlusCircleOutlined,PlusSquareOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
function Nav() {
    return (
        
        <div className="body_nav">
        <div className="lift_navber">
        <Button type="primary"  >Select a Dept. <div  className="DownOut" ><DownOutlined /></div> </Button >
        </div>
        <div className="right_navber">
        <Button type="primary"  > New Roaster<div  className="PlusCircleOut" ><PlusCircleOutlined /></div> </Button >
        <Button type="primary"  > Exchange Schedule<div  className="PlusCircleOut" ><PlusCircleOutlined /></div> </Button >
        </div>
        
    </div>
    );
}

export default Nav;
