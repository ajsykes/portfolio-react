import * as React from "react";
import { NavLink } from "react-router-dom";

export interface Props {
    link: string,
    children?: React.ReactNode
}

function NavigationItem({ link, children }: Props) {

    return (
        <li>
            <NavLink to={link} exact>
                {children}
            </NavLink>
        </li>
    );
}

export default NavigationItem;