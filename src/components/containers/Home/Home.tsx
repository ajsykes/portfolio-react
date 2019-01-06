import * as React from 'react';
import Header from 'src/components/Header/Header';
import AboutSection from './Sections/AboutSection';
import ProjectSection from './Sections/ProjectsSection';
import LearningSection from './Sections/LearningSection';
import ReadingSection from './Sections/ReadingSection';

class Home extends React.Component {

    render() {
        return (
            <>
                <Header />
                <article>
                    <AboutSection />
                    <ProjectSection />
                    <LearningSection />
                    <ReadingSection />
                </article>
            </>
        )
    }
}

export default Home;