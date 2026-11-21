function getingdate(dayslater){
    const date = new Date();
    date.setDate(date.getDate() + dayslater);
    return date.toLocaleDateString('en-US' , {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    });
}

console.log(getingdate(0)),
console.log(getingdate(3));


