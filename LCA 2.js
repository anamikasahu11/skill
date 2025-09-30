//Write a program  to print numbers from 1 to 30 but skip the multiples of 3(using continue)
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}

//Write a program to display numbers from 10 to 50 but skip the numbers that are divisible by 7(using continue)
for (let i = 10; i <= 50; i++) {
    if (i % 7 === 0) {
        continue; 
    }
    console.log(i);
}
