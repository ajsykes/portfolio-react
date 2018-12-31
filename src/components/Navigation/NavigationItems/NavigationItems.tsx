import * as React from "react";
import NavigationItem from './NavigationItem/NavigationItem';

export interface Props {

}


function NavigationItems({ }: Props) {

    return (
        <ul>
            <NavigationItem link="/" />
            <NavigationItem link="/projects" />
            <NavigationItem link="/learning" />
            <NavigationItem link="/about" />
        </ul>
    );
};

export default NavigationItems;