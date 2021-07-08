import React from 'react';
import { Button, Radio } from 'antd';
import { DownloadOutlined ,BlockOutlined,CalendarOutlined,DownOutlined,PlusCircleOutlined,PlusSquareOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import Nevber from './navber'
import Nav from './nav'
import Card from './card'
function Roaster() {
    return (
        <div className="main_body">
            <div className="body">
            
               <Nevber/>
                <div className="body_viwe">
                        <Nav/>
                        <div className="body_card">
                            
                            <Card name="General" time="10:00 AM  -  06:00 PM" day1="Sat" day2="Sun" day3="Mon" roaNum="ROASTER 01" depertment="ENGINEERING DEPARTMENT" />
                            <Card name="General" time="08:00 AM  -  04:00 PM" day1="Tues" day2="Wed" day3="Thu" roaNum="ROASTER 02" depertment="Marketing Department" />
                            
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Roaster;
