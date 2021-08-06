import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    console.log("props", this.props.mangDatCuoc);
    return (
      <div className="text-center playerGame">
        <div className="theThink">
          <img
            style={{ transform: "rotate(120deg)" }}
            className="mt-3"
            width={60}
            height={60}
            src={
              this.props.mangDatCuoc.find(item=>item.datCuoc === true).hinhAnh
            }
            alt="..."
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 170, height: 170 }}
          src="./img/GameOanTuXi/player.png"
          alt="..."
        />
        <div className="row">
          {this.props.mangDatCuoc.map((item, index) => {
            //xét giá trị đặt cược thêm viền cho item được chọn
            let border = {};
            if (item.datCuoc) {
              border = { border: "3px solid orange" };
            }
            return (
              <div className="col-4">
                <button
                  onClick={() => {
                    this.props.datCuoc(item.ma)
                    // this.props.datCuoc();
                  }}
                  style={border}
                  className="btnItem"
                >
                  <img width={50} height={50} src={item.hinhAnh} alt="..." />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      dispatch({
        type: "CHON_KEO_BUA_BAO",
        maCuoc,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
