import React from 'react';

import img7 from '../icon/img2.jpg';
import img8 from '../icon/img1.jpg';
import img9 from '../icon/img2.jpg';
import img1 from '../icon/1.png';
import { Button, Radio } from 'antd';
import { DownloadOutlined ,BlockOutlined,CalendarOutlined,DownOutlined,PlusCircleOutlined,PlusSquareOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
function Roastercard(props) {
    console.log(props);
    return (
        <div className="roaster_card_body">
                                <div className="lift_roaster_card">
                                <h3>{props.roaNum}</h3>
                                    <p>{props.day1}</p>
                                    <p>{props.day2}</p>
                                    <p>{props.day3}</p><br/><br/>
                                   
                                </div>
                                <div className="right_roaster_card">
                                    <div className="card_roaster_img">
                                        <img style={{marginLeft:"-15px"}} src={img7}/>
                                        <img style={{marginLeft:"-15px"}} src={img8}/>
                                        <img style={{marginLeft:"-15px"}} src={img9}/>
                                        <img style={{marginLeft:"-15px"}} src={img9}/>
                                        
                                    </div>
                                    
                                    <Button type="primary"  > Add Employee </Button >
                                    
                                </div>
                            </div>
       
    );
}

export default Roastercard;
