import React, { useState } from 'react'
import { SidebarDiv, ListItemWrapper, SidebarListItem, SidebarTitle, DropRightIconOptionWrapper } from "./styles";
import { MenuToggleButton } from '../Header/styles';
import { Dropdown } from '../Dropdown';
import { Icon } from "../Icons";
import { iconList } from '../Icons/icon-list';
import { useHistory } from "react-router-dom"
import { menuItems } from '../SidebarList/index';
import { SidebarDropRight } from '../SidebarDropRight/index';

export const Sidebar = ({ showDrawer }) => {
    const history = useHistory();
    const [isOpen, setActive] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const toggleDrawer = () => {
        setActive(isOpen => !isOpen);
    };

    const toggleHovering = () => {
        setIsHovering(isHovering => !isHovering);
        if(isHovering.valueOf === true){
            selectTab(this);
        }
    };

    const selectTab = (e) => {
        return e;
    } 

    return (
        <div>
            {/*
                menuItems.filter(item => item.hasOwnProperty('menuItems')).map((item, index) =>
                    <ListItemWrapper isOpen={isOpen} hover key={index}>
                        <SidebarDropRight
                            defaultValue={item.name}
                            items={item.menuItems}
                            icon={item.icon}
                            isOpen={isOpen}
                            isHovering={isHovering}
                        />
                    </ListItemWrapper>
                )
            */}

            <SidebarDiv isOpen={isOpen}>
                <MenuToggleButton onClick={toggleDrawer} id='MenuIcon'>
                    <Icon name={iconList.menu} size={30} color="white"></Icon>
                </MenuToggleButton>
                <SidebarTitle isOpen={isOpen}> AGROCEO </SidebarTitle>
                {
                    menuItems.map((item, index) => (
                        item.hasOwnProperty('menuItems') ?
                            <ListItemWrapper isOpen={isOpen} hover key={index} onMouseEnter={toggleHovering}
                                onMouseLeave={toggleHovering}>
                                {item.icon}
                                <SidebarListItem isOpen={isOpen}>{item.name}</SidebarListItem>
                                <DropRightIconOptionWrapper>
                                    <Icon name={iconList.expand_more} size={20}></Icon>
                                </DropRightIconOptionWrapper>
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