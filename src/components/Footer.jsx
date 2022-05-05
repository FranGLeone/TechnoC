import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer=()=>{
    return(
        <div className="Footer">
            <h6 className="Footer2">TechnoCraft © - Todos los derechos reservados</h6> 
            <h6 className="Footer2"> <a className='linkIg' href="https://instagram.com/leomessi" target="_blank"><InstagramIcon fontSize='medium'/> <span className='link3'>TechnoCraft</span></a><br></br><br></br> 
                                    <a className='linkTw' href="https://twitter.com/elonmusk" target="_blank"><TwitterIcon fontSize='medium'/><span className='link3'>TechnoCraftOK</span></a> <br></br><br></br>
                                    <a className='linkFb' href="https://es-la.facebook.com/zuck" target="_blank"><FacebookIcon fontSize='medium'/><span className='link3'>TechnoCraftGaming</span></a>
             </h6> 
        </div>
    )
}

export default Footer;