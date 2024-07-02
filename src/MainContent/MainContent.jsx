import Carousel from 'react-bootstrap/Carousel';
import MainFrontImg from '../assets/1.ddb463a076b58bbe0ea3.jpg'
import style from './MainContent.module.css'
import classNames from 'classnames';
import Button from 'react-bootstrap/Button';


function MainContent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={MainFrontImg} />
        <Carousel.Caption className={style.carouselCaption}>
          <div className={classNames(style.quality, "col-md-2")}>
              Great Quality Cocial life
          </div>
          <h1 className={style.heading}>Discover the World of <br></br>Possible Univeristy.</h1>
          <Button variant="outline-light" className={classNames("py-3", "px-5","mt-4", style.addmission)}>Admission</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainContent;