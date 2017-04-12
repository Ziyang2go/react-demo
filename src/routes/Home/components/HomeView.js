import React from 'react'
import Sushi1 from '../assets/sushi1.jpg';
import Sushi2 from '../assets/sushi2.jpg';
import Sushi3 from '../assets/sushi3.jpg';
import Sushi4 from '../assets/sushi4.jpg';
import './HomeView.scss';
import '../assets/jssor.slider-23.1.0.min.js';
import { Button } from 'belle';

function jssor_1_slider_init() {

  var jssor_1_SlideoTransitions = [
  ];

  var jssor_1_options = {
    $AutoPlay: 1,
    $SlideDuration: 800,
    $SlideEasing: $Jease$.$OutQuint,
    $CaptionSliderOptions: {
      $Class: $JssorCaptionSlideo$,
      $Transitions: jssor_1_SlideoTransitions
    },
    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$
    },
    $BulletNavigatorOptions: {
      $Class: $JssorBulletNavigator$
    }
  };

  var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

  function ScaleSlider() {
    var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
    if (refSize) {
      refSize = Math.min(refSize, 1920);
      jssor_1_slider.$ScaleWidth(refSize);
    }
    else {
      window.setTimeout(ScaleSlider, 30);
    }
  }
  ScaleSlider();
  $Jssor$.$AddEvent(window, "load", ScaleSlider);
  $Jssor$.$AddEvent(window, "resize", ScaleSlider);
  $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
};

export class HomeView extends React.Component {

  componentDidMount() {
    setTimeout(jssor_1_slider_init, 100);
  }

  render() {
    return (
      <div>
       <div id="jssor_1" className="img-slider">
          <div data-u="slides" className="img-single">
            <div>
              <img data-u="image" src={ Sushi1 } />
            </div>
            <div>
              <img data-u="image" src={ Sushi2 } />
            </div>
            <div>
              <img data-u="image" src={ Sushi3 }/>
            </div>
             <div>
              <img data-u="image" src={ Sushi4 }/>
            </div>
          </div>
          <div data-u="navigator" className="jssorb05" style={{ bottom:'16px', right:'16px'}}data-autocenter="1">
            <div data-u="prototype" style={{ width:'16px',height:'16px'}}></div>
          </div>
          <span data-u="arrowleft" className="jssora22l"  style={{ top:'0px',left:'8px',width:'40px', height:'58px'}} data-autocenter="2"></span>
          <span data-u="arrowright" className="jssora22r" style={{ top:'0px',right:'8px',width:'40px', height:'58px'}} data-autocenter="2"></span>
        </div>
        <Button primary className="start">Getting Started</Button>
      </div>
    );
  }
}

export default HomeView
