import {ref} from 'vue'
export const  changeSerialize = (str) => {
      // 将空格转换为 &nbsp;
      var htmlText = str.replace(/ /g, '&nbsp;');
      // 将 \r\n 替换为 <br> 标签
      htmlText = htmlText.replace(/\r\n/g, '<br>');
      // 将剩余的 \r 替换为 <br> 标签
      htmlText = htmlText.replace(/\r/g, '<br>');
      return htmlText;
}
export const changeCode = (str , language) => {
    return ref('```' + language.value + '\n' + str.value + '\n' + '```');
}