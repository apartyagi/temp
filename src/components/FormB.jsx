import React, { useState } from 'react'
import { Button,Typography,Input } from 'antd';
import { Card } from 'antd';
const {Title}=Typography;
const FormB = ({next}) => {
const [formB, setformB] = useState({
        ctc:0,
        basics:50,
        houseRentAllowance:50,

        monthlybasics:0,
        monthlyhouseRentAllowance:0,
        monthlyConvenceAllowance:0,
        monthlyfixedallowance:0,
        monthlyCtc:0,

        annualbasics:0,
        annualhouseRentAllowance:0,
        annualConvenceAllowance:0,
        annualfixedallowance:0,
        annualCtc:0,
      })

const basicsCal=()=>{
  const basics=parseInt(formB.basics);
  const tot=parseInt(formB.ctc);
  const houseRentAllowance=parseInt(formB.houseRentAllowance);
  let annualbasics=(tot/100)*basics;
  let monthlybasics=annualbasics/12;
  let monthlyhouseRentAllowance=(monthlybasics/100)*houseRentAllowance;
  let annualhouseRentAllowance=monthlyhouseRentAllowance*12;
 
  setformB({...formB,
    annualbasics:annualbasics,
    monthlybasics:monthlybasics,
    monthlyhouseRentAllowance:monthlyhouseRentAllowance,
    annualhouseRentAllowance:annualhouseRentAllowance,
  })

}


const formBhandler=(e)=>{
  const value=e.target.value;
  setformB({...formB,[e.target.name]:value});
}
const saveFormB=()=>{
  console.log(formB);
}
  return (
    <>
   <div className='container' style={{width:"90%"}}>
    <Card className="shadow-sm p-3 bg-body rounded mt-5">
    <table className="table table-borderless">
  <thead>
    <tr>
      <th scope="col"><Title level={4}>Annual CTC</Title>	</th>
      <th scope="col">
      <Input name="ctc" type={`number`} onBlur={basicsCal} onChange={(e)=>formBhandler(e)} value={formB.ctc} addonBefore={ `₹`} placeholder="0" />
      </th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>SALARY COMPONENTS</td>
      <td>CALCULATION TYPE</td>
      <td>MONTHLY AMOUNT</td>
      <td>ANNUAL AMOUNT</td>
    </tr>
    
    <tr>
      <th> <Title level={5}>Earnings</Title></th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td >Basic</td>
      <td><Input style={{width:"60%"}}
      max={50} 
      type={`number`}
      name='basics'
      onChange={(e)=>formBhandler(e)}
      value={formB.basics}
      addonAfter="% of CTC"
    /></td>
      <td><Input type={`number`}  disabled value={formB.monthlybasics} style={{ width: '50%' }}/></td>
      <td>{formB.annualbasics}</td>
    </tr>
    <tr>
      <td>House Rent Allowance</td>
      <td><Input style={{width:"60%"}}

      addonAfter="% of Basic"
      name='houseRentAllowance'
      type={`number`}
      onChange={(e)=>formBhandler(e)}
      value={formB.houseRentAllowance}
    /></td>
      <td><Input type={`number`} disabled value={formB.monthlyhouseRentAllowance} style={{ width: '50%' }} /></td>
      <td>{formB.annualhouseRentAllowance}</td>
    </tr>
    <tr>
      <td>Conveyance Allowance	</td>
      <td>Fixed amount</td>
      <td><Input name='monthlyConvenceAllowance' type={`number`} value={formB.monthlyConvenceAllowance} onChange={(e)=>formBhandler(e)} style={{ width: '50%' }} /></td>
      <td>{formB.monthlyConvenceAllowance*12}</td>
    </tr>
    <tr>
      <td>Fixed Allowance</td>
      <td>Fixed amount</td>
      <td>{formB.monthlybasics-formB.monthlyhouseRentAllowance-formB.monthlyConvenceAllowance}</td>
      <td>{formB.annualbasics-formB.annualhouseRentAllowance-formB.annualConvenceAllowance}</td>
    </tr>
    <tr style={{background: "#f6f8ff"}}>
      <td className='fw-bold'>Cost to Company</td>
      <td></td>
      <td className='fw-bold'>₹ {formB.ctc/12}	</td>
      <td className='fw-bold'>₹ {formB.ctc}	</td>
    </tr>
  </tbody>
</table>
   </Card>
   </div>
   <br/>
    <div className="container" style={{width:"90%"}}>
   <Card className="shadow-sm p-3 mb-1 bg-body rounded" >
    <Button onClick={()=>next()} type="primary">Save % Continue</Button> &nbsp;
    <Button onClick={saveFormB} >Cancel</Button>
   </Card>
  </div>
   </>
  )
}

export default FormB;