import { List } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { usePageContext } from '../../context/pageContext';
import { menuItems } from '../../utils/navigationItems';
import { SidebarWrapper, ListItemWrapper, SidebarHeader, SidebarIcon, ListExpandButton } from './styles';

const Sidebar = () => {
    const { drawerOpen, changeDrawerState } = usePageContext();
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
                <SidebarIcon onClick={changeDrawerState} />
                {drawerOpen && "AGROCEO"}
            </SidebarHeader>
            <List>
                {menuItems.map(m => 
                    <ListItemWrapper key={m.id} onClick={() => navigateTo(m.url)}>
                        {m.icon}
                        {drawerOpen && m.name}
                        {m.menuItems && <ListExpandButton />}
                    </ListItemWrapper>
                )}
            </List>
        </SidebarWrapper>);
}

export default Sidebar;