import { List } from '@material-ui/core';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { usePageContext } from '../../context/pageContext';
import { menuItems } from '../../utils/navigationItems';
import { 
    SidebarWrapper, 
    ListItemWrapper, 
    SidebarHeader, 
    SidebarIcon, 
    ListExpandButton,
    SubSidebar,
    ListItemName,
    ListWrapper,
} from './styles';

const Sidebar = () => {
    const { drawerOpen, changeDrawerState } = usePageContext();
    const history = useHistory();
    const [activeId, setActiveId] = useState(-1);

    const navigateTo = (path) => {
        history.push(path);
    }

    const handleHover = (id) => {
        if(menuItems[id]?.items?.length > 0) {
            setActiveId(id);
        } else {
            setActiveId(-1);
        }
    }
    
    return (
        <>
        <SidebarWrapper
            isOpen={drawerOpen}
            anchor="left"
            variant="permanent"
            PaperProps={{ elevation: 8}}
        >
            <SidebarHeader>
                <SidebarIcon onClick={changeDrawerState} />
                {drawerOpen && "AGROCEO"}
            </SidebarHeader>
            <ListWrapper>
                {menuItems.map(m => 
                    <ListItemWrapper 
                        key={m.id} 
                        onClick={() => navigateTo(m.url)}
                        onMouseEnter={() => handleHover(m.id)}
                        onMouseLeave={() => handleHover(-1)}
                    >
                        {m.icon}
                        {drawerOpen && <ListItemName>{m.name}</ListItemName>}
                        {m.items && <ListExpandButton />}
                    </ListItemWrapper>
                )}
            </ListWrapper>
        </SidebarWrapper>
        {(activeId !== -1) &&
            <SubSidebar
                isOpen={drawerOpen}
                anchor="left"
                variant="permanent"
                onMouseEnter={() => handleHover(activeId)}
                onMouseLeave={() => handleHover(-1)}
                PaperProps={{ elevation: 8 }}
            >
                <ListWrapper>
                    <SidebarHeader>{menuItems[activeId].name}</SidebarHeader>
                    {menuItems[activeId].items.map(i => {
                        <ListItemWrapper
                            key={i.id}
                            onClick={() => navigateTo(i.url)}
                        >
                            {i.text}
                        </ListItemWrapper>
                    })}
                </ListWrapper>
            </SubSidebar>
        }
        </>);
}

export default Sidebar;