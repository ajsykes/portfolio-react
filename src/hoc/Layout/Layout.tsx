import * as React from 'react';
import Header from 'src/components/Header/Header';
import NavigationItems from 'src/components/Navigation/NavigationItems/NavigationItems';

export interface Props {

};

class Layout extends React.Component<Props, object>{
    render() {
        return (
            <>
                <header>
                    <Header />
                    <nav>
                        <NavigationItems />
                    </nav>
                </header>
            </>
        )
    }
}

export default Layout;