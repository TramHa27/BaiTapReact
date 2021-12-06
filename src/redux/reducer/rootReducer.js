import {combineReducers} from 'redux';
import BaiTapOanTuXiReducer from './BaiTapOanTuXiReducer';
import BaiTapDatVeReducer from './BaiTapDatVeReducer';

const rootReducer = combineReducers({
    BaiTapOanTuXiReducer,
    BaiTapDatVeReducer,
})

export default rootReducer;