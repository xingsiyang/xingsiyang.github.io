//九宫格里每个方格的HTML的div对象集合
let cells = document.getElementsByClassName("cell");

function move(e)
{
    //当前选中的方格
    let currentPosRow = parseInt($(e).attr('rowcount'));
    let currentPosCol = parseInt($(e).attr('columncount'));
    //当前为空白的方格
    let empty = $("#empty");
    let emptytilePosRow = empty.attr('rowcount');
    let emptytilePosCol = empty.attr('columncount');

    //向下移动
    if (currentPosRow + 1 == emptytilePosRow && currentPosCol == emptytilePosCol)
    {
        change(e);
    }
    //向右移动
    else if (currentPosRow == emptytilePosRow && currentPosCol + 1 == emptytilePosCol)
    {
        change(e);
    }
    //向上移动
    else if (currentPosRow - 1 == emptytilePosRow && currentPosCol == emptytilePosCol)
    {
        change(e);
    }
    //向左移动
    else if (currentPosRow == emptytilePosRow && currentPosCol - 1 == emptytilePosCol)
    {
        change(e);
    } 
    //判断是否完成游戏
    if (isFinished())
    {
        alert("完成了");
    }
}

//打乱九宫格顺序
function start()
{
    let array = new Array();
    for (let i = 0; i < 8; i++) 
    {
        let temp = Math.floor(Math.random()*10);
        if ($.inArray(temp, array) === -1 && temp !== 0 && temp !== 9)
        {
            cells[i].innerHTML = temp;
            array[array.length] = temp;
            cells[i].id = '';
        }
        else
        {
            i -= 1;
        }
    }
    cells[8].innerHTML = '';
    cells[8].id = 'empty';
}

//重置游戏
function restart()
{
    for (let i = 0; i < 8; i++) 
    {
        cells[i].innerHTML = i + 1;
        cells[i].id = '';
    }
    cells[8].innerHTML = '';
    cells[8].id = 'empty';
}

//判断是否完成游戏
function isFinished()
{
    let sign = true;
    for (let i = 0; i < 8; i++) 
    {
        if (cells[i].innerHTML != i + 1)
        {
            sign = false;
        }
    }
    return sign;
}

// 交换当前单元格和空单元格的内容和id
function change(e)
{
    document.getElementById('empty').innerHTML = e.innerHTML;
    document.getElementById('empty').setAttribute('id', '');
    e.innerHTML = '';
    $(e).attr('id', 'empty');
}