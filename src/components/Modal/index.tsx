import React from "react";
import { 
    Modal,
} from "./styled";

interface Props {
    isVisible?:boolean;
    setVisible?:React.Dispatch<React.SetStateAction<boolean>>;
    navigation?:{ 
        navigate:(string:string) => {}
    };
    BodyModal?:React.FC<any>
}

const ModalProceed: React.FC<Props> = ({isVisible,navigation,setVisible,BodyModal})=>{
    const exitModal = ()=>{
        setVisible(!isVisible)
        if(navigation != undefined){
            navigation.navigate("Home")
        }
    };
    return (
        <Modal
            animationType={'slide'}
            transparent={false}
            visible={isVisible}
            onRequestClose={exitModal}
        >
            <BodyModal
                isVisible={isVisible}
                setVisible={setVisible}
                navigation={navigation}
            >

            </BodyModal>
        </Modal>
    )
}

export default ModalProceed;