import React, { useState } from 'react'
import { Button,Typography,Input } from 'antd';
import { Card } from 'antd';
const {Title}=Typography;
const FormB = ({next}) => {
const [formB, setformB] = useState({
        ctc:'0',
        basics:'',
        houseRentAllowance:'',

        monthlybasics:'',
        monthlyhouseRentAllowance:'',
        monthlyConvenceAllowance:'',
        monthlyfixedallowance:'0',
        monthlyCtc:'0',

        annualbasics:'',
        annualhouseRentAllowance:'',
        annualConvenceAllowance:'',
        annualfixedallowance:'',
        annualCtc:'0',
      })

const calculator=()=>{
  const tot=parseInt(formB.ctc);
  const basics=parseInt(formB.basics);
  const houseRentAllowance=parseInt(formB.houseRentAllowance);
  let annualCtc=tot;
  let monthlyCtc=tot/12;
  let annualbasics=(tot/100)*basics;
  let monthlybasics=annualbasics/12;

  let monthlyhouseRentAllowance=(monthlybasics/100)*houseRentAllowance;
  let annualhouseRentAllowance=monthlyhouseRentAllowance*12;

  let monthlyConvenceAllowance=parseInt(formB.monthlyConvenceAllowance);
  let annualConvenceAllowance=monthlyConvenceAllowance*12;
  let monthlyfixedallowance=monthlyCtc-(monthlybasics+monthlyhouseRentAllowance+monthlyConvenceAllowance);
  let annualfixedallowance=annualCtc-(annualbasics+annualhouseRentAllowance+annualConvenceAllowance);
  setformB({...formB,
    annualCtc:annualCtc,
    monthlyCtc:monthlyCtc,
    annualfixedallowance:annualfixedallowance,
    monthlyfixedallowance:monthlyfixedallowance,
    annualConvenceAllowance:annualConvenceAllowance,
    monthlyConvenceAllowance:monthlyConvenceAllowance,
    annualhouseRentAllowance:annualhouseRentAllowance,
    monthlyhouseRentAllowance:monthlyhouseRentAllowance,
    annualbasics:annualbasics,
    monthlybasics:monthlybasics
  });

  saveFormB();
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
      <Input name="ctc" type={`number`} onChange={(e)=>formBhandler(e)} value={formB.ctc} addonBefore={ `₹`} placeholder="0" />
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
      <td>{formB.annualConvenceAllowance}</td>
    </tr>
    <tr>
      <td>Fixed Allowance</td>
      <td>Fixed amount</td>
      <td>{formB.monthlyfixedallowance}</td>
      <td>{formB.annualfixedallowance}</td>
    </tr>
    <tr style={{background: "#f6f8ff"}}>
      <td className='fw-bold'>Cost to Company</td>
      <td></td>
      <td className='fw-bold'>₹ {formB.monthlyCtc}	</td>
      <td className='fw-bold'>₹ {formB.annualCtc}	</td>
    </tr>
  </tbody>
</table>
   </Card>
   </div>
   <br/>
    <div className="container" style={{width:"90%"}}>
   <Card className="shadow-sm p-3 mb-1 bg-body rounded" >
    <Button onClick={()=>next()} type="primary">Save % Continue</Button> &nbsp;
    <Button onClick={calculator} >Cancel</Button>
   </Card>
  </div>
   </>
  )
}

export default FormB