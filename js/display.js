function displayDetails() {
    let flag = `<tbody>`;
    for (let i = 1; i <= localStorage["Index"]; i++) {
        if (localStorage[`${i}`]) {
            details_arr = JSON.parse(localStorage[`${i}`]);
        }
        else continue;
        flag += `<tr>`;
        for(let key in details_arr) {
            flag += `<td> ${details_arr[key]} </td>`;
        }
        flag += `</tr>`;
    }
    flag += `<tbody>`;
    return flag;
}