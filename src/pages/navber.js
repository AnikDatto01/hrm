import React from 'react';
import img1 from '../icon/1.png';
import { Button, Radio } from 'antd';
import { DownloadOutlined ,BlockOutlined,CalendarOutlined,DownOutlined,PlusCircleOutlined,PlusSquareOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
function Navber() {
    return (
        <div className="navber">
                    
        <div className="navber_body">
     
        <div className="lift_nav">
            <h1 >Human Resource</h1>
            <div className="lift_manu">
                <a href="">Home</a>
                <img src={img1}/>
                <a href="">Human Resource</a>
                <img src={img1}/>
                <a className="active" href="">Roaster</a>
            </div>
        </div>
        </div>
        <div className="right_nav">
        
        <Button type="primary" >Manage Attendance<div  className="BlockOut" ><CalendarOutlined /></div></Button>
        <Button type="primary"  > Balk Check In<div  className="BlockOut" ><BlockOutlined/></div> </Button >
            
        </div>
    </div>
    );
}

export default Navber;
