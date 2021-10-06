import { Divider } from "@material-ui/core";
import { useState } from "react"
import { Icon } from "../Icons";
import { iconList } from '../Icons/icon-list';
import { Link } from "react-router-dom";
import {
  DropdownTextWrapper,
  DropdownWrapper,
  DropdownItemText,
  DropdownMenuBody,
  DropdownIconOptionWrapper,
  DropdownButtonWrapper,
  DropdownBodyContainer
} from "./styles";


export const Dropdown = ({ defaultValue, items, icon, isOpen }) => {
  const [isShow, setIsShow] = useState(false)

  const handleShowMenu = () => setIsShow((isShow) => !isShow);

  return (
    <DropdownWrapper isShow={isShow}>
      <DropdownButtonWrapper onClick={handleShowMenu} >
        {icon}
        <DropdownTextWrapper isOpen={isOpen}>
          {defaultValue}
        </DropdownTextWrapper>
        <DropdownIconOptionWrapper>
          <Icon name={iconList.expand_more} size={20}></Icon>
        </DropdownIconOptionWrapper>
      </DropdownButtonWrapper>
      {
        isShow &&
        <DropdownBodyContainer>
          <Divider></Divider>
          {
            items.map((item) => (
              <DropdownMenuBody>
                <Icon name={Object.values(iconList).find(e => e.render?.name === `Svg${item}`)} size={30} color='white'></Icon>
                <Link to={item.url}>
                  <DropdownItemText >{item.text}</DropdownItemText>
                </Link>
              </DropdownMenuBody>
            ))
          }
        </DropdownBodyContainer>
      }
    </DropdownWrapper>
  )
}