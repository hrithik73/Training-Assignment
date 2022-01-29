/**
 * Task 2 :
As described task is:
You have to create a program for ATM Which would have certain defined denominations of notes : 100 ,200, 500, and 2000 INR.
Now you have to design your ATM in such a way that at any time ATM can be top-up with any required domination like I can add 41000 as (2000 x 20) + (500 x 2) notes
Your ATM should have a function to withdraw cash , input can be any amount:
Use cases for withdraw as below:
1: if amount is not present show error insufficient balance
2: if amount is not in the factor of available denominations show error to ask for multiple of available denomination
3: first largest denomination should be used than smaller : like if I opt for 2300 rs, amount dispatched should be (2000 x 1 ) + (200 x 1) + (100 x 1)
3. b: if any denomination is not there like suppose you don’t have 2000 notes left in ATM , then, amount dispatched should be (500 x 4) +  (200 x 1) + (100 x 1)

Next step: it can be done by Modi Ji, that older denomination is not valid in case of demonetization, 
like 2000 Notes are banned and new 5000 notes are legal , so you code should be like you don’t need to change much of it, 
Try to achieve OOPS , and SOLID principles as much as you can, 

Also, we will add new use cases to see whether your system can adapt to those changes. If Not, then your design is bad. (SOLID,TRY,YAGNI,KISS)
**/
