import React, { useState } from 'react'
import { SidebarDiv, ListItemWrapper, SidebarListItem, SidebarTitle } from "./styles";
import { MenuToggleButton } from '../Header/styles';
import { Dropdown } from '../Dropdown';
import { Icon } from "../Icons";
import { iconList } from '../Icons/icon-list';
import { useHistory } from "react-router-dom"
import { menuItems } from '../SidebarList/index';
import { DropRight } from '../Dropdown/styles';

export const Sidebar = ({ showDrawer }) => {
    const history = useHistory();
    const [isOpen, setActive] = useState(false);

    const toggleDrawer = () => {
        setActive(isOpen => !isOpen);
    };

    return (
        <div>
            <SidebarDiv isOpen={isOpen}>
                <MenuToggleButton onClick={toggleDrawer} id='MenuIcon'>
                    <Icon name={iconList.menu} size={30} color="white"></Icon>
                    <SidebarTitle isOpen={isOpen}> AGROCEO </SidebarTitle>
                </MenuToggleButton>
                {
                menuItems.map((item, index) => (
                    item.hasOwnProperty('menuItems') ?
                        <ListItemWrapper isOpen={isOpen} button key={index}>
                            <Dropdown
                                defaultValue={item.name}
                                items={item.menuItems}
                                icon={item.icon}
                                isOpen={isOpen}
                            />
                        </ListItemWrapper>
                        :
                        <ListItemWrapper onClick={() => history.push(item.url)}>
                            {item.icon}
                            <SidebarListItem isOpen={isOpen}>{item.name}</SidebarListItem>
                        </ListItemWrapper>
                ))
            }
            </SidebarDiv>
        </div>
    )
}

export default Sidebar