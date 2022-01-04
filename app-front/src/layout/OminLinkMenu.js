import * as React from 'react';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import classnames from 'classnames';
import {DashboardMenuItem, MenuItemLink, MenuProps, ReduxState, useTranslate,} from 'react-admin';

import orders from '../orders';
import SubMenu from './SubMenu';
import {AppState} from '../admin/types';

type MenuName = 'menuCatalog' | 'menuSales' | 'menuCustomers';

const OminLinkMenu = ({dense = false}: MenuProps) => {
    const [state, setState] = useState({
        menuCatalog: true,
        menuSales: true,
        menuCustomers: true,
    });
    const translate = useTranslate();
    const open = useSelector((state: ReduxState) => state.admin.ui.sidebarOpen);
    useSelector((state: AppState) => state.theme); // force rerender on theme change
    const classes = useStyles();

    const handleToggle = (menu: MenuName) => {
        setState(state => ({...state, [menu]: !state[menu]}));
    };

    return (
        <div
            className={classnames(classes.root, {
                [classes.open]: open,
                [classes.closed]: !open,
            })}
        >
            {' '}
            <DashboardMenuItem/>
            <SubMenu
                handleToggle={() => handleToggle('menuSales')}
                isOpen={state.menuSales}
                name="pos.menu.sales"
                icon={<orders.icon/>}
                dense={dense}
            >
                <MenuItemLink
                    to={{
                        pathname: '/commands',
                        state: {_scrollToTop: true},
                    }}
                    primaryText={translate(`resources.commands.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<orders.icon/>}
                    dense={dense}
                />
            </SubMenu>
            <MenuItemLink
                to={{
                    pathname: '/reviews',
                    state: {_scrollToTop: true},
                }}
                primaryText={translate(`resources.reviews.name`, {
                    smart_count: 2,
                })}
                leftIcon={<orders.icon/>}
                dense={dense}
            />
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    open: {
        width: 200,
    },
    closed: {
        width: 55,
    },
}));

export default OminLinkMenu;
