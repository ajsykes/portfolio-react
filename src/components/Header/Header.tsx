import * as React from "react";
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';

export interface Props {

}

function Header({ }: Props) {
    return (
        <div className="flex flex-col h-screen justify-center items-center bg-header mx-w-sm shadow-lg text-accent">
            <h1 className="font-serif text-5xl my-6">Hi, I'm Andrew Sykes</h1>
            <NavigationItems />
            {/* Socials? */}
        </div> 
    );
}

export default Header;