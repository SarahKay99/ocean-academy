import { CourseBox } from 'app/App.components/CourseBox/CourseBox.controller'
import { ScrollBox } from 'app/App.components/ScrollBox/ScrollBox.controller'
import * as React from 'react'

import { CoursePageGrid } from './Courses.style'

type CoursePageProps = {}

export const CoursePage = () => (
    <>
    <ScrollBox>
        <CoursePageGrid>
            
            <CourseBox
                title={"Ocean 101"}
                shortDescription={""}
            />

            <CourseBox
                title={"Intro To Data Defi"}
                shortDescription={""}
            />
            
        </CoursePageGrid>
    </ScrollBox>
    </>
)

CoursePage.propTypes = {}