import { Dispatch, SetStateAction, useState } from 'react';
import FormModal from './FormModal/FormModal';
import MenuModal from './MenuModal/MenuModal';

interface ConditionalRenderModalProps {
    menuModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
    setMenuModal:  Dispatch<SetStateAction<boolean>>;
}

function ConditionalRenderModal({menuModal,setShowModal,setMenuModal}:ConditionalRenderModalProps) {
    
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