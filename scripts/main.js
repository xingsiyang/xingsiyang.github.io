let head = document.querySelector('h1');
let images = document.getElementById('images');//照片所在容器
let show = document.getElementById('imgShow');//突出显示的照片容器
let bigimg = document.getElementById('bigimg');//突出显示的照片标签
let currentImg;//被点击的照片

// 鼠标点击照片突出显示功能
function highlight(temp)
{
  head.style.display = "none";
  images.style.display = "none";
  show.style.display = "block";
  show.style.textAlign = "center";
  bigimg.setAttribute('src', temp.src);
  bigimg.style.width = '40vw';
  currentImg = temp;
}

// 照片突出显示后单击返回照片墙
function back()
{
  show.style.display = "none";
  head.style.display = "block";
  images.style.display = "grid";
}

// 显示前一张图片
function showBefore()
{
  if (currentImg.previousSibling.previousSibling == null)
  {
  }
  else
  {
    currentImg = currentImg.previousSibling.previousSibling;
    bigimg.setAttribute('src', currentImg.src);
  }

}

// 显示后一张图片
function showAfter()
{
  if (currentImg.nextSibling.nextSibling == null)
  {
  }
  else
  {
    currentImg = currentImg.nextSibling.nextSibling;
    bigimg.setAttribute('src', currentImg.src);
  }
}