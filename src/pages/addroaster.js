import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import { PlusCircleOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import Roastercard from './roastercard'

const { Option } = Select;

class Addroaster extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className="dhashdfs">
          <div className="roaster">
        <Button type="primary" onClick={this.showDrawer}>
        <div  className="PlusCircleOut" ><PlusCircleOutlined /></div> New Roaster
        </Button>
        </div>
        <Drawer
          title="Add Roaster"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80,background:'#F4F4F4'}}
          footer={
            <div
              style={{
                textAlign: 'right',
                
              }}
            >
              
            </div>
          }
        >
          <div className="roaster_body">
              <div className="body_part">
                  <div className="inpurt_1">
                      <label>Name*</label> <input type="text" placeholder="Enter a name"/>
                  </div>
                  <div className="inpurt_2">
                      <label> Department *</label> <input type="text" placeholder="select a department"/>
                      <label> No. Of Team *</label> <input type="text" placeholder="2" style={{width:'135px'}}/>
                  </div>
                  <div className="inpurt_3">
                      <label> Applicable For *</label> <input type="text" placeholder=""/>
                  </div>
                  <div className="inpurt_4">
                      <div className="Team">
                          <p>Team 01</p>
                          <p style={{left:'35rem'}}>Team 02</p>
                      </div>
                      <div>
                      <label>Working Days*</label> <input type="text" placeholder="select a department"/> <input type="text" placeholder="select a department"style={{left:'4rem'}}/>
                      </div>
                  </div>
                  <div className="body_part">
                      <div className="roaster_card">
                      <Roastercard  day1="Sat" day2="Sun" day3="Mon" roaNum="Team 01 "  />
                            <Roastercard  day1="Tues" day2="Wed" day3="Thu" roaNum="Team 02" style={{top: '2rem'}} />
                      </div>
                      
                  </div>
                  <div className="body_part">
                    <div className="roaster_button">
        
                    <Button type="submet" style={{background:'  #34A852'}} >Create</Button>
                    <Button type="reset" style={{background:' #44B4DB'}} > Reset</Button >
                        
                    </div>
                  </div>
              </div>
          </div>
        </Drawer>
      </div>
    );
  }
}



export default Addroaster