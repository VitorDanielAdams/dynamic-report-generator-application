import { Dispatch, SetStateAction, useState } from 'react';
import FormModal from './FormModal/FormModal';
import MenuModal from './MenuModal/MenuModal';

interface ConditionalRenderModalProps {
    setShowModal: Dispatch<SetStateAction<boolean>>;
    menuModal: boolean;
    setMenuModal:  Dispatch<SetStateAction<boolean>>;
}

function ConditionalRenderModal({setShowModal,menuModal,setMenuModal}:ConditionalRenderModalProps) {
    
    const [selectedForm, setSelectedForm] = useState('');

    if (menuModal === true) {
        return (
            <MenuModal 
                setMenuModal={setMenuModal} 
                setSelectedForm={setSelectedForm} 
            />
        );
    } 
    return (
        <FormModal 
            setShowModal={setShowModal} 
            menuModal={menuModal} 
            selectedForm={selectedForm} 
            setMenuModal={setMenuModal} 
        />
    );
}
export default ConditionalRenderModal;