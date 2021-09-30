import { List } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { usePageContext } from '../../context/pageContext';
import { menuItems } from '../../utils/navigationItems';
import { SidebarWrapper, ListItemWrapper, SidebarHeader } from './styles';

const Sidebar = () => {
    const { drawerOpen, sidebarSize, handleSidebarSize } = usePageContext();
    const history = useHistory();

    const navigateTo = (path) => {
        history.push(path);
    }
    
    return (
        <SidebarWrapper
            isOpen={drawerOpen}
            anchor="left"
            variant="permanent"
        >
            <SidebarHeader>
                AGROCEO
            </SidebarHeader>
            <List>
                {sidebarSize}
                {menuItems.map(m => 
                    <ListItemWrapper key={m.id} onClick={() => navigateTo(m.url)}>
                        {m.icon}
                        {m.name}
                    </ListItemWrapper>
                )}
            </List>
        </SidebarWrapper>);
}

export default Sidebar;