import * as React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

export interface Props {

}


function NavigationItems({ }: Props) {

    return (
        <ul className="list-reset">
            <NavigationItem link="#about">About</NavigationItem>
            <NavigationItem link="#projects">Projects</NavigationItem>
            <NavigationItem link="#learning">What I'm Learning</NavigationItem>
            <NavigationItem link="#reading">Reading List</NavigationItem>
        </ul>
    );
};

export default NavigationItems;