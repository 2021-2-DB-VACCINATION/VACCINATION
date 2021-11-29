import React, { useState } from "react";
import CheckBox from "./checkBox";
import "./hospitalList.css";

const HospitalList = ({
  name,
  vname1,
  vnum1,
  vname2,
  vnum2,
  vname3,
  vnum3,
  vname4,
  vnum4,
  time,
}) => {
  const [modalOn, setModalOn] = useState(false);
  const onOpenModal = () => {
    setModalOn(!modalOn);
  };

const HospitalList = ( {name, vname1, vnum1, vname2, vnum2, vname3, vnum3, vname4, vnum4, time} ) => {
    
    const [modalOn, setModalOn] = useState(false);
    const onOpenModal = () =>{
        setModalOn(!modalOn);
    }

    const Modal = () => {
        return (
            <div className = "noshowmodal">
                <div className = "bg"></div>
                <div className = "modalBox">
                        <div className = "modaltext">접종할 백신을 선택해주세요.</div>
                        <div className = "modalsm">
                        <div className={"checkset"}>
                            <label className={"checksetflex"}>
                                <input className={"checkbox"} type = "checkbox" />
                                <div className={"checkboxtext"}>{vname1}</div>
                            </label>
                            <label className={"checksetflex"}>
                                <input className={"checkbox"} type = "checkbox" />
                                <div className={"checkboxtext"}>{vname2}</div>
                            </label>
                            <label className={"checksetflex"}>
                                <input className={"checkbox"} type = "checkbox" />
                                <div className={"checkboxtext"}>{vname3}</div>
                            </label>
                            <label className={"checksetflex"}>
                                <input className={"checkbox"} type = "checkbox" />
                                <div className={"checkboxtext"}>{vname4}</div>
                            </label>
                        </div>
                        </div>
                        <button className = "closeBtn" onClick = {onOpenModal}>
                            <div className = "btnText">선택완료 </div>
                        </button>
                </div>
            </div>
          </div>
          <button className="closeBtn" onClick={onOpenModal}>
            <div className="btnText">선택완료 </div>
          </button>
        </div>
      </div>
    );
  };

    return(
        <section className={"outlistbox"}>
            {modalOn && <Modal onOpenModal={onOpenModal}></Modal>}
            <button type="button" className={"hospitallistBigBox"}>
                    <div>
                        <div className={"hospitalName"}>{name}</div>
                        <div className={"vaccine"}>
                            <div className={"vaccineName"}>{vname1}</div>
                            &nbsp;
                            <div className={"vaccineNum"}>{vnum1}</div>
                            &nbsp;
                            <div className={"vaccineName"}>{vname2}</div>
                            &nbsp;
                            <div className={"vaccineNum"}>{vnum2}</div>
                            &nbsp;
                            <div className={"vaccineName"}>{vname3}</div>
                            &nbsp;
                            <div className={"vaccineNum"}>{vnum3}</div>
                            &nbsp;
                            <div className={"vaccineName"}>{vname4}</div>
                            &nbsp;
                            <div className={"vaccineNum"}>{vnum4}</div>
                        </div>
                        <div className={"hospitalTime"}>{time}</div>
                    </div>
            </button>
            <button type="button" className="redButton" onClick={onOpenModal}>
                <span className="redButtonText">예약하기</span>
            </button>
        </section>
    );
};

export default HospitalList;
