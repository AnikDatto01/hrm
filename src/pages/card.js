import React from 'react';

import img7 from '../icon/img2.jpg';
import img8 from '../icon/img1.jpg';
import img9 from '../icon/img2.jpg';
import img1 from '../icon/1.png';
import { Button, Radio } from 'antd';
import { DownloadOutlined ,BlockOutlined,CalendarOutlined,DownOutlined,PlusCircleOutlined,PlusSquareOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
function Card(props) {
    console.log(props);
    return (
        <div className="card">
                                <div className="lift_card">
                                    <h4>{props.name}</h4>
                                    <h4>{props.time}</h4>
                                    <p>{props.day1}</p>
                                    <p>{props.day2}</p>
                                    <p>{props.day3}</p><br/><br/>
                                    <h3>{props.roaNum}</h3>
                                </div>
                                <div className="right_card">
                                    <div className="card_img">
                                        <img src={img7}/>
                                        <img style={{marginLeft:"-15px"}} src={img8}/>
                                        <img style={{marginLeft:"-15px"}} src={img9}/>
                                        <img style={{marginLeft:"-15px"}} src={img9}/>
                                        
                                    </div>
                                    <h1>{props.depertment}</h1>
                                    <Button type="primary"  > Add Employee<div  className="PlusSquareOut" ><PlusSquareOutlined /></div> </Button >
                                    
                                </div>
                            </div>
       
    );
}

export default Card;
