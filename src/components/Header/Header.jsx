import React , {useRef , useEffect } from 'react';

import { Container , Row } from 'reactstrap';

import '../Header/header.scss';


const nav__links=[
  {
    path:'#heroSection',
    display:'Home'
  },
  {
    path:'#skillSection',
    display:'Skills'
  },
  {
    path:'#educationSection',
    display:'Education'
  },
  {
    path:'#projectSection',
    display:'Project'
  },
  {
    path:'#footer',
    display:'Contact'
  },
  
]

var count=0;
const mobileNav = () => {
      let nav__btn = document.getElementById('nav__btn');
      let visible = document.getElementById('show__nav');
      let mobile__Container = document.getElementById('mobile__Container'); 
      if(count===0){
        nav__btn.innerHTML=`<i class="ri-arrow-left-line"></i>`;
        visible.style.visibility="visible";
        mobile__Container.style.height="auto";
        count=1; 
      } 
      else if(count===1){
        nav__btn.innerHTML=`<i class="ri-menu-3-fill"></i>`;
        visible.style.visibility="collapse";
        mobile__Container.style.height="0px";
        count=0; 
      }

}

const Header = () => {

  const headerRef = useRef(null)

  const stickyHeaderFunc = ()=>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop >80 || document.documentElement.scrollTop >80){
        headerRef.current.classList.add('sticky__header')
      }
      else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }   

  useEffect(()=>{
    stickyHeaderFunc()

    return window.removeEventListener('scroll',stickyHeaderFunc)
  })

  return (
    <header className='header' ref={headerRef}>
      <Container id='mobile__nav__container'>
        <Row>
          <div id="nav"  className="nav__wrapper d-flex align-items-center justify-content-between">

            {/* ///////////logo//////////////// */}

            <div className="logo">
              {/* <img src={logo} alt="" />  */}
              <h1>  &lt; L G /&gt; </h1>
            </div>

            {/* ////////////////menu start//////////// */}
            

            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index)=> (
                  <li className="nav__item" key={index}>
                    <a 
                      href={item.path} 
                      className="nav__link"
                    >
                      {item.display}
                    </a>
                  </li>

                ))}
                  
              </ul>
            </div>

            {/* ////////////////menu end//////////// */}
            

            <span className="mobile__menu">
              <i class='ri-menu-line'></i>
            </span>

          </div>

 {/* /////////////////////////Mobile menu ///////////////////////// */}

          <div id="mobile__Container" className="nav__wrapper d-flex align-items-center justify-content-between">

            <div className="mobile__nav">

              <div className="logo">
                <h1>  &lt; L G /&gt; </h1>
              </div>

              

              <div className="hamburger">
                {/* <input id='hamburger__check' type="checkbox" />
                <label for="hamburger__check" className='ab'>=kjugigu</label> */}
                <div id='nav__btn' onClick={mobileNav}><i class="ri-menu-3-fill"></i></div>
              </div>
            </div>

            {/* ////////////////menu start//////////// */}

            <div id='show__nav' className="mobile__navigation">

              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index)=> (
                  <li className="nav__item" key={index}>
                    <a 
                      href={item.path} 
                      className="nav__link"
                      onClick={mobileNav}
                    >
                      {item.display}
                    </a>
                  </li>

                ))}
                  
              </ul>
            </div>

            {/* ////////////////menu end//////////// */}
            

            <span className="mobile__menu">
              <i class='ri-menu-line'></i>
            </span>

          </div>


        </Row>
      </Container>
    </header>
  )
}

export default Header