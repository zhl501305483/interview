
    /**
输入
<div>
    <p>
        <span></span>
    </p>
</div>
输出
DOM树
{
  type: 'div'
  children: [
    {
      type: 'p',
      children: [
        {
          type: 'span'
        }
      ]
    } 
  ]
}
 */

// 1.
var str = `
<div>
    <p>
        <span></span>
    </p>
</div>
`
console.log(str)









//  2.相反
    // var obj = {
    //   type: 'div',
    //   children: [{
    //     type: 'p',
    //     children: [{
    //       type: 'span'
    //     }]
    //   }]
    // }

    // function render(data) {
    //   var tagName = document.createElement(data.type)
    //   if (data.children) {
    //     data.children.forEach(item => {
    //       var temp = render(item)
    //       tagName.appendChild(temp)
    //     })
    //   }
    //   return tagName
    // }

    // render(obj)