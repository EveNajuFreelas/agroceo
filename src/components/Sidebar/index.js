import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { usePageContext } from '../../context/pageContext';
import { menuItems } from '../../utils/navigationItems';
import { useTranslation } from "react-i18next";
import { 
    SidebarWrapper, 
    ListItemWrapper, 
    SidebarHeader, 
    SidebarIcon,
    ListExpandButton,
    SubSidebar,
    ListItemName,
    ListWrapper,
    SubSidebarHeader,
} from './styles';
import { ProfileModal } from '../Modals/Profile';
import { useAuthentication } from '../../context/authContext';

const Sidebar = () => {
    const { t } = useTranslation();
    const { drawerOpen, changeDrawerState } = usePageContext();
    const { setShowProfileModal } = useAuthentication();
    const history = useHistory();
    const [activeId, setActiveId] = useState(-1);
    const [activeSubmenu, setActiveSubmenu] = useState([]);

    useEffect(() => {
        if(activeId !== -1) {
            setActiveSubmenu(menuItems[activeId]?.items);
        }
    }, [activeId])

    const navigateTo = (path) => {
        history.push(path);
    }

    const handleHover = (id) => {
        if(menuItems[id]?.items?.length > 0) {
            setActiveId(id);
        } else if(id === -1) {
            setActiveId(-1);
        }
    }

    const handleSubItemClick = (item) => {
        if(item.text === 'profile') {
            setShowProfileModal(true);
        } else {
            navigateTo(item.url);
        }
    }

    const renderSubItems = () => activeSubmenu.map(i => (
        <ListItemWrapper
            key={i.id}
            onClick={() => handleSubItemClick(i)}
            issubsidebar={true}
        >
            <ListItemName issubsidebar={true}>{t(i.text)}</ListItemName>
        </ListItemWrapper>
    ));
    
    return (
        <>
        <ProfileModal />
        <SidebarWrapper
            isOpen={drawerOpen}
            anchor="left"
            variant="permanent"
            PaperProps={{ elevation: 8}}
        >
            <SidebarHeader>
                <SidebarIcon onClick={changeDrawerState} />
                {drawerOpen && 'AGROCEO'}
            </SidebarHeader>
            <ListWrapper
                onMouseLeave={() => handleHover(-1)}
            >
                {menuItems.map(m => 
                    <ListItemWrapper 
                        key={m.id} 
                        onClick={() => navigateTo(m.url)}
                        onMouseEnter={() => handleHover(m.id)}
                    >
                        {m.icon}
                        {drawerOpen && <ListItemName>{t(m.name)}</ListItemName>}
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
                    <SubSidebarHeader issubsidebar={true}>{t(menuItems[activeId].name)}</SubSidebarHeader>
                    {renderSubItems()}
                </ListWrapper>
            </SubSidebar>
        }
        </>);
}

export default Sidebar;