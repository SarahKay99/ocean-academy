import * as React from 'react'

// import { CoursesView } from '../Chapter/Chapter.controller'
import { CoursesView } from './Courses.view'

export const Courses = () => {

    // bandaid 
    const courses = ['ocean101', 'introToDataDefi']

    return (
        <>
            <CoursesView
                courses={courses}
            />
        </>
    )
}