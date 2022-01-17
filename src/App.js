import logo from './logo.svg';
import './App.css';

function App() {

  return (
   <body id="insta">
     <div className="border">
      <div className='fixed-top'>
        <div className="top">
          <div className="top__column">
            <span className="top__column-text">2:22</span>
            <i className="fas fa-location-arrow fa-xs"></i>
          </div>
          <div className="top__column">
            <i className="fas fa-signal fa-xs"></i>
            <i className="fas fa-wifi fa-xs"></i>
            <i className="fas fa-battery-three-quarters fa-xs"></i>
          </div>
        </div>

        {/* top */}

        <form className="reply">
          <div className="reply__column">
            <div className="reply__column-top">
              <div className="reply-top">
                <span className="reply-top-text">Shop</span>
              </div>
              <div className="reply-top">
                <i className="fas fa-calendar-week"></i>
                <i className="fas fa-bars"></i>
              </div>
            </div>
            <div className="reply-search">
              <i className="fas fa-search fa-sm"></i>
            </div>
            <input type="text" placeholder="     검색" />
          </div>
        </form>

        <div className="text-icon">
          <button> Shop </button>
          <button> 동영상 </button>
          <button> 에디터 추천</button>
          <button> 컬렉션</button>
          <button> 가이드</button>
        </div>


      </div>

        {/* header */}

      <body className="float-container">
        <div className="float-container-two" >
          <img src="gumeface.jpg" />
        </div>
        <div className="float-container-two" >
          <img src="gumess.jpg" />
        </div>
        <div className="float-container-two" >
          <img src="gumetongue.jpg" />
        </div>
        <div className="float-container-two" >
          <img src="gumetwo.jpg" />
        </div>
        <div className="float-container-two" >
          <img src="gumewow.jpg" />
        </div>
        <div className="float-container-two" >
          <img src="sd.jpg" />
        </div>
      </body> 


      <div className="under">
        <div className="under__column">
          <i className="fas fa-home fa-lg"></i>
          <i className="fas fa-search fa-lg"></i>
          <i className="far fa-caret-square-right fa-lg"></i>
          <i className="fas fa-shopping-bag fa-lg"></i>
          <img src="sd.jpg"  className="under__column-avatar" />
          
        </div>
      </div>
     </div>
   </body>
  );
}

export default App;
