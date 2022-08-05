let arr=["chủ nhật", "thứ hai", "thứ ba", "thứ tư", "thứ năm", "thứ sáu", "thứ bảy"];

function checkDay(array) {
    let date = new Date;
    let day = date.getDay();
    for (let i in array) {
        if (day === +i) {
            console.log(array[i]);
        }
    }
}

checkDay(arr);