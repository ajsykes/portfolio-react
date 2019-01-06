import * as React from 'react';

const AboutSection: React.FunctionComponent = () => {
    return (
        <section id="about" className="flex flex-row h-screen border-box bg-white mx-w-sm shadow-lg" style={{ padding: "10vh 6vw" }}>
            <aside className="flex flex-col flex-1 text-accent justify-center items-center">
                <h1 className="font-serif text-5xl my-6">I'm a software engineer out of Minneapolis</h1>
                <p className="text-lg font-sans my-6">
                    I work at FindLaw.com as a software engineer. Some of my interests include full-stack development, entrepreneurship, and startups.
                    I graduated from Iowa State University with a degree in Computer Science.
                </p>
                <div>

                </div>
            </aside>
            <div className="flex flex-1 items-center">
                <img className="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="" alt="" />
            </div>
        </section>
    )
}

export default AboutSection;