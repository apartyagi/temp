import React from 'react'
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import {Typography } from 'antd';
const { Title, Paragraph} = Typography;

function AddClient() {
    const navigate=useNavigate();
    return (
        <div class="container text-center rounded mx-auto d-block">
            <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <img className="img-fluid " alt="...." src='https://css.zohostatic.in/zfpayroll/zpayroll//assets/images/empty-states/add-employee.svg' style={{ width: "200px" }} />
                <Title level={3}>Get your client onboard</Title>
                <Paragraph>Capture all necessary details about your client.</Paragraph>
                <Button onClick={() => { navigate(`/cli`); } } type="primary">ADD CLIENT</Button>
            </div>
        </div>
    );
}

export default AddClient