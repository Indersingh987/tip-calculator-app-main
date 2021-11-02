function display(amount,num,percen){
    if(num < 1){
      num = 1;
    }
    if(amount < 0) amount = 0;
    let total = Number(amount)/Number(num);
    let total_tip = amount * percen/100;
    let tip = total_tip/num;
    document.getElementById('total').innerHTML = "$" + total;
    document.getElementById('tip').innerHTML = "$" + tip;
  }
  function reset(){
    document.getElementById('bill').value = 0;
    document.getElementById('num_of_people').value = 1;
    document.getElementById('total').innerHTML = "$0.00";
    document.getElementById('tip').innerHTML = "$0.00";
  }