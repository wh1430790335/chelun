import {getBrandList, getMakeList} from '../../api/index';
// 数据区域
let state = {
    letters:[],
    brand: {},
    letter:'',
    isShow: false,
    brandId:'',
    makeList:'',
    isShowList: false
}

// 派生数据区域
let getters = {

}

let mutations = {
    initState: (state, payload)=>{
        // 把车型数据处理一下
        let letters = [];
        let brand = {};
        payload.forEach((item)=>{
            let spell = item.Spelling[0];
            // 判断这个字母是否在前面出现过
            if (letters.indexOf(spell) != -1){
                // 只要把数据放到brand里
                brand[spell].push(item);
            }else{
                // 把新字母放到letters列表
                letters.push(spell);
                // 在brand里新建一项并赋值为一个数组
                brand[spell] = [item];
            }
        });

        state.letters = letters;
        state.brand = brand;
    },
    // 显示车系数据
    changeMakeList: (state, payload)=>{
        state.brandId = payload.id;
        state.makeList = payload.list;
        state.isShowList = true;
    },
    // 控制字母的显示和隐藏
    showLetter: (state, payload)=>{
        state.isShow = payload;
    },
    // 该变letter
    changeLetter: (state, payload)=>{
        state.letter = payload;
    },
    // 隐藏车系数据
    hideMakeList: (state)=>{
        state.isShowList = false;
    }
}

let actions = {
    initState: ({commit}, payload)=>{
        console.log('hello');
        getBrandList().then(body=>{
            console.log('bdoy...', body);
            if (body.code == 1){
                commit('initState', body.data);
            }else{
                alert(body.msg);
            }
        })
    },
    getMakeList: ({commit, state}, payload)=>{
        if (payload != state.brandId){
            console.log('id...', payload);
            getMakeList(payload).then(body=>{
                console.log('makeList...', body);
                commit('changeMakeList', {
                    id: payload,
                    list: body.data
                })
            })
        }
    }
}

export default {
    namespaced: true,
    state,
    //getters,
    mutations,
    actions
}