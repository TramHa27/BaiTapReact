import React, { Component } from 'react'
import Player from './Player'
import Computer from './Computer'
import './BaiTapOanTuXi.css'
import KetQuaTroChoi from './KetQuaTroChoi'
import { connect } from 'react-redux'

class BaiTapOanTuXi extends Component {
    render() {
        return (
            <div className="gameOanTuXi">
                <div className="row text-center mt-5">
                    <div className="col-4">
                        <Player />
                    </div>
                    <div className="col-4">
                        <KetQuaTroChoi />
                        <button onClick={()=> {
                            this.props.playGame()
                        }}className="btn btn-success p-2 display-4 mt-5">Play game</button>
                    </div>
                    <div className="col-4">
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        playGame: () => {
            let count = 50;
            //Khai báo hàm lặp đi lặp lại
            let randomComputerItem = setInterval(()=> {
                dispatch({
                    type: 'RAN_DOM'
                })
                count ++;
                if(count > 100){
                    //Dừng hàm setInterval
                    clearInterval(randomComputerItem)
                    dispatch({
                        type: 'END_GAME',
                    })
                }
            },100)
        }   
    }
}
 
export default connect(null,mapDispatchToProp)(BaiTapOanTuXi)
