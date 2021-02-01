/**
 * @description update render
 * @author Uni
 */

import { useHistory } from "react-router-dom"

function useUpdateRender() {
    const history = useHistory()
    return () => {
        history.replace({
            pathname: '/'
        })
    }
}

export default useUpdateRender