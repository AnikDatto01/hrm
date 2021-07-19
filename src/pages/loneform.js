import React from 'react';
import Addroaster from './addroaster'
import { Button, Space  ,DatePicker,Input,Select,} from 'antd';
import { DownOutlined,PlusSquareOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
const { TextArea } = Input;
function Loneform() {
    return (
        
        <div className="body_card">
                            
        
            <div className="loneform_input">
               <div className="input_body11"><label  style={{marginRight: "10rem"}}>Name *</label><Input placeholder="Input your item name" /></div> 
               <div className="input_body11"> <label style={{marginRight: "9.7rem"}}>Phone *</label><Input placeholder="Input your item name" /></div> 
               <div className="input_body11"> <label  style={{marginRight: "4.8rem"}}>Payment Type *</label>
                <select >
                    <option>Cash payment</option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select></div> 
                <div className="input_body11"><label  style={{marginRight: "11.5rem"}}>Date</label>
                <Space direction="vertical"  ><div className="gahjas"><DatePicker  style={{width:"30rem",backgroundColor:"#FFFFFF",height:"3rem"}} /></div> </Space></div> 
                <div className="input_body11"> <label  style={{marginRight: "10rem",bottom:"3rem"}}>Details</label>
                <TextArea rows={2} /></div> 
            </div>
            <div className="loneform_button">
          <Button  htmlType="button" style={{backgroundColor:"#44B4DB"}}>
          Reset
          </Button>
          <Button htmlType="submit" style={{backgroundColor:"#34A852"}} >
          Save
          </Button>
          
          </div>
          
       
                            
        </div>
    );
}

export default Loneform;