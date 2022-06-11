// store初始化仓库数据
const initState = {
    isCollapsed:false,
}
// reducer纯函数，用于操作中央仓库的数据
export const reducer = (state=initState,action)=>{
    const { type,data} = action
    switch(type){
        case 'SET_LOGIN_STATUS':
        	// 在不改变原有的state基础上，返回一个新的state
            return {
                ...state,
                isLogin:data
            }
        default:
            return initState    
    }
}
