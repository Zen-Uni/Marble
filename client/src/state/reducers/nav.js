/**
 * @description nav reducer
 * @author Uni
 */

import {
    item_checked,
    click_logo,
} from '../action/actionStatic'

const clickedData = 'nav-item-clicked'

const navData = [
    {
        index: 0,
        item: "项目",
        icon: "icon-xiangmuguanli",
        checked: '',
        path: '/main/project'
    },
    {
        index: 1,
        item: "个人",
        icon: "icon-zhuye",
        path: '/main/user',
        checked: ''
    },
    {
        index: 2,
        item: "技能",
        icon: "icon-yuzhijineng",
        path: '/main/tech',
        checked: ''
    }
]

const nav = (state = navData, action) => {
    const { type } = action
    const newState = JSON.parse(JSON.stringify(state))

    if (type === item_checked) {
        const index = action.index
        newState.map(item => {
            item.checked = ''
        })
        newState[index].checked = clickedData
    }
    
    if (type === click_logo) {
        newState.map(item => {
            item.checked = ''
        })
    }

    return newState
}


export default nav