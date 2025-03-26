const arr = [1, 2, 3, 4, 1, 0, 2, 2];
let size=arr.length;
let result=[[]];


const divide = (arr, n) => {
  // Write your code here
	for(let i=0; i<size; i++){
		let sum=0;
		if(arr[i]==n){
			arr[i]++;
		}
		else if(sum+arr[i]<=n){
			subarray.push(arr[i]);
		}
		else{
			result.push(subarray);
			
			
		}
	}
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
