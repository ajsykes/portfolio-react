import * as React from 'react';

export interface Props {

};

class Layout extends React.Component<Props, object>{
    render() {
        return (
            <>
                <style>@import url('https://fonts.googleapis.com/css?family=Roboto+Slab');</style>
                <style>@import url('https://fonts.googleapis.com/css?family=Open+Sans');</style>
                <main className="flex flex-col">
                    {this.props.children}
                </main>
                {/* <header>
                    <Header />
                    <nav>
                        <NavigationItems />
                    </nav>
                </header> */}
            </>
        )
    }
}

export default Layout;