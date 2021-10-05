import { Icon } from "../assets/Icons";
import { iconList } from '../assets/Icons/icon-list';

export const menuItems = [
        {
            id: 0,
            name: 'Inicio',
            icon: <Icon name={iconList.home} size={20} color="white" />,
            url: "/app",
        },
        {
            id: 1,
            name: 'Financeiro',
            icon: <Icon name={iconList.finance} size={20} color="white" />,
            url: "/app",
            items: [{
                id: 1.1,
                text: 'Receita',
                url: "/app"
            }, {
                id: 1.2,
                text: 'Despesas',
                url: "/app/financeiro/despesas",
            }, {
                id: 1.3,
                text: 'Investimento',
                url: "/app/financeiro/investimentos",
            }]
        },
        {
            id: 2,
            name: 'Manejo',
            icon: <Icon name={iconList.farm} size={20} />,
            url: "/app",
            items: [{
                id: 2.1,
                text: 'Combustível',
                url: "/app/pessoas/cadastro"
            }, {
                id: 2.2,
                text: 'Mão de Obra',
                url: "/app/pessoas/cadastro"
            }, {
                id: 2.3,
                text: 'Veículos',
                url: "/app/pessoas/cadastro"
            }, {
                id: 2.4,
                text: 'Áreas',
                url: "/app/pessoas/cadastro"
            }, {
                id: 2.5,
                text: 'Lavoura',
                url: "/app/pessoas/funcao",
            }, {
                id: 2.6,
                text: 'Animais',
                url: "/app/pessoas/obrigacao",
            }, {
                id: 2.7,
                text: 'Tarefas',
                url: "/app/pessoas/obrigacao",
            }, {
                id: 2.8,
                text: 'Demandas',
                url: "/app/pessoas/obrigacao",
            }]
        }, 
        {
            id: 3,
            name: 'Relatórios',
            icon: <Icon name={iconList.farm} size={20} />,
            url: "/",
            items: [{
                id: 3.1,
                text: 'Financeiro',
                url: "/app/pessoas/cadastro"
            }, {
                id: 3.2,
                text: 'Demandas',
                url: "/app/pessoas/cadastro"
            }, {
                id: 3.3,
                text: "Propriedades",
                url: "/app/propriedades"
            }]
        }, 
        {
            id: 4,
            name: 'Configurações',
            icon: <Icon name={iconList.farm} size={20} />,
            url: "/",
            items: [{
                id: 4.1,
                text: 'Perfil',
                url: "/"
            }]
        }
]
