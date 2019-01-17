import * as React from 'react';

const LearningSection: React.FunctionComponent = () => {
    return (
        <section id="learning" className="flex flex-row h-screen border-box bg-white mx-w-sm shadow-lg" style={{padding: "10vh 6vw"}}>
            <aside className="flex flex-col flex-1 text-accent justify-center items-center">
                <h1 className="font-serif text-5xl my-6">I also like to self-learn</h1>
                <p className="text-lg font-sans my-6">
                    Along with focused reading, I'm typically engaged in one or two online courses to stay sharp. Usually I have a project in mind
                    to utilize whatever I'm learning.
                </p>
                <div>

                </div>
            </aside>
            <div className="flex flex-1 items-center">
                <img src=""/>
            </div>
        </section>
    )
}

export default LearningSection;