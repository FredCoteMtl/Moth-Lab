import React from 'react'
import { 
    FaTelegramPlane
} from 'react-icons/fa'
import { 
    InfoContainer,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Subtitle,
    ImgWrap,
    Img,
    InfoWrapper,
    Link
} from './AboutElements'
import { default as Flask } from '../../images/icons/flask.png'



const AboutSection = () => { 

    return (
        <>
        <InfoContainer id='about'>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>WHAT WE DO</TopLine>
                            <Subtitle>Moth Lab is a group of blockchain and web3 enjoyers comming together to pool resources and skills.</Subtitle>
                            <Subtitle>Annyone ca join us, propose some ideas or request help in a project.</Subtitle>
                            <Subtitle>If you have a good understanding of the blockchain and web3 technologies but you dont have the necessary ressources to launch your project alone, moth lab is the place for you.</Subtitle>
                            <Subtitle>Not sure? Come chat with us! <Link href={''} target={'_blank'}><FaTelegramPlane /></Link></Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={Flask} alt={"claim"} type={'img/png'}/> 
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>   
        </>
    )
}

export default AboutSection