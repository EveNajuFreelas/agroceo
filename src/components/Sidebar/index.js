import React from 'react'
import { SidebarDiv, ListItemWrapper, SidebarListItem, ListIconWrapper, ListItemWrapperWithPop } from "./styles";
import { MenuToggleButton } from '../Header/styles';
import { useHistory } from "react-router-dom"

export const Sidebar = ({ showDrawer, toggleDrawer }) => {
    const history = useHistory();

    const menuItems = [
        {
            name: 'Inicio',
            //icon: <Icon name={iconList.finance} size={30} color='white'></Icon>,
            url: "/app",
        },
        {
            name: 'Financeiro',
            url: "/app",
            menuItems: [{
                text: 'Receita',
                url: "/app"
            }, {
                text: 'Despesa',
                url: "/app",
            }, {
                text: 'Investimento',
                url: "/app",
            }]
        },
        {
            name: 'Manejo',
            url: "/app",
            menuItems: [{
                text: 'Combustível',
                url: "/app/pessoas/cadastro"
            }, {
                text: 'Mão de Obra',
                url: "/app/pessoas/cadastro"
            }, {
                text: 'Veículos',
                url: "/app/pessoas/cadastro"
            }, {
                text: 'Áreas',
                url: "/app/pessoas/cadastro"
            }, {
                text: 'Lavoura',
                url: "/app/pessoas/funcao",
            }, {
                text: 'Animais',
                url: "/app/pessoas/obrigacao",
            }, {
                text: 'Tarefas',
                url: "/app/pessoas/obrigacao",
            }, {
                text: 'Demandas',
                url: "/app/pessoas/obrigacao",
            }]
        }, {
            name: 'Relatórios',
            url: "/",
            menuItems: [{
                text: 'Financeiro',
                url: "/app/pessoas/cadastro"
            }, {
                text: 'Demandas',
                url: "/app/pessoas/cadastro"
            }, {
                name: "Propriedades",
                url: "/app/propriedades"
            }]
        }, {
            name: 'Configurações',
            url: "/",
            menuItems: [{
                text: 'Perfil',
                url: "/"
            }]
        }]
        
    return (
        <div>
            <MenuToggleButton onClick={toggleDrawer} id='MenuIcon'>
                {/*<Icon name={iconList.menu} size={30} color="white"></Icon>*/}
            </MenuToggleButton>
            <SidebarDiv>
                {
                    menuItems.map((item, index) => (
                        item.hasOwnProperty('menuItems') ?
                            <ListItemWrapperWithPop onClick={() => history.push(item.url)}>
                                <SidebarListItem>{item.icon}</SidebarListItem>
                                <SidebarListItem>{item.name}</SidebarListItem>
                            </ListItemWrapperWithPop>
                            :
                            <ListItemWrapper onClick={() => history.push(item.url)}>
                                <SidebarListItem>{item.icon}</SidebarListItem>
                                <SidebarListItem>{item.name}</SidebarListItem>
                            </ListItemWrapper>
                    ))
                }
            </SidebarDiv >
        </div>
    )
}

export default Sidebar