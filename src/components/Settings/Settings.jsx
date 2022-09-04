import { Wrapper, HR } from './Settings.styled';
import Background from '../Background/Background';

export default function Settings({langauge, changeLangauge, changeBackground}){
    
    const bg = {changeBackground}
    
    return(
        <>
        <Wrapper>
            <Background {...bg}/>
        </Wrapper>
        <HR/>
        </>
    )
}