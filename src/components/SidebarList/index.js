import { Icon } from "../Icons";
import { iconList } from '../Icons/icon-list';

export const menuItems = [
        {
            id: 1,
            name: 'Inicio',
            icon: <Icon name={iconList.finance} size={25} color='white'></Icon>,
            url: "/app",
        },
        {
            id: 2,
            name: 'Financeiro',
            icon: <Icon name={iconList.finance} size={25} color='white'></Icon>,
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
            id: 3,
            name: 'Manejo',
            icon: <Icon name={iconList.farm} size={25}></Icon>,
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
        }, 
        {
            id: 4,
            name: 'Relatórios',
            icon: <Icon name={iconList.farm} size={25}></Icon>,
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
        }, 
        {
            id: 5,
            name: 'Configurações',
            icon: <Icon name={iconList.farm} size={25}></Icon>,
            url: "/",
            menuItems: [{
                text: 'Perfil',
                url: "/"
            }]
        }
]
