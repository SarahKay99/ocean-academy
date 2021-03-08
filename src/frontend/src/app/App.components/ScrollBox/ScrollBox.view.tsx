import * as PropTypes from 'prop-types'
import * as React from 'react'

import { ScrollBoxStyled } from './ScrollBox.style'

type ScrollBoxViewProps = {
    children: any
}

export const ScrollBoxView = ({children}: ScrollBoxViewProps) => {
    return (
        <ScrollBoxStyled>
            {children}
        </ScrollBoxStyled>
    )
}


ScrollBoxView.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.object.isRequired]),
}

ScrollBoxView.defaultProps = {}
