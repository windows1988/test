var imgupload= {};
imgupload.install = function (Vue, options) {
  Vue.prototype.$imgupload = (img,form,suc,err) => {
    var v=new Vue();
    let imgurl=v.$baseurl.imgupload;
    let formData = new FormData();
    let columnName='img';
    formData.append(columnName, img);
    formData.append("filetype", img.type);
    if(form!=undefined&&form!=null){
      for(let i in form){
        formData.append(i, form[i]);
      }
    }

    v.$Ajaxy("post",imgurl,formData,suc,err,true);
  }
}
module.exports = imgupload;
