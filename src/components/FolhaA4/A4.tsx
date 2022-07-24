import { forwardRef, useContext } from 'react';
import { Container } from './A4Styles';
import DinamycComponent from '../DinamycComponent/DinamycComponent';
import FormModalContext from '../Modal/components/FormModal/FormModalProvider';

const FolhaA4 = forwardRef((props:any,ref:any) => {

    const { list } = useContext(FormModalContext);

    return (
        <Container ref={ref}>
            {list?.map((item, index) => (
                <DinamycComponent 
                    index={index}
                    title={item.title}
                    width={item.width}
                    height={item.height}
                    border={item.border}
                    borderWidth={item.borderWidth}
                    image={item.image}
                    graphic={item.graphic}
                    key={index}
                />
            ))}
        </Container>
    );
})
export default FolhaA4;