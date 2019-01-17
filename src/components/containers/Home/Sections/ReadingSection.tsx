import * as React from 'react';


const ReadingSection: React.FunctionComponent = () => {
    return (
        <section id="reading" className="flex flex-row h-screen border-box bg-reading mx-w-sm shadow-lg" >
            <div className="flex flex-1 justify-center items-center" style={{padding: "10vh 6vw"}}>
                <a className="text-white text-4xl border border-white no-underline p-4 rounded-full" href="/reading">Reading List</a>
            </div>
            <aside className="flex flex-col flex-1 bg-white text-accent justify-center items-center" style={{padding: "10vh 6vw"}}>
                <h1 className="font-serif text-5xl my-6">My resolution is to read more</h1>
                <p className="text-lg font-sans my-6">
                    I figured this would be the best way to hold myself accountable while also maintaining a record of my reading list.
                </p>
                <div>

                </div>
            </aside>
        </section>
    );
}

export default ReadingSection;