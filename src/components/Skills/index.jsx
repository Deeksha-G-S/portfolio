import React from 'react'
import { skills } from '../../data/constants';
import {Container,Wrapper,Title,Desc,SkillsContainer,Skill,SkillTitle,SkillList,SkillItem,SkillImage}  from './SkillsStyle';

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc> 
          I have a strong foundation in the following programming languages and tools. I am always open to learn new technologies.These wide range of technical skills allow me to work on various projects. 
        </Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem>
                    <SkillImage src={item.image}/>
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}

        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills