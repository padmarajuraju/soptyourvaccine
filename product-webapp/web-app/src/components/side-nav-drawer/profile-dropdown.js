
import React from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = 
"https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

var userName = localStorage.getItem("userName")


const trigger = (
  <span>
    <Icon name='user' /> {userName}
  </span>
)

const options = [
  {
    key: 'user',
    text: (
      <span>
        Signed in as <strong>{userName}</strong>
      </span>
    ),
    disabled: true,
  },
  { key: 'profile', text: 'Your Profile',value:1 },
  { key: 'sign-out', text: 'Sign Out',value:2 },
]

const GenerateDropdown = () =>{
  return(
    <Dropdown trigger={trigger} options={options} onChange={<SetTemplate/>}/>
  )
}

const DropdownTrigger = () => (
 <GenerateDropdown />
)

const SetTemplate = (event,data) =>{
  let navigate = useNavigate();
  // console.log(data.value)
  if(data.value==1){
    navigate('/people/profile')
  }else{
    localStorage.clear()
    navigate ('/')
  }
}
export default DropdownTrigger