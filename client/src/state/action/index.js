/**
 * @description action function
 * @author Uni
 */

import {
    item_checked,
    click_logo,
} from './actionStatic'

export const itemChecked = index => {
    return {
        type: item_checked,
        index
    }
}


export const logoClicked = () => {
    return {
        type: click_logo,
    }
}