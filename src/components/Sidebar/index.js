import React, { useState, useEffect } from 'react'
import { MenuToggleButton } from '../Header/styles';
import { Icon } from "../Icons";
import { iconList } from '../Icons/icon-list';
import { useHistory } from "react-router-dom"
import { menuItems } from '../SidebarList/index';
import SidebarDropRight from '../SidebarDropRight/index';
import {
    SidebarDiv, 
    ListItemWrapper, 
    SidebarListItem, 
    SidebarTitle,
    DropRightIconOptionWrapper
} from "./styles";

export const Sidebar = ({ showDrawer }) => {
    const history = useHistory();
    const [isOpen, setActive] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [menuItemsId, setmenuItemsId] = useState(2);
    const [selectedMenuItem, setSelectedMenuItem] = useState([]);
    
    useEffect(() => {
        const selectedObj = menuItems.filter(i => i.id === menuItemsId);
        setSelectedMenuItem(selectedObj);
    }, [menuItemsId !== null]);

    const toggleDrawer = () => {
        setActive(isOpen => !isOpen);
    };

    const toggleHovering = (e) => {
        setmenuItemsId(e.target.id);
        setIsHovering(isHovering => !isHovering);
    };

    return (
        <div>
            {/*
                menuItems.filter(item => item.id === menuItemsId).map((item, index) => {
                    console.log("achei");
                    return (<SidebarDropRight
                        defaultValue={item.name}
                        items={item.menuItems}
                        icon={item.icon}
                        isOpen={isOpen}
                        isHovering={isHovering}
                    />);
                })

                menuItems.reduce((previousValue, currentValue) => {
                    console.log("previous value " + previousValue);
                    console.log("current value id " + currentValue.id);
                    console.log("menuTab id " + menuItemsId);
                    if (currentValue.id === menuItemsId) {
                        console.log("true");
                        return <SidebarDropRight
                            defaultValue={currentValue.name}
                            items={currentValue.menuItems}
                            icon={currentValue.icon}
                            isOpen={isOpen}
                            isHovering={isHovering}
                        />;
                    }
                    return currentValue.id;
                }, [])
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
                                onMouseLeave={toggleHovering} id={item.id}>
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
            
            {isHovering &&
            <SidebarDropRight
                defaultValue={selectedMenuItem.name}
                items={selectedMenuItem.menuItems}
                icon={selectedMenuItem.icon}
                isOpen={isOpen}
                isHovering={isHovering}
            />}
        </div>
    )
}

export default Sidebar