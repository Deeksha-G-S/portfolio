import React from 'react'
import { AboutContainer,ParticleStyle,  AboutLeftContainer, Img, AboutRightContainer, AboutInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './AboutStyle'
import SvgImg from '../../images/img.png';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import ParticleComponent from './ParticleComponent';

const AboutSection = () => {
    return (
        <div id="about">
            <AboutContainer>
                <ParticleStyle>
        <ParticleComponent/>
                </ParticleStyle>
                <AboutInnerContainer >
                    <AboutLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                       <SubTitle>
                        {Bio.description}
                       </SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </AboutLeftContainer>

                    <AboutRightContainer id="Right">

                        <Img src={SvgImg} alt="image" />
                    </AboutRightContainer>
                </AboutInnerContainer>

            </AboutContainer>
          
        </div>
    )
}

export default AboutSection;