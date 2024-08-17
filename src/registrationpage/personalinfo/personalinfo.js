import { Col, Container, Row } from 'react-bootstrap'
import RegisterNavbar from '../navbar/navbar'
import './personalinfo.css'
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
// 1575-----1740
export default function PersonalInfo(){
    // confirm button
    let randLetter = Math.random().toString(36).substring(2,8).toUpperCase();
    // last name
    let [persianLname,setpersianLname]=useState(' ')
    function CheckpersianLname(e){  
      let value =e.target.value;
      let CharacterUnicode=value.charCodeAt(value.length-1)
      if(CharacterUnicode >= 1575 && CharacterUnicode <= 1740 || CharacterUnicode==32){
        setpersianLname(value)
      }
    }
    // name
    let [persianName,setpersianName]=useState(' ')
    function CheckPersianName(e){  
      let value =e.target.value;
      let CharacterUnicode=value.charCodeAt(value.length-1)
      if(CharacterUnicode >= 1575 && CharacterUnicode <= 1740 || CharacterUnicode==32){
        setpersianName(value)
      }
    }
    // father name
     let [persianFname,setpersianFname]=useState(' ')
     function CheckpersianFname(e){  
       let value =e.target.value;
       let CharacterUnicode=value.charCodeAt(value.length-1)
       if(CharacterUnicode >= 1575 && CharacterUnicode <= 1740 || CharacterUnicode==32){
         setpersianFname(value)
       }
     }
  // grand father name
    let [persianGrandf,setpersianGrandf]=useState(' ')
    function CheckpersianGrandf(e){  
      let value =e.target.value;
      let CharacterUnicode=value.charCodeAt(value.length-1)
      if(CharacterUnicode >= 1575 && CharacterUnicode <= 1740 || CharacterUnicode==32){
        setpersianGrandf(value)
      }
    }
  

    return(
    <div className='personal-information'>
    <Container className="bg-white">
    <RegisterNavbar />
      <Row className='py-3 border-bottom border-5'>
        <Col>
          <span className="personal-info-number-border">1</span>
          <span className="personal-info-title fs-3">معلومات شخصی </span>
        </Col>
      </Row>
      </Container>
      <Container className='personal-info-inputs p-3' >
      <form action="">
         {/* inputs */}
        <Row >
            <Col md={4}>
              <label htmlFor="text">عنوان *</label>
              <select name="" id="">
                <option value="---">---</option>
                <option value="male"> مرد </option>
                <option value="female"> زن </option>
              </select>
            </Col>
            <Col md={4}>
              <label htmlFor="">نوع درخواست *</label>
              <select name="" required id="">
                <option value="---">---</option>
                <option value="normal">  عادی </option>
                <option value="again"> تجدید </option>
              </select>
            </Col>
            <Col md={4}>
            <label htmlFor="">کود(توسط سیستم ساخته می شود).</label>
              <input type="text" required readOnly />
            </Col>
        </Row>
        {/* >تخلص  */}
        <Row>
          <Col md={6}>
            <label htmlFor="lastname">تخلص *</label>
            <input
            value={persianLname}
            onChange={CheckpersianLname} type="text" required name='lastname' />
          </Col>
          <Col md={6}>
            <label htmlFor="lastname">تخلص به انگلیسی *</label>
            <input type="text" required name="lastname"/>
          </Col>
        </Row>
        {/* نام * */}
        <Row>
          <Col md={6}>
            <label htmlFor="lastname"> نام * </label>
            <input value={persianName} onChange={CheckPersianName} type="text" required name='lastname' />
          </Col>
          <Col md={6}>
            <label htmlFor="lastname"> نام به انگلیسی * </label>
            <input type="text"  requiredname="lastname"/>
          </Col>
        </Row>
        {/* نام پدر * */}
        <Row>
          <Col md={6}>
            <label htmlFor="lastname"> نام پدر *</label>
            <input value={persianFname} onChange={CheckpersianFname} type="text" required name='lastname' />
          </Col>
          <Col md={6}>
            <label htmlFor="lastname">  نام پدر به انگلیسی *</label>
            <input type="text" required name="lastname"/>
          </Col>
        </Row>
        {/* نام پدر کلان * */}
        <Row>
          <Col md={6}>
            <label htmlFor="lastname"> نام پدر کلان *</label>
            <input value={persianGrandf} onChange={CheckpersianGrandf} type="text" required   name='lastname' />
          </Col>
          <Col md={6}>
            <label htmlFor="lastname"> نام پدر کلان به انگلیسی </label>
            <input type="text" required   name="lastname"/>
          </Col>
        </Row>
        {/* تاریخ تولد به شمسی * */}
        <Row>
          <Col md={6}>
            <label htmlFor="lastname"> تاریخ تولد به شمسی *</label>
            <input type="date"  required  name='lastname' />
          </Col>
          <Col md={6}>
            <label htmlFor="lastname">تاریخ تولد به میلادی *</label>
            <input type="date"  required   name="lastname"/>
          </Col>
        </Row>
        {/*  شغل  */}
        <Row className='row-cols-md-4 row-cols-1'>
          <Col>
            <label htmlFor="lastname"> شغل </label>
            <select  required  >
              <option>---</option>
              <option>دانشجو</option>
              <option> عادی </option>
              <option> کارمند خانه </option>
              <option> خانم خانه </option>
              <option> نجار </option>
              <option> خیاط </option>

            </select>
          </Col>
          {/* محل تولد * */}
          <Col>
            <label htmlFor="lastname"> محل تولد *</label>
            <select  required  >
              <option>---</option>
              <option>دانشجو</option>
              <option> عادی </option>
              <option> کارمند خانه </option>
              <option> خانم خانه </option>
              <option> نجار </option>
              <option> خیاط </option>

            </select>
          </Col>
          {/*جلد * */}
          <Col>
            <label htmlFor="lastname"> سکونت فعلی *</label>
            <select  required  >
              <option>---</option>
              <option>دانشجو</option>
              <option> عادی </option>
              <option> کارمند خانه </option>
              <option> خانم خانه </option>
              <option> نجار </option>
              <option> خیاط </option>

            </select>
          </Col>
          {/*  */}
          <Col>
            <label htmlFor="lastname"> حالت مدنی *</label>
            <select  required  >
              <option>---</option>
              <option>دانشجو</option>
              <option> عادی </option>
              <option> کارمند خانه </option>
              <option> خانم خانه </option>
              <option> نجار </option>
              <option> خیاط </option>

            </select>
          </Col>
        </Row>

        <p>در صورتیکه شغل یا رشته تان در لست موجود نمی باشد لطفا در هنگام مراجعه به ریاست پاسپورت با مسولین در مورد صحبت نمایید.</p>
        {/* نوع سند هویت * */}
        <Row className='row-cols-md-5 row-cols-1'>
          <Col>
            <label htmlFor="lastname"> نوع سند هویت </label>
            <select  required  >
              <option>---</option>
              <option>دانشجو</option>
              <option> عادی </option>
              <option> کارمند خانه </option>
              <option> خانم خانه </option>
              <option> نجار </option>
              <option> خیاط </option>

            </select>
          </Col>
          {/* نمبر تذکره ** */}
          <Col>
            <label htmlFor="lastname"> نمبر تذکره **</label>
            <select  required  >
              <option>---</option>
              <option>دانشجو</option>
              <option> عادی </option>
              <option> کارمند خانه </option>
              <option> خانم خانه </option>
              <option> نجار </option>
              <option> خیاط </option>

            </select>
          </Col>
          {/*جلد * */}
          <Col>
            <label htmlFor="lastname">جلد *</label>
            <select  required  >
              <option>---</option>
              <option>دانشجو</option>
              <option> عادی </option>
              <option> کارمند خانه </option>
              <option> خانم خانه </option>
              <option> نجار </option>
              <option> خیاط </option>

            </select>
          </Col>
          {/* صفحه * */}
          <Col>
            <label htmlFor="lastname"> صفحه *</label>
            <select  required  >
              <option>---</option>
              <option>دانشجو</option>
              <option> عادی </option>
              <option> کارمند خانه </option>
              <option> خانم خانه </option>
              <option> نجار </option>
              <option> خیاط </option>

            </select>
          </Col>
          {/* شماره ثبت * */}
          <Col>
            <label htmlFor="lastname"> شماره ثبت *</label>
            <select  required  >
              <option>---</option>
              <option>دانشجو</option>
              <option> عادی </option>
              <option> کارمند خانه </option>
              <option> خانم خانه </option>
              <option> نجار </option>
              <option> خیاط </option>

            </select>
          </Col>
        </Row>
        
        {/* randomly letter */}
        <Row className='row-cols-md-3 row-cols-1'>
          <Col>
            <label htmlFor="">حروف و اعداد </label>
            <h1 className='random-letter-number'> {randLetter} </h1>
            <label htmlFor="">حروف و اعداد بالا را اینجا بنویسید</label>
            <input type="text" />
          </Col>
        </Row>
        <Link to={'/photosign'}>
          <button type='button' className="btn btn-primary p-3 my-3"> ثبت </button></Link>
       </form>
       
    </Container>
    
    <div style={{height:'100px'}}></div>
    </div>
    )
}