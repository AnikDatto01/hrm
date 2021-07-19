import React from 'react';
import img1 from '../icon/1.png';
import { Button, Radio } from 'antd';
import { DownloadOutlined ,BlockOutlined,CalendarOutlined,DownOutlined,PlusCircleOutlined,PlusSquareOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
function Navber(props) {
    console.log(props);
    return (
        <div className="navber">
                    
        <div className="navber_body">
     
        <div className="lift_nav">
            <h1>{props.title}</h1>
            
            <div className="lift_manu">
                <a href="">{props.path1}</a>
                <img src={img1}/>
                <a href="">{props.path2}</a>
                <img src={img1}/>
                <a className="" href="">{props.path3}</a>
                <img src={img1}/>
                <a className="active" href="">{props.path4}</a>

            </div>
        </div>
        </div>
        <div className="right_nav">
        
        
            
        </div>
    </div>
    );
}

export default Navber;
