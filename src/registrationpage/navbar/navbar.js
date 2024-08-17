import { Link } from 'react-router-dom'
import './nabar.css'

export default function RegisterNavbar(){
    return(
    <>
        <div className="resisteraion-navbar-container">
        {/* number  */}
            <div className="resisteration-number-part">
                <div className="resisteration-item-number">
                    <button>1</button>
                </div>
                <div className="resisteration-item-number">
                    <button>2</button>
                </div>
                <div className="resisteration-item-number">
                    <button>3</button>
                </div>
                <div className="resisteration-item-number">
                    <button>4</button>
                </div>
                <div className="resisteration-item-number">
                    <button>5</button>
                </div>
                <div className="resisteration-item-number">
                    <button>6</button>
                </div>
                <div className="resisteration-item-number">
                    <button>7</button>
                </div>
                <div className="resisteration-item-number">
                    <button>8</button>
                </div>
                <div className="resisteration-item-number">
                    <button>9</button>
                </div>
            </div>
        {/* names */}
            <div className="resisteration-name-part">
                <div className="resisteration-item-name"> معلومات شخصی </div>
                <div className="resisteration-item-name"> ضمیمه عکس و امضا </div>
                <div className="resisteration-item-name"> آدرس </div>
                <div className="resisteration-item-name"> معلومات شرکت </div>
                <div className="resisteration-item-name"> تحصیلات </div>
                <div className="resisteration-item-name"> وظیفه </div>
                <div className="resisteration-item-name"> پاسپورت قبلی </div>
                <div className="resisteration-item-name"> سابقهٌ جرمی </div>
                <div className="resisteration-item-name"> ایجاد درخواست </div>
            </div>
            <div className="resisteration-border"></div>
        {/*  */}
            <div className='navbar-search-lang'>
                <Link> جستوجو </Link> 
                <Link> پشتو</Link> 
            </div>
        </div>
    </>
    )
}