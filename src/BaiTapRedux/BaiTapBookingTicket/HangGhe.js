import React, { Component } from 'react'
import {connect} from 'react-redux';
import { datGheAction } from '../../redux/actions/BaiTaiDatVeAction';
class HangGhe extends Component {
    renderGhe =() => {
        return this.props.hangGhe.danhSachGhe.map((ghe,index)=> {
            let cssGheDaDat ='';
            let disable = false;
            if(ghe.daDat){
                cssGheDaDat = 'gheDuocChon';
                disable =true
            }
            let cssgheDangDat = ''
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
            if(indexGheDangDat !== -1) {
                cssgheDangDat = 'gheDangChon'
            }
            return <button onClick={()=> {
                this.props.datGhe(ghe)
            }}  disable={disable} className={`ghe ${cssGheDaDat}${cssgheDangDat}`} key={index}>
                {ghe.soGhe}
            </button>
        })
    }
    renderSoHang = () => {     
            return this.props.hangGhe.danhSachGhe.map((hang,index)=> {
                return <span className="rowNumber">
                    {hang.soGhe}
                     </span>
            })
    }
    renderHangGhe = () => {
        if(this.props.soHangGhe===0) {
            return <div>
                {this.props.hangGhe.hang} {this.renderSoHang()}
            </div>
        } else{
            return <div>
            {this.props.hangGhe.hang} {this.renderGhe()}
        </div>
        }
    }
    render() {
        return (
            <div className="text-light text-left mt-3 ml-5" style={{fontSize:'20px'}}>
                {this.renderHangGhe()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch(datGheAction(ghe))
        }
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(HangGhe)