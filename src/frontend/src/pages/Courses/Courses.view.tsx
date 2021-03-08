import { ScrollBox } from 'app/App.components/ScrollBox/ScrollBox.controller'
import * as PropTypes from 'prop-types'
import * as React from 'react'

import { CoursesStyled } from './Courses.style'

type CourseViewProps = {
    courses: string[]
}

export const CoursesView = ({ courses }: CourseViewProps) => (
    <>
        <ScrollBox>
            <CoursesStyled>
                {courses}
            </CoursesStyled>
        </ScrollBox>
    </>
)

CoursesView.propTypes = {
    course: PropTypes.string
}