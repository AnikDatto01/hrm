import React from 'react';
import { Button, Radio } from 'antd';
import { DownloadOutlined ,BlockOutlined,CalendarOutlined,DownOutlined,PlusCircleOutlined,PlusSquareOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import Nevber from './navber'
import Lonenav from './lonenav'
import Loneform from './loneform'
import Card from './card'
function Lone() {
    return (
        <div className="main_body">
            <div className="body">
            
            <Nevber title="Office Loan"  path1="Home" path2="Human Resource" path3="Office Loan" path4="Add Office Loan"/>
                <div className="body_viwe">
                        <Lonenav/>
                        <Loneform/>
                        
                </div>
            </div>
        </div>
    );
}

export default Lone;
