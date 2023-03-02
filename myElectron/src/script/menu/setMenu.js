const commonMenuList = [
  { classNm:'fa fa-home fa-lg'
    , listNm :'Home'}
  , { classNm:'fa fa-user fa-lg'
    , listNm : 'Login'}
  , { classNm:'fa fa-envelope-o fa-lg'
    , listNm : 'Contact'}
];
const userMenuList = [
  { classNm:'fa fa-desktop fa-lg'
  , listNm :'Technology'}
  , { classNm:'fa fa-plane fa-lg'
  , listNm : 'Travel'}
  , { classNm:'fa fa-microphone fa-lg'
  , listNm : 'Film & Music'}
  , { classNm:'fa fa-flask fa-lg'
  , listNm :'Web Tools'}
  , { classNm:'fa fa-picture-o fa-lg'
  , listNm : 'Art & Design'}
  , { classNm:'fa fa-align-left fa-lg'
  , listNm : 'Magazines'}
];
document.addEventListener('DOMContentLoaded',(ev)=>{
  drawCommonMenuList();
  drawUserMenuList();
  drawLstMenuList();
})
function drawCommonMenuList()
{
  let struct = ``;
  for(const obj of commonMenuList)
  {
    struct +=`
    <li>
      <a href="#">
        <i class="${obj.classNm}"></i>
        <span class="nav-text">${obj.listNm}</span>
      </a>
    </li>`
  }
  commonMenuList.forEach((el)=>{

  });
  document.querySelector('#commonMenu').innerHTML = struct;
}
function drawUserMenuList()
{
  let struct = ``;
  for(let i = 0 ; i<userMenuList.length;i++)
  {
    let className = 'darkerli';
    if(i===0) className = 'darkerlishadow';
    else if(i === (userMenuList.length-1)) className = 'darkerlishadowdown';
    struct +=`
      <li class=${className}>
        <a href="#">
          <i class="${userMenuList[i].classNm}"></i>
          <span class="nav-text">${userMenuList[i].listNm}</span>
        </a>
      </li>`
  }
  document.querySelector('#commonMenu').innerHTML += struct;
}
function drawLstMenuList()
{
  document.querySelector('#style-1').innerHTML +=`<ul class="logout">
  <li>
    <a href="">
      <i class="fa fa-lightbulb-o fa-lg"></i>
      <span class="nav-text">
        BLOG
      </span>
    </a>
  </li>
</ul>`;
}
