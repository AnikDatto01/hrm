import React from 'react';
import Addroaster from './addroaster'
import { Button, Radio } from 'antd';
import { DownOutlined,PlusSquareOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
function Lonenav() {
    return (
        
        <div className="body_lonenav">
           
        <div className="lift_lonenav">
        
        <h1>Add Office Loan</h1>
        </div>
        <div className="right_lonenav">
        <Button type="primary"   > Manage Person<div  className="PlusCircleOu" ><PlusSquareOutlined style={{paddingRight:".1rem"}}/></div> </Button >
        <Button type="primary"  > Add Payment<div  className="PlusCircleOu" ><PlusSquareOutlined /></div> </Button >
        <Button type="primary"  > Add Person<div  className="PlusCircleOu" ><PlusSquareOutlined /></div> </Button >
        </div>
        
    </div>
    );
}

export default Lonenav;