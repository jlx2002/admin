import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'
// 状态
const state = {
        token: getToken() // 设置token为共享状态 初始化vuex的时候 就先从缓存中读取
    }
    // 修改状态
const mutations = {
        setToken(state, token) {
            state.token = token // 设置token  只是修改state的数据  123 =》 1234
                // vuex变化 => 缓存数据
            setToken(token) // vuex和 缓存数据的同步
        },
        removeToken(state) {
            state.token = null // 删除vuex的token
            removeToken() // 先清除 vuex  再清除缓存 vuex和 缓存数据的同步
        }
    }
    // 执行异步
const actions = {
    login(context, data) {

    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}