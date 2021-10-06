import { Icon } from "../assets/Icons";
import { iconList } from '../assets/Icons/icon-list';

export const menuItems = [
        {
            id: 0,
            name: 'home',
            icon: <Icon name={iconList.home} size={20} color="white" />,
            url: "/app",
        },
        {
            id: 1,
            name: 'financial',
            icon: <Icon name={iconList.finance} size={20} color="white" />,
            url: "/app",
            items: [{
                id: 1.1,
                text: 'income',
                url: "/app"
            }, {
                id: 1.2,
                text: 'expenses',
                url: "/app/financeiro/despesas",
            }, {
                id: 1.3,
                text: 'investments',
                url: "/app/financeiro/investimentos",
            }]
        },
        {
            id: 2,
            name: 'management',
            icon: <Icon name={iconList.farm} size={20} />,
            url: "/app",
            items: [{
                id: 2.1,
                text: 'fuel',
                url: "/app/pessoas/cadastro"
            }, {
                id: 2.2,
                text: 'manpower',
                url: "/app/pessoas/cadastro"
            }, {
                id: 2.3,
                text: 'vehicles',
                url: "/app/pessoas/cadastro"
            }, {
                id: 2.4,
                text: 'areas',
                url: "/app/pessoas/cadastro"
            }, {
                id: 2.5,
                text: 'agriculture',
                url: "/app/pessoas/funcao",
            }, {
                id: 2.6,
                text: 'animals',
                url: "/app/pessoas/obrigacao",
            }, {
                id: 2.7,
                text: 'assignments',
                url: "/app/pessoas/obrigacao",
            }, {
                id: 2.8,
                text: 'demand',
                url: "/app/pessoas/obrigacao",
            }]
        }, 
        {
            id: 3,
            name: 'reports',
            icon: <Icon name={iconList.farm} size={20} />,
            url: "/",
            items: [{
                id: 3.1,
                text: 'financial',
                url: "/app/pessoas/cadastro"
            }, {
                id: 3.2,
                text: 'demand',
                url: "/app/pessoas/cadastro"
            }, {
                id: 3.3,
                text: "properties",
                url: "/app/propriedades"
            }]
        }, 
        {
            id: 4,
            name: 'settings',
            icon: <Icon name={iconList.farm} size={20} />,
            url: "/",
            items: [{
                id: 4.1,
                text: 'profile',
                url: "/"
            }]
        }
]
