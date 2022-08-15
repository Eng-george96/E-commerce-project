import styled from 'styled-components';
import { categories } from '../data.js';
import CategoryItem from './CategoryItem';
import {mobile,tablet} from '../responsive.js';

const Container = styled.div`
display:flex;
padding :20px;
justify-content: space-between;
${mobile({flexDirection:"column"})}
${tablet({flexDirection:"column"})}
`;

const Categories = () => {
    
    return (
        <Container>
            {
                categories.map(item => (
                    <CategoryItem item={item} key={item.id}/>
                ))
            }
        </Container>
    )
}
export default Categories;