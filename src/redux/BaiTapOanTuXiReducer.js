const stateDefault = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./img/gameOanTuXi/keo.png", datCuoc: false },
    { ma: "bua", hinhAnh: "./img/gameOanTuXi/bua.png", datCuoc: true },
    { ma: "bao", hinhAnh: "./img/gameOanTuXi/bao.png", datCuoc: false },
  ],
  ketQua: "I'm iron man, i love you 3000!!!",
  soBanThang: 0,
  soBanChoi: 0,
  computer: {
    ma: "keo",
    hinhAnh: "./img/gameOanTuXi/keo.png",
  },
};

const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      //reset mảng cược
      let mangCuocUpdate = [...state.mangDatCuoc];
      //Tạo ra mãng cược mới từ mảng cược cũ và action maCuoc do người dùng truyền
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        return { ...item, datCuoc: false };
      });
      let index = mangCuocUpdate.findIndex((qc) => qc.ma === action.maCuoc);
      if (index !== -1) {
        mangCuocUpdate[index].datCuoc = true;
      }
      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
      // return { ...item, datCuoc: false };
    }
    case "RAN_DOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.computer = quanCuocNgauNhien;
      return { ...state };
    }
    case "END_GAME":
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;
      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "Hòa nhau!!!";
          } else if (computer.ma === "bua") {
            state.ketQua = "thua sml!!!";
          } else {
            state.ketQua = "I'm iron man, I love you 3000!!!";
          }
          break;
        case "bua":
          if (computer.ma === "keo") {
            state.ketQua = "I'm iron man, I love you 3000!!!";
          } else if (computer.ma === "bua") {
            state.ketQua = "Hòa nhau!!!";
          } else {
            state.ketQua = "thua sml!!!";
          }
          break;
        case "bao":
          if (computer.ma === "keo") {
            state.ketQua = "thua sml!!!";
          } else if (computer.ma === "bua") {
            state.ketQua = "I'm iron man, I love you 3000!!!";
          } else {
            state.ketQua = "Hòa nhau!!!";
          }
          break;
        default:
          state.ketQua = "I'm iron man, I love you 3000!!!";
          return { ...state };
      }
      return { ...state };
    default:
      return { ...state };
  }
};

export default BaiTapOanTuXiReducer;
